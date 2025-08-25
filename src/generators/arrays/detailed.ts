import { ArrayInputGenerator, ValueWithDescription } from "../../types/InputGenerator";

const DetailedGenerators: ArrayInputGenerator[] = [
    {
        category: 'arrays',
        subcategory: 'special-values',
        level: 'detailed',
        generate: (): ValueWithDescription[] => [
            { value: [null, undefined, NaN], description: "[null, undefined, NaN]" },
            { value: [Infinity, -Infinity, NaN], description: "[Infinity, -Infinity, NaN]" },
            { value: [0, -0, +0], description: "[0, -0, +0]" },
            { value: [true, false, null, undefined], description: "[true, false, null, undefined]" },
            { value: ['', ' ', '\t', '\n'], description: "['', ' ', '\\t', '\\n']" },
            { value: [Symbol('test')], description: "[Symbol('test')]" },
            { value: [BigInt(123)], description: "[BigInt(123)]" },
            { value: [() => {}], description: "[() => {}]" },
            { value: [function() {}], description: "[function() {}]" },
            { value: [new Date()], description: "[new Date()]" },
            { value: [new RegExp('test')], description: "[new RegExp('test')]" },
            { value: [/test/g], description: "[/test/g]" }
        ]
    },
    {
        category: 'arrays',
        subcategory: 'nested',
        level: 'detailed',
        generate: (): ValueWithDescription[] => [
            { value: [[]], description: "[[]]" },
            { value: [[], []], description: "[[], []]" },
            { value: [[1], [2], [3]], description: "[[1], [2], [3]]" },
            { value: [[1, 2], [3, 4]], description: "[[1, 2], [3, 4]]" },
            { value: [[[1]]], description: "[[[1]]]" },
            { value: [[[[1]]]], description: "[[[[1]]]]" },
            { value: [1, [2, [3, [4]]]], description: "[1, [2, [3, [4]]]]" },
            { value: [[1, 2, 3], ['a', 'b', 'c']], description: "[[1, 2, 3], ['a', 'b', 'c']]" },
            { value: [[], [1], [1, 2], [1, 2, 3]], description: "[[], [1], [1, 2], [1, 2, 3]]" },
            { value: [[null], [undefined], [NaN]], description: "[[null], [undefined], [NaN]]" }
        ]
    },
    {
        category: 'arrays',
        subcategory: 'objects',
        level: 'detailed',
        generate: (): ValueWithDescription[] => [
            { value: [{}], description: "[{}]" },
            { value: [{}, {}], description: "[{}, {}]" },
            { value: [{ a: 1 }], description: "[{ a: 1 }]" },
            { value: [{ a: 1 }, { b: 2 }], description: "[{ a: 1 }, { b: 2 }]" },
            { value: [{ key: 'value' }], description: "[{ key: 'value' }]" },
            { value: [{ nested: { key: 'value' } }], description: "[{ nested: { key: 'value' } }]" },
            { value: [{ arr: [1, 2, 3] }], description: "[{ arr: [1, 2, 3] }]" },
            { value: [{ null: null, undefined: undefined }], description: "[{ null: null, undefined: undefined }]" },
            { value: [{ toString: () => 'custom' }], description: "[{ toString: () => 'custom' }]" },
            { value: [Object.create(null)], description: "[Object.create(null)]" }
        ]
    },
    {
        category: 'arrays',
        subcategory: 'mixed-types',
        level: 'detailed',
        generate: (): ValueWithDescription[] => [
            { value: [1, 'a', true, null], description: "[1, 'a', true, null]" },
            { value: [[], {}, function() {}], description: "[[], {}, function() {}]" },
            { value: [0, '0', false, '', null, undefined], description: "[0, '0', false, '', null, undefined]" },
            { value: [Symbol('a'), BigInt(1), new Date(0)], description: "[Symbol('a'), BigInt(1), new Date(0)]" },
            { value: [/regex/, new Error('test'), Promise.resolve()], description: "[/regex/, new Error('test'), Promise.resolve()]" },
            { value: [new Map(), new Set(), new WeakMap()], description: "[new Map(), new Set(), new WeakMap()]" },
            { value: [Buffer.from ? Buffer.from('test') : 'Buffer not available', new ArrayBuffer(8)], description: "[Buffer.from ? Buffer.from('test') : 'Buffer not available', new ArrayBuffer(8)]" },
            { value: [Number('abc'), parseInt('abc'), parseFloat('abc')], description: "[Number('abc'), parseInt('abc'), parseFloat('abc')]" }
        ]
    },
    {
        category: 'arrays',
        subcategory: 'sparse',
        level: 'detailed',
        generate: (): ValueWithDescription[] => [
            { value: [, , ,], description: "[, , ,]" },
            { value: [1, , 3], description: "[1, , 3]" },
            { value: [, 2, ,], description: "[, 2, ,]" },
            { value: new Array(3), description: "new Array(3)" },
            { value: new Array(5).fill(undefined), description: "new Array(5).fill(undefined)" }, // @ts-ignore
            { value: Array(3).fill(), description: "Array(3).fill()" },
            { value: [1, , , 4, ,], description: "[1, , , 4, ,]" },
            { value: (() => { const arr = [1, 2, 3]; delete arr[1]; return arr; })(), description: "(() => { const arr = [1, 2, 3]; delete arr[1]; return arr; })()" }
        ]
    },
    {
        category: 'arrays',
        subcategory: 'generated',
        level: 'detailed',
        generate: (): ValueWithDescription[] => [
            { value: Array.from({ length: 3 }), description: "Array.from({ length: 3 })" },
            { value: Array.from({ length: 3 }, (_, i) => i), description: "Array.from({ length: 3 }, (_, i) => i)" },
            { value: Array.from('hello'), description: "Array.from('hello')" },
            { value: Array.from(new Set([1, 2, 3])), description: "Array.from(new Set([1, 2, 3]))" },
            { value: Array.from(new Map([['a', 1], ['b', 2]])), description: "Array.from(new Map([['a', 1], ['b', 2]]))" },
            { value: [...'hello'], description: "[...'hello']" },
            { value: [...new Set([1, 1, 2, 2, 3])], description: "[...new Set([1, 1, 2, 2, 3])]" },
            { value: Array.of(1, 2, 3), description: "Array.of(1, 2, 3)" },
            { value: Array.of(), description: "Array.of()" },
            { value: Array.of(undefined), description: "Array.of(undefined)" },
            { value: new Array(3).fill(0).map((_, i) => i), description: "new Array(3).fill(0).map((_, i) => i)" }
        ]
    },
    {
        category: 'arrays',
        subcategory: 'strings',
        level: 'detailed',
        generate: (): ValueWithDescription[] => [
            { value: ['', ' ', '  '], description: "['', ' ', '  ']" },
            { value: ['\n', '\t', '\r'], description: "['\\n', '\\t', '\\r']" },
            { value: ['\\', '/', '|'], description: "['\\\\', '/', '|']" },
            { value: ['"', "'", '`'], description: "['\"', \"'\", '`']" },
            { value: ['<', '>', '&'], description: "['<', '>', '&']" },
            { value: ['🚀', '🎉', '💯'], description: "['🚀', '🎉', '💯']" },
            { value: ['中文', '日本語', '한국어'], description: "['中文', '日本語', '한국어']" },
            { value: ['true', 'false', 'null'], description: "['true', 'false', 'null']" },
            { value: ['0', '1', '-1', 'NaN'], description: "['0', '1', '-1', 'NaN']" },
            { value: ['{}', '[]', 'function(){}'], description: "['{}', '[]', 'function(){}']" }
        ]
    },
    {
        category: 'arrays',
        subcategory: 'edge-cases',
        level: 'detailed',
        generate: (): ValueWithDescription[] => [
            { value: [Number.EPSILON], description: "[Number.EPSILON]" },
            { value: [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY], description: "[Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY]" },
            { value: [0.1 + 0.2], description: "[0.1 + 0.2]" },
            { value: [Math.sqrt(-1)], description: "[Math.sqrt(-1)]" },
            { value: [parseInt(''), parseFloat('')], description: "[parseInt(''), parseFloat('')]" },
            { value: [typeof null, typeof undefined], description: "[typeof null, typeof undefined]" },
            { value: [void 0], description: "[void 0]" },
            { value: [1/0, -1/0, 0/0], description: "[1/0, -1/0, 0/0]" }, // @ts-ignore
            { value: [NaN === NaN], description: "[NaN === NaN]" },
            { value: [Object.prototype], description: "[Object.prototype]" },
            { value: [Array.prototype], description: "[Array.prototype]" }
        ]
    }
];

export default DetailedGenerators;
