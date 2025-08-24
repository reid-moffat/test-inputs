import {
    Category,
    Level,
    Subcategory,
    NumberSubcategory,
    StringSubcategory,
    ArraySubcategory,
    ObjectSubcategory,
    OtherSubcategory
} from "./filters.ts";

type ValueWithDescription = {
    value: any;
    description: string;
};

type InputGenerator = {
    category: Category;
    subcategory: Subcategory;
    level: Level;
    generate: (LargeInputSize: number) => ValueWithDescription[]
}

type NumberInputGenerator = InputGenerator & {
    category: "numbers";
    subcategory: NumberSubcategory;
}

type StringInputGenerator = InputGenerator & {
    category: "strings";
    subcategory: StringSubcategory;
}

type ArrayInputGenerator = InputGenerator & {
    category: "arrays";
    subcategory: ArraySubcategory;
}

type ObjectInputGenerator = InputGenerator & {
    category: "objects";
    subcategory: ObjectSubcategory;
}

type OtherInputGenerator = InputGenerator & {
    category: "other";
    subcategory: OtherSubcategory;
}

export type { InputGenerator, ValueWithDescription };
export type { NumberInputGenerator, StringInputGenerator, ArrayInputGenerator, ObjectInputGenerator, OtherInputGenerator };
