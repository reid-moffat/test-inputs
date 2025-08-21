import { Category, Level, Subcategory } from "./filters.ts";

/**
 * Filters to pass to an input query in order to include or exclude certain types
 *
 * All filters are optional
 */
type FilterOptions = {
    /** Values to explicitly include. If a type (e.g. levels) is defined, any levels not provided will be excluded */
    include?: {
        levels?: Level | Level[];
        categories?: Category | Category[];
        subcategories?: Subcategory | Subcategory[];
    };
    /** Values to explicitly exclude. If a type (e.g. levels) is defined, any levels not provided will be included */
    exclude?: {
        levels?: Level | Level[];
        categories?: Category | Category[];
        subcategories?: Subcategory | Subcategory[];
    };
}

/**
 * A generated input item with its metadata
 */
type InputItem = {
    /** The input value */
    value: any;
    /** The literal code used to create this value */
    description: string;
    /** Complexity level this value belongs to (simple, detailed, large) */
    level: Level;
    /** Category this value belongs to (numbers, arrays, etc) */
    category: Category;
    /** Sub-category of the given category this value belongs to (boundaries, scientific, etc) */
    subcategory: Subcategory;
}

export type { FilterOptions, InputItem };
