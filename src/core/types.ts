type InputGenerator = {
    category: string;
    subcategory: string;
    type: "simple" | "detailed" | "large";
    generate: () => any[]
}

export type { InputGenerator };
