import InputRegistry from "./registry";
import { FilterOptions, InputItem } from "../types/io";

class TestInputs {

    private static readonly generators: InputRegistry = new InputRegistry();

    // Static only methods, disable instance creation
    private constructor() {}

    /**
     * Gets inputs with their metadata
     *
     * All simple inputs are returned by default; set the options parameter to filter these
     *
     * @example
     * // Get all simple inputs
     * getInputs();
     *
     * // Get all inputs (note: large inputs take a while)
     * getInputs({});
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
     * @throws Error If both 'exclude' and 'include' are provided for a given filter
     */
    public static getInputs(options: FilterOptions = { include: { levels: 'simple' } }): InputItem[] {
        return TestInputs.generators.getInputs(options);
    }

    /**
     * Gets inputs as-si without any metadata
     *
     * All simple inputs are returned by default; set the options parameter to filter these
     *
     * @example
     * // Get all simple inputs
     * getInputs();
     *
     * // Get all inputs (note: large inputs take a while)
     * getInputs({});
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
     * @throws Error If both 'exclude' and 'include' are provided for a given filter
     */
    public static getRawInputs(options: FilterOptions = { include: { levels: 'simple' } }): any[] {
        return TestInputs.generators.getRawInputs(options);
    }

    /**
     * Gets all data in this package as-is, in JSON format
     *
     * @returns A JSON string with all categories as objects, including each subcategory and relevant information
     */
    public static toJSON(): string {
        return TestInputs.generators.toJSON(4);
    }
}

export default TestInputs;
