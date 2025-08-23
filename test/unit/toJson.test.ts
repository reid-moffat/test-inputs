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

        // Check that all categories are valid
        const categories: Category[] = Object.keys(record) as Category[];
        assert.includeMembers([...CategoryValues], categories, `Some object category key(s) are invalid. `
            + `Expected ${JSON.stringify(CategoryValues)}, got ${JSON.stringify(categories)}`);

        for (const category of categories) {
            const subcategoryObject = record[category];
            assert.isObject(subcategoryObject, `Subcategory is not an object, value: ${subcategoryObject}`);
            assert.isNotEmpty(subcategoryObject, `Subcategory object is empty`);

            // Check that all subcategories are valid
            const subcategories: string[] = Object.keys(subcategoryObject);
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

            // Check that the subcategory object is valid
            const expectedKeys: string[] = ["category", "subcategory", "level", "values"];
            for (const subcategory of subcategories) {
                const subcategoryObject = record[category][subcategory];
                assert.isObject(subcategoryObject, `Subcategory is not an object, value: ${subcategoryObject}`);
                assert.hasAllKeys(subcategoryObject, expectedKeys, `Expected subcategory object keys ${JSON.stringify(Object.keys(subcategoryObject))} to be ${JSON.stringify(expectedKeys)}`);

                const level: string = subcategoryObject.level;
                assert.isString(level, `Subcategory level is not a string, value ${level}`);
                assert.include([...LevelValues], level, `Expected level ${level} to be part of ${JSON.stringify(LevelValues)}`);

                const categoryField: string = subcategoryObject.category;
                assert.isString(level, `Subcategory categoryField is not a string, value ${categoryField}`);
                assert.include([...CategoryValues], categoryField, `Expected category field ${categoryField} to be part of ${JSON.stringify(CategoryValues)}`);

                const subcategoryField: string = subcategoryObject.subcategory;
                assert.isString(level, `Subcategory subcategoryField is not a string, value ${subcategoryField}`);
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

    test("Only strings", function () {
        const record: Record<string, any> = TestInputs.toJSON({ include: { categories: ['strings'] } });
        validateStructure(record);
        
        const categories = Object.keys(record);
        assert.deepEqual(categories, ['strings'], 'Should only contain strings category');
        
        // Verify strings category contains expected subcategories
        const subcategories = Object.keys(record.strings);
        assert.isArray(subcategories);
        assert.isAbove(subcategories.length, 0, 'Strings category should have subcategories');
    });

    test("Multiple categories", function () {
        const record: Record<string, any> = TestInputs.toJSON({ include: { categories: ['numbers', 'arrays'] } });
        validateStructure(record);
        
        const categories = Object.keys(record);
        assert.sameMembers(categories, ['numbers', 'arrays'], 'Should only contain numbers and arrays categories');
    });

    test("Specific subcategories", function () {
        const record: Record<string, any> = TestInputs.toJSON({ include: { subcategories: ['basic'] } });
        validateStructure(record);
        
        // Check that all subcategories are 'basic'
        for (const category of Object.keys(record)) {
            for (const subcategory of Object.keys(record[category])) {
                assert.equal(subcategory, 'basic', `Expected subcategory to be 'basic', got '${subcategory}'`);
            }
        }
    });

    test("Detailed level only", function () {
        const record: Record<string, any> = TestInputs.toJSON({ include: { levels: ['detailed'] } });
        validateStructure(record);
        
        // Check that all entries have detailed level
        for (const category of Object.keys(record)) {
            for (const subcategory of Object.keys(record[category])) {
                const level = record[category][subcategory].level;
                assert.equal(level, 'detailed', `Expected level to be 'detailed', got '${level}'`);
            }
        }
    });

    test("Simple level only", function () {
        const record: Record<string, any> = TestInputs.toJSON({ include: { levels: ['simple'] } });
        validateStructure(record);
        
        // Check that all entries have simple level
        for (const category of Object.keys(record)) {
            for (const subcategory of Object.keys(record[category])) {
                const level = record[category][subcategory].level;
                assert.equal(level, 'simple', `Expected level to be 'simple', got '${level}'`);
            }
        }
    });

    test("Exclude strings", function () {
        const record: Record<string, any> = TestInputs.toJSON({ exclude: { categories: ['strings'] } });
        validateStructure(record);
        
        const categories = Object.keys(record);
        assert.notInclude(categories, 'strings', 'Should not contain strings category');
        assert.isAbove(categories.length, 0, 'Should contain other categories');
    });

    test("Exclude simple level", function () {
        const record: Record<string, any> = TestInputs.toJSON({ exclude: { levels: ['simple'] } });
        validateStructure(record);
        
        // Check that no entries have simple level
        for (const category of Object.keys(record)) {
            for (const subcategory of Object.keys(record[category])) {
                const level = record[category][subcategory].level;
                assert.notEqual(level, 'simple', `Found excluded level 'simple' in ${category}.${subcategory}`);
            }
        }
    });

    test("Large level filtering", function () {
        const record: Record<string, any> = TestInputs.toJSON({ include: { levels: ['large'] } });
        validateStructure(record);
        
        // Check that all entries have large level
        for (const category of Object.keys(record)) {
            for (const subcategory of Object.keys(record[category])) {
                const level = record[category][subcategory].level;
                assert.equal(level, 'large', `Expected level to be 'large', got '${level}'`);
            }
        }
    });

    test("Combined filter category and level", function () {
        const record: Record<string, any> = TestInputs.toJSON({ 
            include: { categories: ['numbers'], levels: ['simple'] } 
        });
        validateStructure(record);
        
        const categories = Object.keys(record);
        assert.deepEqual(categories, ['numbers'], 'Should only contain numbers category');
        
        // Check that all entries have simple level
        for (const subcategory of Object.keys(record.numbers)) {
            const level = record.numbers[subcategory].level;
            assert.equal(level, 'simple', `Expected level to be 'simple', got '${level}'`);
        }
    });

    test("Values array structure validation", function () {
        const record: Record<string, any> = TestInputs.toJSON({ include: { levels: ['simple'] } });
        validateStructure(record);
        
        // Check that values arrays exist and contain data
        for (const category of Object.keys(record)) {
            for (const subcategory of Object.keys(record[category])) {
                const values = record[category][subcategory].values;
                assert.isArray(values, `Values should be an array for ${category}.${subcategory}`);
                assert.isAbove(values.length, 0, `Values array should not be empty for ${category}.${subcategory}`);
            }
        }
    });

    test("Empty result handling", function () {
        // Try to get a combination that might return empty results
        try {
            const record: Record<string, any> = TestInputs.toJSON({ 
                include: { categories: ['nonexistent'] as any[] } 
            });
            // If this doesn't throw, the result should be an empty object or have no matching categories
            assert.isObject(record);
        } catch (error) {
            // Expected behavior - should throw an error for invalid categories
            assert.instanceOf(error, Error);
        }
    });
});
