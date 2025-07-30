import allGenerators from "../generators/index";
import { InputGenerator, ValueWithDescription } from "../types/InputGenerator";
import { FilterOptions, InputItem } from "../types/io";

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
        const filteredGenerators = this.applyFilters(options);
        const inputItems: InputItem[] = [];

        filteredGenerators.forEach(generator => {
            const valuesWithDescriptions: ValueWithDescription[] = generator.generate();
            valuesWithDescriptions.forEach(({ value, description }) => {
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
        const filteredGenerators = this.applyFilters(options);
        const rawInputs: any[] = [];

        filteredGenerators.forEach(generator => {
            const values = generator.values();
            rawInputs.push(...values);
        });

        return rawInputs;
    }

    public toJSON(): string {
        const data: Record<string, any> = {};

        this.generators.forEach((generators, category) => {
            data[category] = {};
            generators.forEach(generator => {
                const subcategory = generator.subcategory;
                if (!data[category][subcategory]) {
                    data[category][subcategory] = {
                        level: generator.level,
                        values: generator.values().map(value => ({
                            value,
                            description: this.generateDescription(value)
                        }))
                    };
                }
            });
        });

        return JSON.stringify(data, null, 2);
    }
}

export default InputRegistry;
