import InputRegistry from "../core/registry";
import { ReturnOptions } from "../core/types";

class TestInputs {

    private readonly generators = new InputRegistry();

    /**
     * Gets inputs with their metadata
     *
     * @param options Options to filter the
     * @returns Array of objects, each with the
     */
    public getInputs(options?: ReturnOptions) {
        ;
    }

    /**
     * Gets all inputs without any metadata
     *
     * @returns An array of input values
     */
    public getRawInputs(options?: ReturnOptions) {
        ;
    }

    /**
     * Gets all data in this package as-is, in JSON format
     *
     * No
     *
     * @returns A JSON string
     */
    public toJSON() {
        ;
    }

    /**
     * Gets all simple inputs
     *
     * This includes:
     * -null & undefined
     * -boolean
     * -numbers (simple, like -1 and 1)
     * -
     *
     * @returns An array of various simple values
     */
    public getSimpleInput(): any[] {
        return this.generators.getSimpleInputs();
    }

    /**
     * Gets all detailed inputs
     *
     * This includes:
     * -
     *
     * @returns An array of various detailed values
     */
    public getDetailedInputs(): any[] {
        return this.generators.getDetailedInputs();
    }

    /**
     * Gets all simple and detailed inputs (result of getSimpleInputs() + getDetailedInputs())
     *
     * This includes all inputs, excluding those made for there large size (e.g. 10k character strings)
     *
     * @returns An array of simple and detailed input values
     */
    public getSimpleAndDetailedInputs(): any[] {
        return this.generators.getSimpleAndDetailedInputs();
    }

    /**
     * Gets large inputs to test limits
     *
     * This includes:
     * -
     *
     * @returns An array of various simple and detailed values
     */
    public getLargeInputs(): any[] {
        return this.generators.getLargeInputs();
    }

    /**
     * Gets all inputs types
     *
     * This includes:
     * -
     *
     * @returns An array of all values in this package
     */
    public getAllInputs(): any[] {
        return this.generators.getAllInputs();
    }
}

export default TestInputs;
