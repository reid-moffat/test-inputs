import TestInputs, { InputItem } from "test-inputs";
import { validateInputItems } from "../validators.ts";
import { assert } from "chai";

suite("Inputs with metadata", function() {

    test("Default call", function() {
        const result: InputItem[] = TestInputs.getInputs();

        validateInputItems(result);
        assert.equal(result.length, 156);
    });

    test("Simple === default", function () {
        const defaultResult: InputItem[] = TestInputs.getInputs();
        const simpleResult: InputItem[] = TestInputs.getInputs({ include: { levels: 'simple' } });

        assert.equal(defaultResult.length, simpleResult.length);
        assert.deepEqual(simpleResult, defaultResult);
    });
});
