import { Categories, InputGenerator } from "./types";
import allGenerators from "../generators/index";

class InputRegistry {

    private readonly generators: Map<string, InputGenerator[]> = new Map<string, InputGenerator[]>();

    public constructor() {
        allGenerators.forEach((generator: InputGenerator[]) => {
            generator.forEach((generator: InputGenerator) => {
                this.register(generator);
            });
        });
    }

    private register(generator: InputGenerator): void {
        const category: Categories = generator.category;
        if (!this.generators.has(category)) {
            this.generators.set(category, []);
        }

        this.generators.get(category)!.push(generator);
    }

    public getByCategory(category: string): any[] {
        // Lazy evaluation - only generate when needed
        return this.generators.get(category)?.flatMap(g => g.generate()) ?? [];
    }
}

export default InputRegistry;
