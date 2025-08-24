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

        suite("Size parameter", function() {

            test("Large inputs with default size", function() {
                const result: any[] = TestInputs.getRawInputs({ include: { levels: 'large' } });

                validateRawInputs(result);
                assert.isAbove(result.length, 0);
            });

            test("Large inputs with custom size", function() {
                const result: any[] = TestInputs.getRawInputs({ include: { levels: 'large' } }, 100);

                validateRawInputs(result);
                assert.isAbove(result.length, 0);
            });

            test("Large arrays respond to size parameter", function() {
                const smallResult: any[] = TestInputs.getRawInputs({ 
                    include: { levels: 'large', categories: 'arrays', subcategories: 'large-simple' }
                }, 10);
                const largeResult: any[] = TestInputs.getRawInputs({ 
                    include: { levels: 'large', categories: 'arrays', subcategories: 'large-simple' }
                }, 20000);

                validateRawInputs(smallResult);
                validateRawInputs(largeResult);

                assert.lengthOf(smallResult, 7);
                smallResult.forEach((smallItem) => {
                    assert.lengthOf(smallItem, 10);
                });

                assert.lengthOf(largeResult, 7);
                largeResult.forEach((largeItem) => {
                    assert.lengthOf(largeItem, 20000);
                });
            });

            test("Large strings respond to size parameter", function() {
                const smallResult: any[] = TestInputs.getRawInputs({ 
                    include: { levels: 'large', categories: 'strings', subcategories: 'repeated' } 
                }, 10);
                const largeResult: any[] = TestInputs.getRawInputs({ 
                    include: { levels: 'large', categories: 'strings', subcategories: 'repeated' } 
                }, 100);

                validateRawInputs(smallResult);
                validateRawInputs(largeResult);

                // Compare string lengths - large size should produce longer strings
                for (let i = 0; i < Math.min(smallResult.length, largeResult.length); i++) {
                    if (typeof smallResult[i] === 'string' && typeof largeResult[i] === 'string') {
                        assert.isAbove(largeResult[i].length, smallResult[i].length);
                    }
                }
            });

            test("Large objects respond to size parameter", function() {
                const smallResult: any[] = TestInputs.getRawInputs({ 
                    include: { levels: 'large', categories: 'objects', subcategories: 'large-flat' } 
                }, 10);
                const largeResult: any[] = TestInputs.getRawInputs({ 
                    include: { levels: 'large', categories: 'objects', subcategories: 'large-flat' } 
                }, 100);

                validateRawInputs(smallResult);
                validateRawInputs(largeResult);

                // Compare object property counts - large size should produce more properties
                for (let i = 0; i < Math.min(smallResult.length, largeResult.length); i++) {
                    if (typeof smallResult[i] === 'object' && typeof largeResult[i] === 'object' && 
                        smallResult[i] !== null && largeResult[i] !== null) {
                        assert.isAbove(Object.keys(largeResult[i]).length, Object.keys(smallResult[i]).length);
                    }
                }
            });

            test("Large arrays respond to size parameter", function() {
                const smallResult: any[] = TestInputs.getRawInputs({ 
                    include: { levels: 'large', categories: 'arrays', subcategories: 'large-simple' }
                }, 10);
                const largeResult: any[] = TestInputs.getRawInputs({ 
                    include: { levels: 'large', categories: 'arrays', subcategories: 'large-simple' }
                }, 20_000);

                validateRawInputs(smallResult);
                validateRawInputs(largeResult);

                assert.lengthOf(smallResult, 7);
                smallResult.forEach((smallItem) => {
                    assert.lengthOf(smallItem, 10);
                });

                assert.lengthOf(largeResult, 7);
                largeResult.forEach((largeItem) => {
                    assert.lengthOf(largeItem, 20_000);
                });
            });

            test("Size parameter doesn't affect simple/detailed inputs", function() {
                const defaultResult: any[] = TestInputs.getRawInputs({ include: { levels: ['simple', 'detailed'] } });
                const customSizeResult: any[] = TestInputs.getRawInputs({ include: { levels: ['simple', 'detailed'] } }, 100);

                assert.lengthOf(defaultResult, customSizeResult.length);
            });
        });
    });
});
