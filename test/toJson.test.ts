import TestInputs from "test-inputs";

suite("Inputs to JSON", function() {

    test("Simple call", function() {
        const result = TestInputs.getInputs();
        console.log(result);
    });
});
