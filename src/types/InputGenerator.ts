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
    subcategory: NumberSubcategory;
}

type StringInputGenerator = InputGenerator & {
    subcategory: StringSubcategory;
}

export type { InputGenerator, ValueWithDescription };
export type { NumberInputGenerator, StringInputGenerator };
