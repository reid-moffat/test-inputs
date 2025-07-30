import allGenerators from "../generators/index";
import { InputGenerator, ValueWithDescription } from "../types/InputGenerator";
import { FilterOptions, InputItem } from "../types/io";
import { Subcategory } from "../types/categories";

class InputRegistry {

    private readonly generators: InputGenerator[] = [];

    public constructor() {
        // Loads all generators
        allGenerators.forEach((generatorCategory: InputGenerator[]) => {
            generatorCategory.forEach((generator: InputGenerator) => {
                this.generators.push(generator);
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
