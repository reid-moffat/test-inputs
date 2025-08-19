import { Category, Level, Subcategory } from "./categories";

type FilterOptions = {
    include?: {
        levels?: Level | Level[];
        categories?: Category | Category[];
        subcategories?: Subcategory | Subcategory[];
    };
    exclude?: {
        levels?: Level | Level[];
        categories?: Category | Category[];
        subcategories?: Subcategory | Subcategory[];
    };
}

type InputItem = {
    value: any;
    description: string;
    category: Category;
    subcategory: Subcategory;
    level: Level;
}

export type { FilterOptions, InputItem };
