type Category = "numbers" | "strings";
type Level = "simple" | "detailed" | "large";

type NumberSubcategories = "";
type StringSubcategories = "";

type Subcategory = NumberSubcategories | StringSubcategories;

type InputGenerator = {
    category: Category;
    subcategory: Subcategory;
    level: Level;
    values: () => any[]
}

type FilterOptions = {
    levels?: Level[];
    categories?: Category[];
    subcategories?: Subcategory[];
}

type InputItem = {
    value: any;
    description: string;
    category: Category;
    subcategory: Subcategory;
    level: Level;
}

const LargeSize = 100_000; // Size of large inputs

export type { InputGenerator, FilterOptions, InputItem, Category, Level };
export type { Subcategory, NumberSubcategories, StringSubcategories };
export { LargeSize };
