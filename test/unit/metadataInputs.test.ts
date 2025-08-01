import TestInputs, { InputItem } from "test-inputs";
import { assert } from "chai";

suite("Inputs with metadata", function() {

    const validateInputItems = (items: InputItem[]) => {
        for (let i: number = 0; i < items.length; ++i) {
            const item: InputItem = items[i];

            assert.isObject(item);
            assert.hasAllKeys(item, ["value", "description", "category", "subcategory", "level"]);

            assert.isString(item.description);
            assert.isString(item.category);
            assert.isString(item.subcategory);
            assert.isString(item.level);
        }
    }

    test("Default call", function() {
        const result: InputItem[] = TestInputs.getInputs();

        validateInputItems(result);
        console.log(result);
    });
});
