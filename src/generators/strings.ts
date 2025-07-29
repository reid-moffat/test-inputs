import { InputGenerator } from "../core/types";

export const stringGenerators: InputGenerator[] = [
    {
        category: 'strings',
        subcategory: 'empty',
        type: 'simple',
        generate: () => ['', ' ', '\t', '\n', '\r']
    },
    {
        category: 'strings',
        subcategory: 'unicode',
        type: 'detailed',
        generate: () => ['🚀', '中文', 'עברית', '🏳️‍🌈']
    },
    {
        category: 'strings',
        subcategory: 'large',
        type: 'large',
        generate: () => [' '.repeat(10_000), 'a'.repeat(100_000)]
    }
];

export default stringGenerators;
