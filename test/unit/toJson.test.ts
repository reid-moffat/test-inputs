import TestInputs from "test-inputs";
import { InputItem } from "../../src";

suite("Inputs to JSON", function() {

    test("Simple call", function() {
        const result: InputItem[] = TestInputs.getInputs();
        console.log(result);
    });
});
