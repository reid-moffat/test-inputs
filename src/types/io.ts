import { Category, Level, Subcategory } from "./categories";

type FilterOptions = {
    include?: {
        categories?: Category[];
        subcategories?: Subcategory[];
        levels?: Level[];
    };
    exclude?: {
        categories?: Category[];
        subcategories?: Subcategory[];
        levels?: Level[];
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
