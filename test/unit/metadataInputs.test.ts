import TestInputs, { InputItem } from "test-inputs";
import { validateInputItems } from "../validators.ts";
import { assert } from "chai";

suite("Inputs with metadata", function() {

    test("Default call", function() {
        const result: InputItem[] = TestInputs.getInputs();

        validateInputItems(result);
        assert.equal(result.length, 156);
    });
});
