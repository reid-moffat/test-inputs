import TestInputs from "./core/TestInputs";
import {
    CategoryValues,
    LevelValues,
    SubcategoryValues,
    NumberSubcategoryValues,
    StringSubcategoryValues,
    ArraySubcategoryValues,
    ObjectSubcategoryValues,
    OtherSubcategoryValues
} from "./types/filters.ts";
import type {
    Category,
    Level,
    Subcategory,
    NumberSubcategory,
    StringSubcategory,
    ArraySubcategory,
    ObjectSubcategory,
    OtherSubcategory
} from "./types/filters.ts";
import type { FilterOptions, InputItem } from "./types/io";


export default TestInputs;

export { CategoryValues, LevelValues, SubcategoryValues, NumberSubcategoryValues, StringSubcategoryValues, ArraySubcategoryValues, ObjectSubcategoryValues, OtherSubcategoryValues };
export type { Category, Level, Subcategory, NumberSubcategory, StringSubcategory, ArraySubcategory, ObjectSubcategory, OtherSubcategory };
export type { FilterOptions, InputItem };
