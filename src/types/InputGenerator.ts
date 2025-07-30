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

export type { InputGenerator, ValueWithDescription };
export type { NumberInputGenerator, StringInputGenerator };
