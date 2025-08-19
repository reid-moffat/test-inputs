import TestInputs, { InputItem } from "test-inputs";
import { invalidOptions } from "../data.ts";
import { assert } from "chai";
import { validateRawInputs } from "../validators.ts";

suite("Raw inputs", function() {

    suite("Invalid cases", function() {

        invalidOptions.map((option) =>
            test(option.name, function () {
                const func: () => InputItem[] = (): InputItem[] => TestInputs.getRawInputs(option.input);
                assert.throws((): InputItem[] => func(), Error, option.message);
            })
        );
    });

    suite("Valid cases", function() {

        suite("By level", function() {

            test("Simple data", function () {
                const result: any[] = TestInputs.getRawInputs({ include: { levels: 'simple' } });

                validateRawInputs(result);
            });

            test("Detailed data", function () {
                const result: any[] = TestInputs.getRawInputs({ include: { levels: 'detailed' } });

                validateRawInputs(result);
            });

            test("Large data", function () {
                const result: any[] = TestInputs.getRawInputs({ include: { levels: 'large' } });

                validateRawInputs(result);
            });
        });
    });
});
