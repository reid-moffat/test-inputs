type Category = "numbers" | "strings";
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
    "";
type ObjectSubcategory =
    "";
type OtherSubcategory =
    "";

type Subcategory = NumberSubcategory | StringSubcategory | ArraySubcategory | ObjectSubcategory | OtherSubcategory;

export type { Category, Level };
export type { Subcategory, NumberSubcategory, StringSubcategory, ArraySubcategory, ObjectSubcategory, OtherSubcategory };
