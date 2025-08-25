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

        suite("Large categories", function() {

            test("Numbers", function () {
                const result: InputItem[] = TestInputs.getInputs({ include: { levels: 'large', categories: 'numbers' } });

                validateInputItems(result);
            });

            test("Strings", function () {
                const result: InputItem[] = TestInputs.getInputs({ include: { levels: 'large', categories: 'strings' } });

                validateInputItems(result);
            });

            test("Arrays", function () {
                const result: InputItem[] = TestInputs.getInputs({ include: { levels: 'large', categories: 'arrays' } });

                validateInputItems(result);
            });

            test("Objects", function () {
                const result: InputItem[] = TestInputs.getInputs({ include: { levels: 'large', categories: 'objects' } });

                validateInputItems(result);
            });

            test("Other", function () {
                const result: InputItem[] = TestInputs.getInputs({ include: { levels: 'large', categories: 'other' } });

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

        suite("Size parameter", function() {

            test("Large inputs with default size", function() {
                const result: InputItem[] = TestInputs.getInputs({ include: { levels: 'large' } });

                validateInputItems(result);
                assert.isAbove(result.length, 0);
            });

            test("Large inputs with custom size", function() {
                const result: InputItem[] = TestInputs.getInputs({ include: { levels: 'large' } }, 100);

                validateInputItems(result);
                assert.isAbove(result.length, 0);
            });

            test("Large strings respond to size parameter", function() {
                const smallResult: InputItem[] = TestInputs.getInputs({ 
                    include: { levels: 'large', categories: 'strings', subcategories: 'repeated' } 
                }, 10);
                const largeResult: InputItem[] = TestInputs.getInputs({ 
                    include: { levels: 'large', categories: 'strings', subcategories: 'repeated' } 
                }, 100);

                validateInputItems(smallResult);
                validateInputItems(largeResult);

                // Find matching inputs by description
                smallResult.forEach(smallItem => {
                    const matchingLargeItem = largeResult.find(largeItem => 
                        largeItem.description === smallItem.description
                    );
                    if (matchingLargeItem && typeof smallItem.value === 'string' && typeof matchingLargeItem.value === 'string') {
                        // Large size should produce longer strings for repeated patterns
                        if (smallItem.description.includes('repeat')) {
                            assert.isAbove(matchingLargeItem.value.length, smallItem.value.length);
                        }
                    }
                });
            });

            test("Large arrays respond to size parameter", function() {
                const smallResult: InputItem[] = TestInputs.getInputs({ 
                    include: { levels: 'large', categories: 'arrays', subcategories: 'large-simple' }
                }, 10);
                const largeResult: InputItem[] = TestInputs.getInputs({ 
                    include: { levels: 'large', categories: 'arrays', subcategories: 'large-simple' }
                }, 20_000);

                validateInputItems(smallResult);
                validateInputItems(largeResult);

                assert.lengthOf(smallResult, 7);
                smallResult.forEach((smallItem) => {
                    assert.lengthOf(smallItem.value, 10);
                });

                assert.lengthOf(largeResult, 7);
                largeResult.forEach((largeItem) => {
                    assert.lengthOf(largeItem.value, 20_000);
                });
            });

            test("Large objects respond to size parameter", function() {
                const smallResult: InputItem[] = TestInputs.getInputs({ 
                    include: { levels: 'large', categories: 'objects', subcategories: 'large-flat' } 
                }, 10);
                const largeResult: InputItem[] = TestInputs.getInputs({ 
                    include: { levels: 'large', categories: 'objects', subcategories: 'large-flat' } 
                }, 100);

                validateInputItems(smallResult);
                validateInputItems(largeResult);

                // Find matching inputs by description
                smallResult.forEach(smallItem => {
                    const matchingLargeItem = largeResult.find(largeItem => 
                        largeItem.description === smallItem.description
                    );
                    if (matchingLargeItem && typeof smallItem.value === 'object' && typeof matchingLargeItem.value === 'object' && 
                        smallItem.value !== null && matchingLargeItem.value !== null) {
                        // Large size should produce objects with more properties
                        if (smallItem.description.includes('LargeInputSize')) {
                            assert.isAbove(Object.keys(matchingLargeItem.value).length, Object.keys(smallItem.value).length);
                        }
                    }
                });
            });

            test("Size parameter doesn't affect simple/detailed inputs", function() {
                const defaultResult: InputItem[] = TestInputs.getInputs({ include: { levels: ['simple', 'detailed'] } });
                const customSizeResult: InputItem[] = TestInputs.getInputs({ include: { levels: ['simple', 'detailed'] } }, 100);

                validateEqualMetadata(defaultResult, customSizeResult);
            });
        });
    });
});
