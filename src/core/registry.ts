interface InputGenerator {
    category: string;
    subcategory?: string;
    generate: () => any[];
    lazy?: boolean;
}

class InputRegistry {
    private generators = new Map<string, InputGenerator[]>();

    register(generator: InputGenerator): void {
        const category = generator.category;
        if (!this.generators.has(category)) {
            this.generators.set(category, []);
        }
        this.generators.get(category)!.push(generator);
    }

    getByCategory(category: string): any[] {
        // Lazy evaluation - only generate when needed
        return this.generators.get(category)?.flatMap(g => g.generate()) ?? [];
    }
}

export default InputRegistry;
