type Categories = "strings";
type Level = "simple" | "detailed" | "large";

type InputGenerator = {
    category: Categories;
    subcategory: string;
    level: Level;
    generate: (size?: number) => any[]
}

export type { InputGenerator, Categories, Level };
