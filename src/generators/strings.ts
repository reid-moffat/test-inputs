import { InputGenerator } from "../core/types";

export const stringGenerators: InputGenerator[] = [
    {
        category: 'strings',
        subcategory: 'empty',
        level: 'simple',
        generate: () => ['', ' ', '\t', '\n', '\r']
    },
    {
        category: 'strings',
        subcategory: 'unicode',
        level: 'detailed',
        generate: () => ['🚀', '中文', 'עברית', '🏳️‍🌈']
    },
    {
        category: 'strings',
        subcategory: 'large',
        level: 'large',
        generate: (size: number = 10_000) => [' '.repeat(size), 'a'.repeat(size)]
    }
];

export default stringGenerators;
