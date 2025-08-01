import TestInputs, { InputItem } from "test-inputs";
import { validateInputItems } from "../validators.ts";
import { assert } from "chai";

suite("Inputs with metadata", function() {

    test("Default call", function() {
        const result: InputItem[] = TestInputs.getInputs();

        validateInputItems(result);
    });

    test("Simple === default", function () {
        const defaultResult: InputItem[] = TestInputs.getInputs();
        const simpleResult: InputItem[] = TestInputs.getInputs({ include: { levels: 'simple' } });

        assert.isArray(defaultResult);
        assert.isArray(simpleResult);

        validateInputItems(defaultResult);
        validateInputItems(simpleResult);

        assert.equal(defaultResult.length, simpleResult.length);
        for (let i: number = 0; i < simpleResult.length; ++i) {
            assert.deepEqual(defaultResult[i], simpleResult[i]);
        }
    });
});
