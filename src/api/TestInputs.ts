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
    public getSimpleInput() {
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
    public getDetailedInputs() {
        return this.generators.getDetailedInputs();
    }

    /**
     * Gets large inputs to test limits
     *
     * This includes:
     * -
     *
     * @returns An array of various simple values
     */
    public getLargeInputs() {
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
    public getAllInputs() {
        return this.generators.getAllInputs();
    }
}

export default TestInputs;
