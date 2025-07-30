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

    private applyFilters(options?: FilterOptions): InputGenerator[] {
        if (!options) {
            return this.getAllGenerators();
        }

        let generators = this.getAllGenerators();

        // Apply include filters
        if (options.include) {
            generators = this.applyIncludeFilters(generators, options.include);
        }

        // Apply exclude filters
        if (options.exclude) {
            generators = this.applyExcludeFilters(generators, options.exclude);
        }

        return generators;
    }

    private applyIncludeFilters(
        generators: InputGenerator[],
        include: NonNullable<FilterOptions['include']>
    ): InputGenerator[] {
        return generators.filter(generator => {
            const categoryMatch = !include.categories || include.categories.includes(generator.category);
            const subcategoryMatch = !include.subcategories || include.subcategories.includes(generator.subcategory);
            const levelMatch = !include.levels || include.levels.includes(generator.level);

            return categoryMatch && subcategoryMatch && levelMatch;
        });
    }

    private applyExcludeFilters(
        generators: InputGenerator[],
        exclude: NonNullable<FilterOptions['exclude']>
    ): InputGenerator[] {
        return generators.filter(generator => {
            const categoryExcluded = exclude.categories?.includes(generator.category) ?? false;
            const subcategoryExcluded = exclude.subcategories?.includes(generator.subcategory) ?? false;
            const levelExcluded = exclude.levels?.includes(generator.level) ?? false;

            return !categoryExcluded && !subcategoryExcluded && !levelExcluded;
        });
    }

    private getAllGenerators(): InputGenerator[] {
        const allGenerators: InputGenerator[] = [];
        this.generators.forEach(generators => {
            allGenerators.push(...generators);
        });
        return allGenerators;
    }

    private generateDescription(value: any): string {
        if (value === null) return 'null';
        if (value === undefined) return 'undefined';
        if (value === '') return 'empty string';
        if (typeof value === 'string') {
            if (value.length === 1) return `single character: '${value}'`;
            if (value.length > 50) return `large string (${value.length} chars)`;
            return `string: '${value}'`;
        }
        if (typeof value === 'number') {
            if (value === Infinity) return 'Infinity';
            if (value === -Infinity) return '-Infinity';
            if (Number.isNaN(value)) return 'NaN';
            if (value === Number.MAX_SAFE_INTEGER) return 'Number.MAX_SAFE_INTEGER';
            if (value === Number.MIN_SAFE_INTEGER) return 'Number.MIN_SAFE_INTEGER';
            if (value === Number.MAX_VALUE) return 'Number.MAX_VALUE';
            if (value === Number.MIN_VALUE) return 'Number.MIN_VALUE';
            if (value === Number.EPSILON) return 'Number.EPSILON';
            return `number: ${value}`;
        }
        if (typeof value === 'boolean') return `boolean: ${value}`;
        if (Array.isArray(value)) return `array (${value.length} items)`;
        if (typeof value === 'object') return `object: ${Object.keys(value).length} keys`;
        if (typeof value === 'function') return `function: ${value.name || 'anonymous'}`;

        return `${typeof value}: ${String(value)}`;
    }
}

export default InputRegistry;
