/**
 * Values and type for level and category filters
 */

/** All possible complexity levels, as a readonly array */
const LevelValues = ["simple", "detailed", "large"] as const;
/** All possible complexity levels, as a runtime type */
type Level = typeof LevelValues[number];

/** All possible value categories (e.g. string, arrays, etc), as a readonly array */
const CategoryValues = ["numbers", "strings", "arrays", "objects", "other"] as const;
/** All possible value categories (e.g. string, arrays, etc), as a runtime type */
type Category = typeof CategoryValues[number];


/**
 * Values and type for subcategory filters
 */

/** All possible number subcategories, as a readonly array */
const NumberSubcategoryValues = [
    "integers", "decimals", "boundaries", "max-min", "precision", "scientific",
    "zeros", "mathematical", "edge-operations", "large"
] as const;
/** All possible number subcategories, as a runtime type */
type NumberSubcategory = typeof NumberSubcategoryValues[number];

/** All possible string subcategories, as a readonly array */
const StringSubcategoryValues = [
    "empty", "basic", "single-chars", "common-words", "unicode", "whitespace",
    "special-chars", "escape-sequences", "json", "html", "paths", "sql",
    "regex", "encoding", "formatting", "numbers-as-strings", "booleans-as-strings",
    "large", "repeated", "memory-intensive"
] as const;
/** All possible string subcategories, as a runtime type */
type StringSubcategory = typeof StringSubcategoryValues[number];

/** All possible array subcategories, as a readonly array */
const ArraySubcategoryValues = [
    "empty", "basic", "single-element", "numbers", "special-values", "nested",
    "objects", "mixed-types", "sparse", "generated", "strings", "edge-cases",
    "large-simple", "large-nested", "large-sparse", "memory-intensive", "deeply-nested"
] as const;
/** All possible array subcategories, as a runtime type */
type ArraySubcategory = typeof ArraySubcategoryValues[number];

/** All possible object subcategories, as a readonly array */
const ObjectSubcategoryValues = [
    "empty", "basic", "single-property", "numbers", "special-values", "special-keys",
    "nested", "arrays", "functions", "getters-setters", "prototypes", "circular",
    "descriptors", "built-ins", "json-like", "large-flat", "large-nested",
    "large-arrays", "memory-intensive", "recursive-structures"
] as const;
/** All possible object subcategories, as a runtime type */
type ObjectSubcategory = typeof ObjectSubcategoryValues[number];

/** All possible other value subcategories, as a readonly array */
const OtherSubcategoryValues = [
    "null-undefined", "booleans", "symbols", "bigint", "functions", "bound-functions",
    "built-in-functions", "constructors", "dates", "regex", "errors", "promises",
    "collections", "typed-arrays", "urls", "generators", "proxy", "special-numbers",
    "global-objects", "large-symbols", "large-bigints", "large-functions", "large-collections",
    "large-typed-arrays", "complex-generators"
] as const;
/** All possible other value subcategories, as a runtime type */
type OtherSubcategory = typeof OtherSubcategoryValues[number];


/**
 * Combine subcategories (both values and types) for an aggregate list (contains duplicates)
 */

/** All subcategories for all categories aggregated into a readonly array (note: contains duplicates as some
 *  categories have the same subcategories) */
const SubcategoryValues = [
    ...NumberSubcategoryValues,
    ...StringSubcategoryValues,
    ...ArraySubcategoryValues,
    ...ObjectSubcategoryValues,
    ...OtherSubcategoryValues
] as const;
/** All subcategories for all categories aggregated into a runtime type (note: contains duplicates as some
 *  categories have the same subcategories) */
type Subcategory = NumberSubcategory | StringSubcategory | ArraySubcategory | ObjectSubcategory | OtherSubcategory;


export { CategoryValues, LevelValues };
export { SubcategoryValues, NumberSubcategoryValues, StringSubcategoryValues, ArraySubcategoryValues, ObjectSubcategoryValues, OtherSubcategoryValues };

export type { Category, Level };
export type { Subcategory, NumberSubcategory, StringSubcategory, ArraySubcategory, ObjectSubcategory, OtherSubcategory };
