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

const validateInputItems = (items: InputItem[]) => {
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

export { validateInputItems };
