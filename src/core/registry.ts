import { InputGenerator } from "./types";
import allGenerators from "../generators/index";

class InputRegistry {

    private readonly generators: Map<string, InputGenerator[]> = new Map<string, InputGenerator[]>();

    // Caches for helper functions
    private readonly simpleInputs: any[] = [];
    private readonly detailedInputs: any[] = [];
    private readonly simpleAndDetailedInputs: any[] = [];
    private readonly allInputs: any[] = [];

    // Generators for large inputs (require a size parameter to generate)
    private readonly largeGenerators: ((size?: number) => any[])[] = [];

    public constructor() {
        // Load all generator data
        allGenerators.forEach((generator: InputGenerator[]) => {
            generator.forEach((generator: InputGenerator) => {
                // Add generators to map
                if (!this.generators.has(generator.category)) {
                    this.generators.set(generator.category, []);
                }
                this.generators.get(generator.category)!.push(generator);

                // Add values to the specified levels cache
                switch (generator.level) {
                    case 'simple':
                        this.simpleInputs.push(...generator.generate());
                        this.simpleAndDetailedInputs.push(...generator.generate());
                        break;
                    case 'detailed':
                        this.detailedInputs.push(...generator.generate());
                        this.simpleAndDetailedInputs.push(...generator.generate());
                        break;
                    case 'large':
                        this.largeGenerators.push(generator.generate);
                        break; // Generated each call due to variable size
                    default:
                        throw new Error(`Unknown generator level ${generator.level}`);
                }
                this.allInputs.push(...generator.generate());
            });
        });
    }

    public getSimpleInputs(): any[] {
        return structuredClone(this.simpleInputs);
    }

    public getDetailedInputs(): any[] {
        return structuredClone(this.detailedInputs);
    }

    public getSimpleAndDetailedInputs(): any[] {
        return structuredClone(this.simpleAndDetailedInputs);
    }

    public getLargeInputs(size: number): any[] {
        const results: any[] = [];
        this.largeGenerators.forEach((generator) => {
            results.push(...generator(size));
        });
        return results;
    }

    public getAllInputs(size: number): any[] {
        const nonLargeInputs: any[] = structuredClone(this.allInputs);
        const largeInputs: any[] = this.getLargeInputs(size);

        return [...nonLargeInputs, ...largeInputs];
    }
}

export default InputRegistry;
