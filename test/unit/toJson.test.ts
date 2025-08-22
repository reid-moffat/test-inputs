import TestInputs from "test-inputs";

suite("Inputs to JSON", function() {

    test("Print details", function() {
        const result: Record<string, any> = TestInputs.toJSON();

        for (const category of Object.keys(result)) {
            console.log(`===Category: ${category}===`);

            for (const subcategory of Object.keys(result[category])) {
                console.log(`Subcategory: ${subcategory}`);
                console.log(`Level: ${result[category][subcategory].level}`);
                console.log(`Values: ${result[category][subcategory].values.length}`);

                console.log();
            }

            console.log();
        }
    });
});
