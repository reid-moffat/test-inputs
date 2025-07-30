import { Category, Level, Subcategory } from "./categories";

type FilterOptions = {
    categories?: Category[];
    subcategories?: Subcategory[];
    levels?: Level[];
    exclude?: boolean;
}

type InputItem = {
    value: any;
    description: string;
    category: Category;
    subcategory: Subcategory;
    level: Level;
}

export type { FilterOptions, InputItem };
