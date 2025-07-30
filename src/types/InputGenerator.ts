import { Category, Level, NumberSubcategory, StringSubcategory } from "./categories";

type InputGenerator = {
    category: Category;
    level: Level;
    values: () => any[]
}

type NumberInputGenerator = InputGenerator & {
    subcategory: NumberSubcategory;
}

type StringInputGenerator = InputGenerator & {
    subcategory: StringSubcategory;
}

export type { InputGenerator, NumberInputGenerator, StringInputGenerator };
