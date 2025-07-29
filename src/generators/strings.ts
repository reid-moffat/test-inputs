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
        generate: () => [' '.repeat(10_000), 'a'.repeat(100_000)]
    }
];

export default stringGenerators;
