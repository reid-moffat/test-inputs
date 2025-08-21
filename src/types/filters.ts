const LevelValues = ["simple", "detailed", "large"] as const;
type Level = typeof LevelValues[number];

const CategoryValues = ["numbers", "strings", "arrays", "objects", "other"] as const;
type Category = typeof CategoryValues[number];

const NumberSubcategoryValues = [
    "integers", "decimals", "boundaries", "max-min", "precision", "scientific",
    "zeros", "mathematical", "edge-operations", "large"
] as const;
type NumberSubcategory = typeof NumberSubcategoryValues[number];

const StringSubcategoryValues = [
    "empty", "basic", "single-chars", "common-words", "unicode", "whitespace",
    "special-chars", "escape-sequences", "json", "html", "paths", "sql",
    "regex", "encoding", "formatting", "numbers-as-strings", "booleans-as-strings",
    "large", "repeated", "memory-intensive"
] as const;
type StringSubcategory = typeof StringSubcategoryValues[number];

const ArraySubcategoryValues = [
    "empty", "basic", "single-element", "numbers", "special-values", "nested",
    "objects", "mixed-types", "sparse", "generated", "strings", "edge-cases",
    "large-simple", "large-nested", "large-sparse", "memory-intensive", "deeply-nested"
] as const;
type ArraySubcategory = typeof ArraySubcategoryValues[number];

const ObjectSubcategoryValues = [
    "empty", "basic", "single-property", "numbers", "special-values", "special-keys",
    "nested", "arrays", "functions", "getters-setters", "prototypes", "circular",
    "descriptors", "built-ins", "json-like", "large-flat", "large-nested",
    "large-arrays", "memory-intensive", "recursive-structures"
] as const;
type ObjectSubcategory = typeof ObjectSubcategoryValues[number];

const OtherSubcategoryValues = [
    "null-undefined", "booleans", "symbols", "bigint", "functions", "bound-functions",
    "built-in-functions", "constructors", "dates", "regex", "errors", "promises",
    "collections", "typed-arrays", "urls", "generators", "proxy", "special-numbers",
    "global-objects", "large-symbols", "large-bigints", "large-functions", "large-collections",
    "large-typed-arrays", "complex-generators"
] as const;
type OtherSubcategory = typeof OtherSubcategoryValues[number];

const SubcategoryValues = [...NumberSubcategoryValues, ...StringSubcategoryValues, ...ArraySubcategoryValues, ...ObjectSubcategoryValues, ...OtherSubcategoryValues] as const;
type Subcategory = NumberSubcategory | StringSubcategory | ArraySubcategory | ObjectSubcategory | OtherSubcategory;

export { CategoryValues, LevelValues };
export { SubcategoryValues, NumberSubcategoryValues, StringSubcategoryValues, ArraySubcategoryValues, ObjectSubcategoryValues, OtherSubcategoryValues };

export type { Category, Level };
export type { Subcategory, NumberSubcategory, StringSubcategory, ArraySubcategory, ObjectSubcategory, OtherSubcategory };
