import TestInputs, { InputItem } from "test-inputs";
import { validateEqualMetadata, validateInputItems } from "../validators.ts";

suite("Inputs with metadata", function() {

    test("Default call", function() {
        const result: InputItem[] = TestInputs.getInputs();

        validateInputItems(result);
    });

    test("Simple === default", function () {
        const defaultResult: InputItem[] = TestInputs.getInputs();
        const simpleResult: InputItem[] = TestInputs.getInputs({ include: { levels: 'simple' } });

        validateEqualMetadata(defaultResult, simpleResult);
    });
});
