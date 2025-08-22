import TestInputs, { CategoryValues } from "test-inputs";
import { assert } from "chai";

suite("Inputs to JSON", function() {

    /**
     * Validates a result has the correct structure
     */
    function validateStructure(record: any) {
        assert.isObject(record);

        const categories: string[] = Object.keys(record);
        assert.includeMembers([...CategoryValues], categories, `Some object category key(s) are invalid. `
            + `Expected ${JSON.stringify([...CategoryValues])}, got ${JSON.stringify(categories)}`);

        for (const category of categories) {

        }
    }

    test("All JSON printed", function() {
        const record: Record<string, any> = TestInputs.toJSON({});
        validateStructure(record);

        for (const category of Object.keys(record)) {
            console.log(`===Category: ${category}===`);

            for (const subcategory of Object.keys(record[category])) {
                console.log(`Subcategory: ${subcategory}`);
                console.log(`Level: ${record[category][subcategory].level}`);
                console.log(`Values: ${record[category][subcategory].values.length}`);

                console.log();
            }

            console.log();
        }
    });

    test("Default call", function () {
        const record: Record<string, any> = TestInputs.toJSON();
        validateStructure(record);

        for (const category of Object.keys(record)) {
            for (const subcategory of Object.keys(record[category])) {
                const val = record[category][subcategory];

                assert.include(["simple", "detailed"], val.level);
            }
        }
    });


    test("", function () {
        const record: Record<string, any> = TestInputs.toJSON();
        assert.isObject(record);

        for (const category of Object.keys(record)) {
            for (const subcategory of Object.keys(record[category])) {
                ;
            }
        }
    });
});
