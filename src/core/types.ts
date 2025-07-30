type Category = "numbers" | "strings";
type Level = "simple" | "detailed" | "large";

type InputGenerator = {
    category: Category;
    subcategory: string;
    level: Level;
    generate: () => any[]
}

type ReturnOptions = {
    levels: Level[];
    category: Category[];
}

type InputItem = {
    value: any;
    description: string;
    category: Category;
    subcategory: string;
    level: Level;
}

const LargeSize = 100_000; // Size of large inputs

export type { InputGenerator, ReturnOptions, InputItem, Category, Level };
export { LargeSize };
