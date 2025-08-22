import allGenerators from "../generators/index";
import { InputGenerator, ValueWithDescription } from "../types/InputGenerator";
import { FilterOptions, InputItem } from "../types/io";
import { LevelValues, CategoryValues, SubcategoryValues, Subcategory } from "../types/filters.ts";

class InputRegistry {

    private readonly generators: InputGenerator[] = [];

    public constructor() {

        /**
         * 1) Load all generators so they can be filtered and ran during API calls
         */
        allGenerators.forEach((generatorCategory: InputGenerator[]) => {
            generatorCategory.forEach((generator: InputGenerator) => {
                this.generators.push(generator);
            });
        });


        /**
         * 2) Validate there are no duplicates (by type) from the generators
         */
        this.generators.forEach((generator: InputGenerator) => {
            // Catch duplicates (some subcategories are the same, but not within the same category)
            const duplicateExists = this.generators.find((gen) => {
                return gen.category === generator.category
                    && gen.subcategory === generator.subcategory
                    && gen !== generator;
            });

            if (duplicateExists !== undefined) {
                throw new Error(`Subcategory '${generator.subcategory}' for category '${generator.category}' is defined multiple times`);
            }
        });


        /**
         * 3) Validate all filters match expected values
         */

        // Store filter values from all generators
        const uniqueLevels: Set<string> = new Set<string>();
        const uniqueCategories: Set<string> = new Set<string>();
        const allSubcategories: string[] = [];

        this.generators.forEach((generator: InputGenerator) => {
            uniqueLevels.add(generator.level);
            uniqueCategories.add(generator.category);
            allSubcategories.push(generator.subcategory);
        });

        // Check for exact match with filters and expected values
        const validateFilter = (generatorVals: Set<string> | string[], realVals: readonly string[], typeName: string) => {
            const generatorTypes: string[] = Array.from(generatorVals).sort();
            const realTypes: string[] = Array.from(realVals).sort();
            if (generatorTypes.length !== realTypes.length) {
                throw new Error(`There are ${generatorTypes.length} unique ${typeName} values from the generators; should be ${realTypes.length}. `
                    + `\nGenerator ${typeName}: ${JSON.stringify(generatorTypes)}\nDefined ${typeName}: ${JSON.stringify(realTypes)}`);
            }

            for (let i: number = 0; i < realTypes.length; ++i) {
                if (generatorTypes[i] !== realTypes[i]) {
                    throw new Error(`Invalid ${typeName} value in generator; expected ${generatorTypes[i]} to be ${realTypes[i]}.`);
                }
            }
        }

        validateFilter(uniqueLevels, LevelValues, "level");
        validateFilter(uniqueCategories, CategoryValues, "category");
        validateFilter(allSubcategories, SubcategoryValues, "subcategory");
    }

    /**
     * Gets inputs with their metadata
     */
    public getInputs(options: FilterOptions): InputItem[] {
        const normalizedOptions: FilterOptions | undefined = this.normalizeFilterOptions(options);
        this.validateFilters(normalizedOptions);

        // Get generators that fit the provided filters
        const filteredGenerators: InputGenerator[] = this.applyFilters(normalizedOptions);

        const inputItems: InputItem[] = [];
        filteredGenerators.forEach((generator: InputGenerator) => {
            // Generate fresh values for this subcategory
            const valuesWithDescriptions: ValueWithDescription[] = generator.generate();

            // Add value and metadata
            valuesWithDescriptions.forEach(({ value, description }: ValueWithDescription) => {
                inputItems.push({
                    value,
                    description,
                    category: generator.category,
                    subcategory: generator.subcategory,
                    level: generator.level
                });
            });
        });

        return inputItems;
    }

    /**
     * Gets raw inputs without any metadata
     */
    public getRawInputs(options: FilterOptions): any[] {
        const normalizedOptions: FilterOptions | undefined = this.normalizeFilterOptions(options);
        this.validateFilters(normalizedOptions);

        // Get generators that fit the provided filters
        const filteredGenerators: InputGenerator[] = this.applyFilters(normalizedOptions);

        const rawInputs: any[] = [];
        filteredGenerators.forEach((generator: InputGenerator) => {
            // Generate fresh values for this subcategory
            const valuesWithDescriptions: ValueWithDescription[] = generator.generate();

            // Add each value
            valuesWithDescriptions.forEach(({ value }: ValueWithDescription) => {
                rawInputs.push(value);
            });
        });

        return rawInputs;
    }

    /**
     * Returns all data as a JSON record
     */
    public toJSON(options: FilterOptions): Record<string, any> {
        const normalizedOptions: FilterOptions | undefined = this.normalizeFilterOptions(options);
        this.validateFilters(normalizedOptions);

        const data: Record<string, any> = {}; // Stores all data

        this.generators.forEach((generator: InputGenerator) => {
            const category: string = generator.category;
            const subcategory: Subcategory = generator.subcategory;

            // Adds category if required
            if (data[category] === undefined) {
                data[category] = {};
            }

            if (data[category][subcategory] !== undefined) {
                throw new Error(`Attempted to load subcategory ${subcategory} twice`);
            }

            // Add subcategory generator
            data[category][subcategory] = {
                category: category,
                subcategory: subcategory,
                level: generator.level,
                values: generator.generate()
            };
        });

        return data;
    }


    /**
     * Wraps singular string filter values into an array
     *
     * Also throws an error if any filters are empty arrays
     */
    private normalizeFilterOptions(options?: FilterOptions): FilterOptions | undefined {
        if (!options) {
            return options;
        }

        const emptyArrays: string[] = [];
        const normalizeSection = (section: any, name: string) => {
            if (!section) {
                return section;
            }

            const normalized = { ...section };

            // Validate arrays are non-empty
            if (Array.isArray(normalized.levels) && normalized.levels.length === 0) {
                emptyArrays.push(`${name}.levels`);
            }
            if (Array.isArray(normalized.categories) && normalized.categories.length === 0) {
                emptyArrays.push(`${name}.categories`);
            }
            if (Array.isArray(normalized.subcategories) && normalized.subcategories.length === 0) {
                emptyArrays.push(`${name}.subcategories`);
            }

            // Wrap single values in arrays
            if (normalized.levels && !Array.isArray(normalized.levels)) {
                normalized.levels = [normalized.levels];
            }
            if (normalized.categories && !Array.isArray(normalized.categories)) {
                normalized.categories = [normalized.categories];
            }
            if (normalized.subcategories && !Array.isArray(normalized.subcategories)) {
                normalized.subcategories = [normalized.subcategories];
            }

            return normalized;
        };

        // Normalize both sections
        const include = normalizeSection(options.include, 'include');
        const exclude = normalizeSection(options.exclude, 'exclude');

        if (emptyArrays.length > 0) {
            throw new Error(`Cannot provide an empty array for input options (${emptyArrays.join(', ')})`);
        }

        return { include, exclude };
    }

    /**
     * Ensures provided filters are valid:
     * * No include and exclude for the same section
     * * No invalid values (like categories)
     * * Input structure had valid types
     */
    private validateFilters(options?: FilterOptions): void {
        // Skip validation if no options present
        if (!options) {
            return;
        }

        const validateSection = (section: any, name: string) => {
            if (!section) {
                return;
            }

            // Type validation
            ['categories', 'subcategories', 'levels'].forEach(key => {
                if (section[key] && !Array.isArray(section[key])) {
                    throw new Error(`${name}.${key} must be an array`);
                }
            });

            // Value validation
            if (section.levels) {
                const invalid = section.levels.filter((l: any) => !LevelValues.includes(l));
                if (invalid.length) {
                    throw new Error(`Invalid levels in ${name}: ${invalid.join(', ')}`);
                }
            }

            if (section.categories) {
                const invalid = section.categories.filter((c: any) => !CategoryValues.includes(c));
                if (invalid.length) {
                    throw new Error(`Invalid categories in ${name}: ${invalid.join(', ')}`);
                }
            }

            if (section.subcategories) {
                const invalid = section.subcategories.filter((s: any) => !SubcategoryValues.includes(s));
                if (invalid.length) {
                    throw new Error(`Invalid subcategories in ${name}: ${invalid.join(', ')}`);
                }
            }
        };

        // Validate both sections
        validateSection(options.include, 'include');
        validateSection(options.exclude, 'exclude');
        if (Object.keys(options).length > 2) {
            throw new Error(`Input options can only include the keys 'include' and 'exclude'`);
        }

        // Throw an error if include and exclude are both provided for a filter
        const doublyIncluded: string[] = [];
        if (options.exclude?.levels && options.include?.levels) {
            doublyIncluded.push('levels');
        }
        if (options.exclude?.categories && options.include?.categories) {
            doublyIncluded.push('categories');
        }
        if (options.exclude?.subcategories && options.include?.subcategories) {
            doublyIncluded.push('subcategories');
        }

        if (doublyIncluded.length > 0) {
            const errMessage: string = `Cannot define both 'exclude' and 'include' for the same filter type (${doublyIncluded.join(', ')}). `
                + `Using 'include' makes all non-specified filters excluded, and vice-verse for 'exclude'`;
            throw new Error(errMessage);
        }
    }

    /**
     * Applies specified filters to all generators, returning only the matching InputGenerators
     */
    private applyFilters(options?: FilterOptions): InputGenerator[] {
        let generators: InputGenerator[] = this.generators;

        // Apply the 'include' filters
        if (options?.include) {
            const include = options.include;

            generators = generators.filter((generator: InputGenerator) => {
                const categoryMatch: boolean = !include.categories || include.categories.includes(generator.category);
                const subcategoryMatch: boolean = !include.subcategories || include.subcategories.includes(generator.subcategory);
                const levelMatch: boolean = !include.levels || include.levels.includes(generator.level);

                return categoryMatch && subcategoryMatch && levelMatch;
            });
        }

        // Apply the 'exclude' filters
        if (options?.exclude) {
            const exclude = options.exclude;

            generators = generators.filter((generator: InputGenerator) => {
                const categoryExcluded: boolean = exclude.categories?.includes(generator.category) ?? false;
                const subcategoryExcluded: boolean = exclude.subcategories?.includes(generator.subcategory) ?? false;
                const levelExcluded: boolean = exclude.levels?.includes(generator.level) ?? false;

                return !categoryExcluded && !subcategoryExcluded && !levelExcluded;
            });
        }

        return generators;
    }
}

export default InputRegistry;
