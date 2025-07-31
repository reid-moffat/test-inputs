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
    "";
type OtherSubcategory =
    "";

type Subcategory = NumberSubcategory | StringSubcategory | ArraySubcategory | ObjectSubcategory | OtherSubcategory;

export type { Category, Level };
export type { Subcategory, NumberSubcategory, StringSubcategory, ArraySubcategory, ObjectSubcategory, OtherSubcategory };
