import { ArrayInputGenerator, ValueWithDescription } from "../../types/InputGenerator";

const SimpleGenerators: ArrayInputGenerator[] = [
    {
        category: 'arrays',
        subcategory: 'empty',
        level: 'simple',
        generate: (): ValueWithDescription[] => [
            { value: [], description: "[]" },
            { value: new Array(), description: "new Array()" },
            { value: Array(), description: "Array()" },
            { value: Array.from([]), description: "Array.from([])" }
        ]
    },
    {
        category: 'arrays',
        subcategory: 'basic',
        level: 'simple',
        generate: (): ValueWithDescription[] => [
            { value: [1], description: "[1]" },
            { value: [1, 2, 3], description: "[1, 2, 3]" },
            { value: ['a'], description: "['a']" },
            { value: ['a', 'b', 'c'], description: "['a', 'b', 'c']" },
            { value: [true], description: "[true]" },
            { value: [false], description: "[false]" },
            { value: [true, false], description: "[true, false]" },
            { value: [0, 1, 2, 3, 4], description: "[0, 1, 2, 3, 4]" },
            { value: ['hello', 'world'], description: "['hello', 'world']" },
            { value: [1, 'a', true], description: "[1, 'a', true]" }
        ]
    },
    {
        category: 'arrays',
        subcategory: 'single-element',
        level: 'simple',
        generate: (): ValueWithDescription[] => [
            { value: [0], description: "[0]" },
            { value: [1], description: "[1]" },
            { value: [-1], description: "[-1]" },
            { value: [''], description: "['']" },
            { value: [' '], description: "[' ']" },
            { value: [null], description: "[null]" },
            { value: [undefined], description: "[undefined]" },
            { value: [NaN], description: "[NaN]" },
            { value: [Infinity], description: "[Infinity]" },
            { value: [-Infinity], description: "[-Infinity]" },
            { value: [{}], description: "[{}]" },
            { value: [[]], description: "[[]]" }
        ]
    },
    {
        category: 'arrays',
        subcategory: 'numbers',
        level: 'simple',
        generate: (): ValueWithDescription[] => [
            { value: [1, 2, 3, 4, 5], description: "[1, 2, 3, 4, 5]" },
            { value: [-1, -2, -3], description: "[-1, -2, -3]" },
            { value: [0.1, 0.2, 0.3], description: "[0.1, 0.2, 0.3]" },
            { value: [1.5, 2.5, 3.5], description: "[1.5, 2.5, 3.5]" },
            { value: [Math.PI, Math.E], description: "[Math.PI, Math.E]" },
            { value: [Number.MAX_VALUE, Number.MIN_VALUE], description: "[Number.MAX_VALUE, Number.MIN_VALUE]" },
            { value: [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER], description: "[Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER]" },
            { value: [0, -0], description: "[0, -0]" },
            { value: [1e10, 1e-10], description: "[1e10, 1e-10]" }
        ]
    }
];

export default SimpleGenerators;
