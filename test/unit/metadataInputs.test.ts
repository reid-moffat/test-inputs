import TestInputs, { InputItem } from "test-inputs";
import { validateEqualMetadata, validateInputItems } from "../validators.ts";
import { assert } from "chai";
import { invalidOptions } from "../data.ts";

suite("Inputs with metadata", function() {

    suite("Invalid cases", function() {

        invalidOptions.map((option) =>
            test(option.name, function () {
                const func: () => InputItem[] = (): InputItem[] => TestInputs.getInputs(option.input);
                assert.throws((): InputItem[] => func(), Error, option.message);
            })
        );
    });

    suite("Valid cases", function() {

        suite("By level", function() {

            test("Simple data", function () {
                const result: InputItem[] = TestInputs.getInputs({ include: { levels: 'simple' } });

                validateInputItems(result);
            });

            test("Detailed data", function () {
                const result: InputItem[] = TestInputs.getInputs({ include: { levels: 'detailed' } });

                validateInputItems(result);
            });

            test("Large data", function () {
                const result: InputItem[] = TestInputs.getInputs({ include: { levels: 'large' } });

                validateInputItems(result);
            });

            test("Simple + detailed", function () {
                const result: InputItem[] = TestInputs.getInputs({ include: { levels: ['simple', 'detailed'] } });

                validateInputItems(result);
            });

            test("Simple + large", function () {
                const result: InputItem[] = TestInputs.getInputs({ include: { levels: ['simple', 'large'] } });

                validateInputItems(result);
            });

            test("Detailed + large", function () {
                const result: InputItem[] = TestInputs.getInputs({ include: { levels: ['detailed', 'large'] } });

                validateInputItems(result);
            });

            test("All levels", function () {
                const result: InputItem[] = TestInputs.getInputs({ include: { levels: ['simple', 'detailed', 'large'] } });

                validateInputItems(result);
            });
        });

        suite("Specific checks", function() {

            test("Default call", function() {
                const result: InputItem[] = TestInputs.getInputs();

                validateInputItems(result);
            });

            test("Simple === default", function () {
                const defaultResult: InputItem[] = TestInputs.getInputs();
                const simpleResult: InputItem[] = TestInputs.getInputs({ include: { levels: 'simple' } });

                validateEqualMetadata(defaultResult, simpleResult);
            });

            test("All === empty filter", function () {
                const allResult: InputItem[] = TestInputs.getInputs({ include: { levels: ['simple', 'detailed', 'large'] } });
                const emptyObjectResult: InputItem[] = TestInputs.getInputs({});

                validateEqualMetadata(allResult, emptyObjectResult);
            });
        });
    });
});
