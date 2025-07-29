type Categories = "strings" | "";

type InputGenerator = {
    category: Categories;
    subcategory: string;
    type: "simple" | "detailed" | "large";
    generate: () => any[]
}

export type { InputGenerator };
