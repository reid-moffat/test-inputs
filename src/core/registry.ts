import { Categories, InputGenerator, Level } from "./types";
import allGenerators from "../generators/index";

class InputRegistry {

    private readonly generators: Map<string, InputGenerator[]> = new Map<string, InputGenerator[]>();

    private readonly simpleInputs: any[] = [];
    private readonly detailedInputs: any[] = [];
    private readonly largeInputs: any[] = [];
    private readonly allInputs: any[] = [];

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
                        break;
                    case 'detailed':
                        this.detailedInputs.push(...generator.generate());
                        break;
                    case 'large':
                        this.largeInputs.push(...generator.generate());
                        break;
                    default:
                        throw new Error(`Unknown generator level ${generator.level}`);
                }
                this.allInputs.push(...generator.generate());
            });
        });
    }

    public getSimpleInputs = () => {
        return this.simpleInputs;
    }

    public getDetailedInputs = () => {
        return this.detailedInputs
    }

    public getLargeInputs = () => {
        return this.largeInputs;
    }

    public getAllInputs = () => {
        return this.allInputs;
    }

    public getByCategory(category: Categories): any[] {
        return this.generators.get(category)?.flatMap(g => g.generate()) ?? [];
    }
}

export default InputRegistry;
