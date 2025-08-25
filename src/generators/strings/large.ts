import { StringInputGenerator, ValueWithDescription } from "../../types/InputGenerator";

const LargeGenerators: StringInputGenerator[] = [
    {
        category: 'strings',
        subcategory: 'large',
        level: 'large',
        generate: (LargeInputSize: number): ValueWithDescription[] => [
            { value: ' '.repeat(LargeInputSize), description: "' '.repeat(LargeInputSize)" },
            { value: 'a'.repeat(LargeInputSize), description: "'a'.repeat(LargeInputSize)" },
            { value: 'x'.repeat(LargeInputSize), description: "'x'.repeat(LargeInputSize)" },
            { value: '0'.repeat(LargeInputSize), description: "'0'.repeat(LargeInputSize)" },
            { value: 'Hello World! '.repeat(LargeInputSize / 13), description: "'Hello World! '.repeat(LargeInputSize / 13)" },
            { value: '🚀'.repeat(LargeInputSize / 4), description: "'🚀'.repeat(LargeInputSize / 4)" }
        ]
    },
    {
        category: 'strings',
        subcategory: 'repeated',
        level: 'large',
        generate: (LargeInputSize: number): ValueWithDescription[] => [
            { value: 'a'.repeat(LargeInputSize), description: "'a'.repeat(LargeInputSize)" },
            { value: 'ab'.repeat(LargeInputSize / 2), description: "'ab'.repeat(LargeInputSize / 2)" },
            { value: 'abc'.repeat(LargeInputSize / 3), description: "'abc'.repeat(LargeInputSize / 3)" },
            { value: '123'.repeat(LargeInputSize / 3), description: "'123'.repeat(LargeInputSize / 3)" },
            { value: '<tag>'.repeat(LargeInputSize / 5), description: "'<tag>'.repeat(LargeInputSize / 5)" },
            { value: '..\\'.repeat(LargeInputSize / 3), description: "'..\\\\'.repeat(LargeInputSize / 3)" },
            { value: '/**/'.repeat(LargeInputSize / 4), description: "'/**/'.repeat(LargeInputSize / 4)" },
            { value: 'null,'.repeat(LargeInputSize / 4), description: "'null,'.repeat(LargeInputSize / 4)" }
        ]
    },
    {
        category: 'strings',
        subcategory: 'memory-intensive',
        level: 'large',
        generate: (LargeInputSize: number): ValueWithDescription[] => [
            { value: JSON.stringify(Array(LargeInputSize).fill('data')), description: "JSON.stringify(Array(LargeInputSize).fill('data'))" },
            { value: Array(LargeInputSize).fill('item').join(','), description: "Array(LargeInputSize).fill('item').join(',')" },
            { value: 'A'.repeat(Math.floor(LargeInputSize / 2)) + 'B'.repeat(Math.floor(LargeInputSize / 2)), description: "'A'.repeat(Math.floor(LargeInputSize / 2)) + 'B'.repeat(Math.floor(LargeInputSize / 2))" },
            { value: '🎉'.repeat(LargeInputSize), description: "'🎉'.repeat(LargeInputSize)" },
            { value: '<div>'.repeat(Math.floor(LargeInputSize / 2)) + 'content' + '</div>'.repeat(Math.floor(LargeInputSize / 2)), description: "'<div>'.repeat(Math.floor(LargeInputSize / 2)) + 'content' + '</div>'.repeat(Math.floor(LargeInputSize / 2))" }
        ]
    }
];

export default LargeGenerators;
