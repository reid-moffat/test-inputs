type Category = "numbers" | "strings" | "arrays" | "objects" | "other";
type Level = "simple" | "detailed" | "large";

type NumberSubcategory =
    "integers" | "decimals" | "boundaries" | "max-min" | "precision" | "scientific" |
    "zeros" | "mathematical" | "edge-operations" | "large";
type StringSubcategory =
    "empty" | "basic" | "single-chars" | "common-words" | "unicode" | "whitespace" |
    "special-chars" | "escape-sequences" | "json" | "html" | "paths" | "sql" |
    "regex" | "encoding" | "formatting" | "numbers-as-strings" | "booleans-as-strings" |
    "large" | "repeated" | "memory-intensive";
type ArraySubcategory =
    "empty" | "basic" | "single-element" | "numbers" | "special-values" | "nested" |
    "objects" | "mixed-types" | "sparse" | "generated" | "strings" | "edge-cases" |
    "large-simple" | "large-nested" | "large-sparse" | "memory-intensive" | "deeply-nested";
type ObjectSubcategory =
    "empty" | "basic" | "single-property" | "numbers" | "special-values" | "special-keys" |
    "nested" | "arrays" | "functions" | "getters-setters" | "prototypes" | "circular" |
    "descriptors" | "built-ins" | "json-like" | "large-flat" | "large-nested" |
    "large-arrays" | "memory-intensive" | "recursive-structures";
type OtherSubcategory =
    "null-undefined" | "booleans" | "symbols" | "bigint" | "functions" | "bound-functions" |
    "built-in-functions" | "constructors" | "dates" | "regex" | "errors" | "promises" |
    "collections" | "typed-arrays" | "urls" | "generators" | "proxy" | "special-numbers" |
    "global-objects" | "large-symbols" | "large-bigints" | "large-functions" | "large-collections" |
    "large-typed-arrays" | "complex-generators";

type Subcategory = NumberSubcategory | StringSubcategory | ArraySubcategory | ObjectSubcategory | OtherSubcategory;

export type { Category, Level };
export type { Subcategory, NumberSubcategory, StringSubcategory, ArraySubcategory, ObjectSubcategory, OtherSubcategory };
