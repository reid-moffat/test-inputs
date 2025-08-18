import { assert } from "chai";
import { InputItem } from "test-inputs";
import {
    ArraySubcategoryValues,
    CategoryValues,
    LevelValues,
    NumberSubcategoryValues,
    ObjectSubcategoryValues,
    OtherSubcategoryValues,
    StringSubcategoryValues,
    SubcategoryValues
} from "./types.ts";

/**
 * Validates an array of input items
 *
 * Ensures it has a valid structure with all the given keys with the required data
 */
const validateInputItems = (items: InputItem[]): void => {
    assert.isArray(items);

    for (let i: number = 0; i < items.length; ++i) {
        const item: InputItem = items[i];

        // Validate high-level structure
        assert.isObject(item);
        assert.hasAllKeys(item, ["value", "description", "category", "subcategory", "level"]);

        // Validate metadata types
        assert.isString(item.description);
        assert.isString(item.category);
        assert.isString(item.subcategory);
        assert.isString(item.level);

        // Ensure metadata values are valid
        assert.include(CategoryValues, item.category);
        assert.include(SubcategoryValues, item.subcategory);
        assert.include(LevelValues, item.level);

        // Stricter subcategory checks
        switch (item.category) {
            case "numbers":
                assert.include(NumberSubcategoryValues, item.subcategory);
                break;
            case "strings":
                assert.include(StringSubcategoryValues, item.subcategory);
                break;
            case "arrays":
                assert.include(ArraySubcategoryValues, item.subcategory);
                break;
            case "objects":
                assert.include(ObjectSubcategoryValues, item.subcategory);
                break;
            case "other":
                assert.include(OtherSubcategoryValues, item.subcategory);
                break;
            default:
                throw new Error(`Unknown category type: ${item.category}`);
        }
    }
}

/**
 * Validates an array of values with their metadata are equal
 *
 * Note: Symbols are unique, even with the same description. Functions are also problematic, so both are not checked
 */
const validateEqualMetadata = (result1: InputItem[], result2: InputItem[]): void => {
    assert.isArray(result1);
    assert.isArray(result2);

    validateInputItems(result1);
    validateInputItems(result2);

    assert.equal(result1.length, result2.length);
    for (let i: number = 0; i < result1.length; ++i) {
        const val1: InputItem = result1[i];
        const val2: InputItem = result2[i];

        const ignoreValue = (value: any) => {
            const ignoreTypes: string[] = ["symbol", "function"];

            for (let type of ignoreTypes) {
                if (typeof value === type) return true;
                if (Array.isArray(value)) {
                    return value.some(item => typeof item === type);
                }
            }

            return false;
        }

        if (ignoreValue(val1.value)) {
            // Symbols and functions are always unique, check the rest of the metadata
            const { value: _1, ...withoutValue1 } = val1;
            const { value: _2, ...withoutValue2 } = val2;

            try {
                assert.deepEqual(withoutValue1, withoutValue2);
            } catch (err: any) {
                const valueType = typeof val1.value;
                console.error(`Error asserting deep equal of ${valueType} metadata.\nValue 1: ${JSON.stringify(val1)}\nValue 2: ${JSON.stringify(val2)}`);
                throw err;
            }
        } else {
            try {
                assert.deepEqual(val1, val2);
            } catch (err: any) {
                console.error(`Error asserting deep equal of value & metadata.\nValue 1: ${JSON.stringify(val1)}\nValue 2: ${JSON.stringify(val2)}`);
                throw err;
            }
        }
    }
}

export { validateInputItems, validateEqualMetadata };
