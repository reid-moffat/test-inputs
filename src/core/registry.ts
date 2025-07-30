import allGenerators from "../generators/index";
import { InputGenerator, ValueWithDescription } from "../types/InputGenerator";
import { FilterOptions, InputItem } from "../types/io";
import { Subcategory } from "../types/categories";

class InputRegistry {
    private readonly generators: Map<string, InputGenerator[]> = new Map();

    public constructor() {
        this.loadGenerators();
    }

    private loadGenerators(): void {
        allGenerators.forEach((generatorCategory: InputGenerator[]) => {
            generatorCategory.forEach((generator: InputGenerator) => {
                const key = generator.category;
                if (!this.generators.has(key)) {
                    this.generators.set(key, []);
                }
                this.generators.get(key)!.push(generator);
            });
        });
    }

    public getInputs(options?: FilterOptions): InputItem[] {
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

        this.generators.forEach((generators: InputGenerator[], category: string) => {
            // Use key/value for category and subcategory data
            data[category] = {};

            generators.forEach((generator: InputGenerator) => {
                const subcategory: Subcategory = generator.subcategory;

                data[category][subcategory] = {
                    category: category,
                    subcategory: subcategory,
                    level: generator.level,
                    values: generator.generate()
                };
            });
        });

        return JSON.stringify(data, null, spaces);
    }

    private applyFilters(options?: FilterOptions): InputGenerator[] {
        if (!options) {
            return this.getAllGenerators();
        }

        let generators: InputGenerator[] = this.getAllGenerators();

        // Apply the 'include' filters
        if (options.include) {
            generators = this.applyIncludeFilters(generators, options.include);
        }

        // Apply the 'exclude filters
        if (options.exclude) {
            generators = this.applyExcludeFilters(generators, options.exclude);
        }

        return generators;
    }

    private applyIncludeFilters(generators: InputGenerator[], include: NonNullable<FilterOptions['include']>): InputGenerator[] {
        return generators.filter((generator: InputGenerator) => {
            const categoryMatch: boolean = !include.categories || include.categories.includes(generator.category);
            const subcategoryMatch: boolean = !include.subcategories || include.subcategories.includes(generator.subcategory);
            const levelMatch: boolean = !include.levels || include.levels.includes(generator.level);

            return categoryMatch && subcategoryMatch && levelMatch;
        });
    }

    private applyExcludeFilters(generators: InputGenerator[], exclude: NonNullable<FilterOptions['exclude']>): InputGenerator[] {
        return generators.filter((generator: InputGenerator) => {
            const categoryExcluded: boolean = exclude.categories?.includes(generator.category) ?? false;
            const subcategoryExcluded: boolean = exclude.subcategories?.includes(generator.subcategory) ?? false;
            const levelExcluded: boolean = exclude.levels?.includes(generator.level) ?? false;

            return !categoryExcluded && !subcategoryExcluded && !levelExcluded;
        });
    }

    private getAllGenerators(): InputGenerator[] {
        const allGenerators: InputGenerator[] = [];
        this.generators.forEach((generators: InputGenerator[]) => {
            allGenerators.push(...generators);
        });
        return allGenerators;
    }
}

export default InputRegistry;
