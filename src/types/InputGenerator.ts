import { Category, Level, NumberSubcategory, StringSubcategory } from "./categories";

type ValueWithDescription = {
    value: any;
    description: string;
};

type InputGenerator = {
    category: Category;
    level: Level;
    generator: () => ValueWithDescription[]
}

type NumberInputGenerator = InputGenerator & {
    subcategory: NumberSubcategory;
}

type StringInputGenerator = InputGenerator & {
    subcategory: StringSubcategory;
}

export type { InputGenerator, ValueWithDescription };
export type { NumberInputGenerator, StringInputGenerator };
