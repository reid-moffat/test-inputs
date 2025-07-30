import allGenerators from "../generators/index";
import { InputGenerator } from "../types/InputGenerator";
import { FilterOptions, InputItem } from "../types/io";

class InputRegistry {

    private readonly generators: Map<string, InputGenerator[]> = new Map<string, InputGenerator[]>();

    public constructor() {
        // Load all generator data
        allGenerators.forEach((generator: InputGenerator[]) => {
            generator.forEach((generator: InputGenerator) => {
                // Add generators to map
                if (!this.generators.has(generator.category)) {
                    this.generators.set(generator.category, []);
                }
                this.generators.get(generator.category)!.push(generator);
            });
        });
    }

    // Gets inputs with metadata
    public getInputs(options?: FilterOptions): InputItem[] {
        return [];
    }

    // Gets inputs without any metadata
    public getRawInputs(options?: FilterOptions): any[] {
        return [];
    }

    // Turns all data into JSON
    public toJSON(): string {
        return "";
    }
}

export default InputRegistry;
