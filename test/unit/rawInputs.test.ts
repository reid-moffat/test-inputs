import TestInputs, { InputItem } from "test-inputs";
import { invalidOptions } from "../data.ts";
import { assert } from "chai";

suite("Raw inputs", function() {

    suite("Invalid cases", function() {

        invalidOptions.map((option) =>
            test(option.name, function () {
                const func: () => InputItem[] = (): InputItem[] => TestInputs.getRawInputs(option.input);
                assert.throws((): InputItem[] => func(), Error, option.message);
            })
        );
    });

    test("Test name", function() {
        const result: any[] = TestInputs.getRawInputs();

        console.log(result);
    });
});
