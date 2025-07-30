import { Category, Level, Subcategory } from "./categories";

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

export type { FilterOptions, InputItem };
