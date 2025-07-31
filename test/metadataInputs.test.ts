import TestInputs, { InputItem } from "test-inputs";

suite("Inputs with metadata", function() {

    test("Test name", function() {
        const result: InputItem[] = TestInputs.getInputs();

        console.log(result);
    });
});
