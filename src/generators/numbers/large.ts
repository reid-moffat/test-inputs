import { NumberInputGenerator, ValueWithDescription } from "../../types/InputGenerator";

const LargeGenerators: NumberInputGenerator[] = [
    {
        category: 'numbers',
        subcategory: 'large',
        level: 'large',
        generate: (): ValueWithDescription[] => [
            { value: Number.MAX_SAFE_INTEGER, description: 'Number.MAX_SAFE_INTEGER' },
            { value: Number.MAX_VALUE, description: 'Number.MAX_VALUE' },
            { value: 1e100, description: '1e100' },
            { value: 1e200, description: '1e200' },
            { value: 1e300, description: '1e300' },
            { value: Math.PI * 1e15, description: 'Math.PI * 1e15' },
            { value: Math.E * 1e20, description: 'Math.E * 1e20' }
        ]
    }
];

export default LargeGenerators;