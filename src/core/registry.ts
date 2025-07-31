import allGenerators from "../generators/index";
import { InputGenerator, ValueWithDescription } from "../types/InputGenerator";
import { FilterOptions, InputItem } from "../types/io";
import { Category, Level, Subcategory } from "../types/categories";

class InputRegistry {

    private readonly generators: InputGenerator[] = [];

    // Copy filter type values for validation
    private readonly allCategories: string[];
    private readonly allSubcategories: string[];
    private readonly allLevels: string[];

    public constructor() {
        // Loads all generators
        allGenerators.forEach((generatorCategory: InputGenerator[]) => {
            generatorCategory.forEach((generator: InputGenerator) => {
                this.generators.push(generator);
            });
        });

        // Loads all type values
        const categoriesTemp = new Set<Category>();
        const subcategoriesTemp = new Set<Subcategory>();
        const levelsTemp = new Set<Level>();

        this.generators.forEach((generator: InputGenerator) => {
            // Catch duplicates
            const duplicateExists = this.generators.find((gen) => {
                return gen.category === generator.category
                    && gen.subcategory === generator.subcategory
                    && gen !== generator;
            });
            if (duplicateExists !== undefined) {
                throw new Error(`Subcategory '${generator.subcategory}' for category '${generator.category}' is defined multiple times`);
            }

            categoriesTemp.add(generator.category);
            subcategoriesTemp.add(generator.subcategory);
            levelsTemp.add(generator.level);
        });

        this.allCategories = Array.from(categoriesTemp);
        this.allSubcategories = Array.from(subcategoriesTemp);
        this.allLevels = Array.from(levelsTemp);
    }

    public getInputs(options?: FilterOptions): InputItem[] {
        this.validateFilters(options);

        // Get generators that fit the provided filters
        const filteredGenerators: InputGenerator[] = this.applyFilters(options);

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

    public getRawInputs(options?: FilterOptions): any[] {
        this.validateFilters(options);

        // Get generators that fit the provided filters
        const filteredGenerators: InputGenerator[] = this.applyFilters(options);

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

    public toJSON(spaces: number): string {
        const data: Record<string, any> = {}; // Stores all data to be converted to JSON string

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

        return JSON.stringify(data, null, spaces);
    }


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
            if (section.categories) {
                const invalid = section.categories.filter((c: any) => !this.allCategories.includes(c));
                if (invalid.length) {
                    throw new Error(`Invalid categories in ${name}: ${invalid.join(', ')}`);
                }
            }

            if (section.subcategories) {
                const invalid = section.subcategories.filter((s: any) => !this.allSubcategories.includes(s));
                if (invalid.length) {
                    throw new Error(`Invalid subcategories in ${name}: ${invalid.join(', ')}`);
                }
            }

            if (section.levels) {
                const invalid = section.levels.filter((l: any) => !this.allLevels.includes(l));
                if (invalid.length) {
                    throw new Error(`Invalid levels in ${name}: ${invalid.join(', ')}`);
                }
            }
        };

        // Validate both sections
        validateSection(options.include, 'include');
        validateSection(options.exclude, 'exclude');

        // Throw an error if include and exclude are both provided for a filter
        if (options.exclude?.categories && options.include?.categories) {
            throw new Error(`Cannot define both exclude and include for any filter (categories)`);
        }
        if (options.exclude?.subcategories && options.include?.subcategories) {
            throw new Error(`Cannot define both exclude and include for any filter (subcategories)`);
        }
        if (options.exclude?.levels && options.include?.levels) {
            throw new Error(`Cannot define both exclude and include for any filter (levels)`);
        }

        // Check overlaps
        if (options.include && options.exclude) {
            const checkOverlap = (includeArr: any[], excludeArr: any[], type: string) => {
                if (includeArr && excludeArr) {
                    const overlap: any[] = includeArr.filter((item: any): boolean => excludeArr.includes(item));

                    if (overlap.length) {
                        throw new Error(`${type} appear in both include and exclude: ${overlap.join(', ')}`);
                    }
                }
            };

            checkOverlap(options.include.categories ?? [], options.exclude.categories ?? [], 'Categories');
            checkOverlap(options.include.subcategories ?? [], options.exclude.subcategories ?? [], 'Subcategories');
            checkOverlap(options.include.levels ?? [], options.exclude.levels ?? [], 'Levels');
        }
    }

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
