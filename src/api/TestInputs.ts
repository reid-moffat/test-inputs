import InputRegistry from "../core/registry";

class TestInputs {

    private readonly generators = new InputRegistry();

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
     * @param size Size of inputs: characters in a string, keys in a map, etc (default 10,000)
     * @returns An array of various simple and detailed values
     * @throws Error if size is not a positive integer
     */
    public getLargeInputs(size: number = 10_000): any[] {
        if (!Number.isInteger(size) || size < 1) {
            throw new Error(`Large input size must be a positive integer (>= 1)`);
        }

        return this.generators.getLargeInputs();
    }

    /**
     * Gets all inputs types
     *
     * This includes:
     * -
     *
     * @param size Size of inputs: characters in a string, keys in a map, etc (default 10,000)
     * @returns An array of all values in this package
     * @throws Error if size is not a positive integer
     */
    public getAllInputs(size: number = 10_000): any[] {
        if (!Number.isInteger(size) || size < 1) {
            throw new Error(`Large input size must be a positive integer (>= 1)`);
        }

        return this.generators.getAllInputs();
    }
}

export default TestInputs;
