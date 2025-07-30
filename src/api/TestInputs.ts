import InputRegistry from "../core/registry";

class TestInputs {

    private readonly generators = new InputRegistry();

    public getSimpleInputs = () => {
        return this.generators.getSimpleInputs();
    }

    public getDetailedInputs = () => {
        return this.generators.getDetailedInputs();
    }

    public getLargeInputs = () => {
        return this.generators.getLargeInputs();
    }

    public getAllInputs = () => {
        return this.generators.getAllInputs();
    }
}

export default TestInputs;
