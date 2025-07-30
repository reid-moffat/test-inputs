type Categories = "numbers" | "strings";
type Level = "simple" | "detailed" | "large";

type InputGenerator = {
    category: Categories;
    subcategory: string;
    level: Level;
    generate: () => any[]
}

type InputItem = {
    value: any;
    description: string;
    category: Categories;
    subcategory: string;
    level: Level;
}

const LargeSize = 100_000; // Size of large inputs

export type { InputGenerator, InputItem, Categories, Level };
export { LargeSize };
