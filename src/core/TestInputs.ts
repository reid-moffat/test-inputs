import InputRegistry from "./registry";
import { FilterOptions, InputItem } from "../types/io";

class TestInputs {

    private readonly generators: InputRegistry = new InputRegistry();

    /**
     * Gets inputs with their metadata
     *
     * Returns all data of every type by default; set the options parameter to filter these
     *
     * @example
     * // Get all inputs except large ones
     * getInputs({ exclude: { levels: ['large'] } });
     *
     * // Get only string inputs
     * getInputs({ include: { categories: ['strings'] } });
     *
     * // Get simple numbers but exclude basic subcategory
     * getInputs({
     *   include: { categories: ['numbers'], levels: ['simple'] },
     *   exclude: { subcategories: ['basic'] }
     * })
     *
     * @param options Optional filters for the data
     * @param options.include Specify what to include in the results
     * @param options.include.categories Top-level categories to include (e.g., 'strings', 'numbers')
     * @param options.include.subcategories Specific subcategories to include (e.g., 'basic', 'unicode')
     * @param options.include.levels Specificity levels to include ('simple', 'detailed', or 'large')
     * @param options.exclude Specify what to exclude from the results
     * @param options.exclude.categories Top-level categories to exclude
     * @param options.exclude.subcategories Specific subcategories to exclude
     * @param options.exclude.levels Specificity levels to exclude
     *
     * @returns Array of objects, each containing the input value with its corresponding metadata (description,
     *          category, subcategory, level)
     * @throws Error If any options are not valid categories, subcategories, or levels
     * @throws Error If any options are present in both include and exclude
     */
    public getInputs(options?: FilterOptions): InputItem[] {
        return this.generators.getInputs(options);
    }

    /**
     * Gets inputs as-si without any metadata
     *
     * Returns all data of every type by default; set the options parameter to filter these
     *
     * @example
     * // Get all inputs except large ones
     * getInputs({ exclude: { levels: ['large'] } });
     *
     * // Get only string inputs
     * getInputs({ include: { categories: ['strings'] } });
     *
     * // Get simple numbers but exclude basic subcategory
     * getInputs({
     *   include: { categories: ['numbers'], levels: ['simple'] },
     *   exclude: { subcategories: ['basic'] }
     * })
     *
     * @param options Optional filters for the data
     * @param options.include Specify what to include in the results
     * @param options.include.categories Top-level categories to include (e.g., 'strings', 'numbers')
     * @param options.include.subcategories Specific subcategories to include (e.g., 'basic', 'unicode')
     * @param options.include.levels Specificity levels to include ('simple', 'detailed', or 'large')
     * @param options.exclude Specify what to exclude from the results
     * @param options.exclude.categories Top-level categories to exclude
     * @param options.exclude.subcategories Specific subcategories to exclude
     * @param options.exclude.levels Specificity levels to exclude
     *
     * @returns Array of raw input values (any type), without any corresponding metadata
     * @throws Error If any options are not valid categories, subcategories, or levels
     * @throws Error If any options are present in both include and exclude
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
