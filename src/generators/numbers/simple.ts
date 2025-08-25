import { NumberInputGenerator, ValueWithDescription } from "../../types/InputGenerator";

const SimpleGenerators: NumberInputGenerator[] = [
    {
        category: 'numbers',
        subcategory: 'integers',
        level: 'simple',
        generate: (): ValueWithDescription[] => [
            { value: 0, description: '0' },
            { value: 1, description: '1' },
            { value: -1, description: '-1' },
            { value: 2, description: '2' },
            { value: -2, description: '-2' },
            { value: 10, description: '10' },
            { value: -10, description: '-10' },
            { value: 42, description: '42' },
            { value: 100, description: '100' },
            { value: -100, description: '-100' }
        ]
    },
    {
        category: 'numbers',
        subcategory: 'decimals',
        level: 'simple',
        generate: (): ValueWithDescription[] => [
            { value: 0.1, description: '0.1' },
            { value: -0.1, description: '-0.1' },
            { value: 0.5, description: '0.5' },
            { value: -0.5, description: '-0.5' },
            { value: 1.5, description: '1.5' },
            { value: -1.5, description: '-1.5' },
            { value: 3.14, description: '3.14' },
            { value: -3.14, description: '-3.14' }
        ]
    }
];

export default SimpleGenerators;
