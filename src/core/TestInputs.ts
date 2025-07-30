import InputRegistry from "./registry";
import { FilterOptions, InputItem } from "../types/io";

class TestInputs {

    private readonly generators: InputRegistry = new InputRegistry();

    /**
     * Gets inputs with their metadata
     *
     * Returns all data of every type by default; set the options parameter to filter these
     *
     * @param options Optional filters for the data
     * @param options.categories Top-level categories to include
     * @param options.subcategories Specific subcategories to include
     * @param options.levels Specificity levels to include
     * @param options.exclude Flips all options above to exclusion
     *
     * @returns Array of objects, each containing the input value with its corresponding metadata (description,
     *          category, subcategory, level)
     * @throws Error If the subcategories provided don't match the categories.
     *               E.g. wanting 'common-words' (string subcategory) with the 'numbers' category
     */
    public getInputs(options?: FilterOptions): InputItem[] {
        return this.generators.getInputs(options);
    }

    /**
     * Gets inputs raw without any metadata
     *
     * Returns all data of every type by default; set the options parameter to filter these
     *
     * @param options Optional filters for the data
     * @param options.categories Top-level categories to include
     * @param options.subcategories Specific subcategories to include
     * @param options.levels Specificity levels to include
     * @param options.exclude Flips all options above to exclusion
     *
     * @returns Array of raw input values (any type), without any corresponding metadata
     * @throws Error If the subcategories provided don't match the categories.
     *               E.g. wanting 'common-words' (string subcategory) with the 'numbers' category
     */
    public getRawInputs(options?: FilterOptions): any[] {
        return this.generators.getRawInputs(options);
    }

    /**
     * Gets all data in this package as-is, in JSON format
     *
     * @returns A JSON string with all categories as objects, including each subcategory and relevant information
     */
    public toJSON(): string {
        return this.generators.toJSON();
    }
}

export default TestInputs;
