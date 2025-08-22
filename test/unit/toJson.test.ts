import TestInputs, {
    CategoryValues,
    Category,
    SubcategoryValues,
    NumberSubcategoryValues,
    StringSubcategoryValues,
    ArraySubcategoryValues,
    ObjectSubcategoryValues,
    OtherSubcategoryValues,
    LevelValues
} from "test-inputs";
import { assert } from "chai";

suite("Inputs to JSON", function() {

    /**
     * Validates a result has the correct structure
     */
    function validateStructure(record: any) {
        assert.isObject(record);

        const categories: Category[] = Object.keys(record) as Category[];
        assert.includeMembers([...CategoryValues], categories, `Some object category key(s) are invalid. `
            + `Expected ${JSON.stringify(CategoryValues)}, got ${JSON.stringify(categories)}`);

        for (const category of categories) {
            const subcategories: string[] = Object.keys(record[category]);

            switch (category) {
                case "numbers":
                    assert.includeMembers([...NumberSubcategoryValues], subcategories, `Some number subcategory `
                        + `key(s) are invalid. Expected ${JSON.stringify(NumberSubcategoryValues)}, `
                        + `got ${JSON.stringify(subcategories)}`);
                    break;
                case "strings":
                    assert.includeMembers([...StringSubcategoryValues], subcategories, `Some string subcategory `
                        + `key(s) are invalid. Expected ${JSON.stringify(StringSubcategoryValues)}, `
                        + `got ${JSON.stringify(subcategories)}`);
                    break;
                case "arrays":
                    assert.includeMembers([...ArraySubcategoryValues], subcategories, `Some array subcategory `
                        + `key(s) are invalid. Expected ${JSON.stringify(ArraySubcategoryValues)}, `
                        + `got ${JSON.stringify(subcategories)}`);
                    break;
                case "objects":
                    assert.includeMembers([...ObjectSubcategoryValues], subcategories, `Some object subcategory `
                        + `key(s) are invalid. Expected ${JSON.stringify(ObjectSubcategoryValues)}, `
                        + `got ${JSON.stringify(subcategories)}`);
                    break;
                case "other":
                    assert.includeMembers([...OtherSubcategoryValues], subcategories, `Some other subcategory `
                        + `key(s) are invalid. Expected ${JSON.stringify(OtherSubcategoryValues)}, `
                        + `got ${JSON.stringify(subcategories)}`);
                    break;
                default:
                    throw new Error(`Unknown category type: ${category}`);
            }

            const expectedKeys: string[] = ["category", "subcategory", "level", "values"];
            for (const subcategory of subcategories) {
                const subcategoryObject = record[category][subcategory];
                assert.hasAllKeys(subcategoryObject, expectedKeys, `Expected subcategory object keys ${JSON.stringify(Object.keys(subcategoryObject))} to be ${JSON.stringify(expectedKeys)}`);

                const level: string = subcategoryObject.level;
                assert.include([...LevelValues], level, `Expected level ${level} to be part of ${JSON.stringify(LevelValues)}`);

                const categoryField: string = subcategoryObject.category;
                assert.include([...CategoryValues], categoryField, `Expected category field ${categoryField} to be part of ${JSON.stringify(CategoryValues)}`);

                const subcategoryField: string = subcategoryObject.subcategory;
                assert.include([...SubcategoryValues], subcategoryField, `Expected category field ${subcategoryField} to be part of ${JSON.stringify(SubcategoryValues)}`);
            }
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
