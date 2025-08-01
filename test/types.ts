const CategoryValues: string[] = ["numbers", "strings", "arrays", "objects", "other"];

const LevelValues: string[] = ["simple", "detailed", "large"];

const NumberSubcategoryValues: string[] = [
    "integers", "decimals", "boundaries", "max-min", "precision", "scientific",
    "zeros", "mathematical", "edge-operations", "large"
];

const StringSubcategoryValues: string[] = [
    "empty", "basic", "single-chars", "common-words", "unicode", "whitespace",
    "special-chars", "escape-sequences", "json", "html", "paths", "sql",
    "regex", "encoding", "formatting", "numbers-as-strings", "booleans-as-strings",
    "large", "repeated", "memory-intensive"
];

const ArraySubcategoryValues: string[] = [
    "empty", "basic", "single-element", "numbers", "special-values", "nested",
    "objects", "mixed-types", "sparse", "generated", "strings", "edge-cases",
    "large-simple", "large-nested", "large-sparse", "memory-intensive", "deeply-nested"
];

const ObjectSubcategoryValues: string[] = [
    "empty", "basic", "single-property", "numbers", "special-values", "special-keys",
    "nested", "arrays", "functions", "getters-setters", "prototypes", "circular",
    "descriptors", "built-ins", "json-like", "large-flat", "large-nested",
    "large-arrays", "memory-intensive", "recursive-structures"
];

const OtherSubcategoryValues: string[] = [
    "null-undefined", "booleans", "symbols", "bigint", "functions", "bound-functions",
    "built-in-functions", "constructors", "dates", "regex", "errors", "promises",
    "collections", "typed-arrays", "urls", "generators", "proxy", "special-numbers",
    "global-objects", "large-symbols", "large-bigints", "large-functions", "large-collections",
    "large-typed-arrays", "complex-generators"
];

const SubcategoryValues: string[] = [
    ...NumberSubcategoryValues,
    ...StringSubcategoryValues,
    ...ArraySubcategoryValues,
    ...ObjectSubcategoryValues,
    ...OtherSubcategoryValues
];

export type { CategoryValues, LevelValues };
export type { SubcategoryValues, NumberSubcategoryValues, StringSubcategoryValues, ArraySubcategoryValues, ObjectSubcategoryValues, OtherSubcategoryValues };
