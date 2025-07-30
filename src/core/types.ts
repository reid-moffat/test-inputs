type Category = "numbers" | "strings";
type Level = "simple" | "detailed" | "large";

type NumberSubcategories = "";
type StringSubcategories = "";

type AllSubcategories = NumberSubcategories | StringSubcategories;

type InputGenerator = {
    category: Category;
    subcategory: string;
    level: Level;
    values: () => any[]
}

type ReturnOptions = {
    levels?: Level[];
    categories?: Category[];
    subcategories?: AllSubcategories[];
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
export type { AllSubcategories, NumberSubcategories, StringSubcategories };
export { LargeSize };
