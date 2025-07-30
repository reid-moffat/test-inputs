import { Category, Level, Subcategory } from "./Categories";

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

export type { FilterOptions, InputItem };
export { LargeSize };
