import { Category, Level, Subcategory } from "./categories";

type FilterOptions = {
    include?: {
        categories?: Category | Category[];
        subcategories?: Subcategory | Subcategory[];
        levels?: Level | Level[];
    };
    exclude?: {
        categories?: Category | Category[];
        subcategories?: Subcategory | Subcategory[];
        levels?: Level | Level[];
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
