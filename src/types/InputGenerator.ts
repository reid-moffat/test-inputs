import { Category, Level, NumberSubcategory, StringSubcategory, Subcategory } from "./categories";

type ValueWithDescription = {
    value: any;
    description: string;
};

type InputGenerator = {
    category: Category;
    subcategory: Subcategory;
    level: Level;
    generate: () => ValueWithDescription[]
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
    subcategory: StringSubcategory;
}

type ObjectInputGenerator = InputGenerator & {
    category: "objects";
    subcategory: StringSubcategory;
}

type OtherInputGenerator = InputGenerator & {
    category: "other";
    subcategory: StringSubcategory;
}

export type { InputGenerator, ValueWithDescription };
export type { NumberInputGenerator, StringInputGenerator };
