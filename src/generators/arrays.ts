import { ArrayInputGenerator, ValueWithDescription } from "../types/InputGenerator";
import { LargeSize } from "../types/constants";

const arrayGenerators: ArrayInputGenerator[] = [
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
    },

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
            { value: [BigInt(123)], description: "[BigInt(123)]" },
            { value: [() => {}], description: "[() => {}]" },
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
            { value: [Symbol('a'), BigInt(1), new Date()], description: "[Symbol('a'), BigInt(1), new Date()]" },
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
    },

    {
        category: 'arrays',
        subcategory: 'large-simple',
        level: 'large',
        generate: (): ValueWithDescription[] => [
            { value: new Array(LargeSize).fill(0), description: "new Array(LargeSize).fill(0)" },
            { value: new Array(LargeSize).fill(1), description: "new Array(LargeSize).fill(1)" },
            { value: new Array(LargeSize).fill('a'), description: "new Array(LargeSize).fill('a')" },
            { value: new Array(LargeSize).fill(null), description: "new Array(LargeSize).fill(null)" },
            { value: new Array(LargeSize).fill(undefined), description: "new Array(LargeSize).fill(undefined)" },
            { value: Array.from({ length: LargeSize }, (_, i) => i), description: "Array.from({ length: LargeSize }, (_, i) => i)" },
            { value: Array.from({ length: LargeSize }, () => Math.random()), description: "Array.from({ length: LargeSize }, () => Math.random())" }
        ]
    },
    {
        category: 'arrays',
        subcategory: 'large-nested',
        level: 'large',
        generate: (): ValueWithDescription[] => [
            { value: new Array(Math.floor(LargeSize / 10)).fill([1, 2, 3]), description: "new Array(Math.floor(LargeSize / 10)).fill([1, 2, 3])" },
            { value: Array.from({ length: Math.floor(LargeSize / 100) }, (_, i) => new Array(100).fill(i)), description: "Array.from({ length: Math.floor(LargeSize / 100) }, (_, i) => new Array(100).fill(i))" },
            { value: new Array(Math.floor(LargeSize / 10)).fill({}).map((_, i) => ({ id: i, data: new Array(10).fill(i) })), description: "new Array(Math.floor(LargeSize / 10)).fill({}).map((_, i) => ({ id: i, data: new Array(10).fill(i) }))" },
            { value: Array.from({ length: 100 }, () => Array.from({ length: Math.floor(LargeSize / 100) }, (_, i) => i)), description: "Array.from({ length: 100 }, () => Array.from({ length: Math.floor(LargeSize / 100) }, (_, i) => i))" }
        ]
    },
    {
        category: 'arrays',
        subcategory: 'large-sparse',
        level: 'large',
        generate: (): ValueWithDescription[] => [
            { value: new Array(LargeSize), description: "new Array(LargeSize)" },
            { value: (() => { const arr = new Array(LargeSize).fill(0); for (let i = 0; i < LargeSize; i += 100) delete arr[i]; return arr; })(), description: "(() => { const arr = new Array(LargeSize).fill(0); for (let i = 0; i < LargeSize; i += 100) delete arr[i]; return arr; })()" },
            { value: Array.from({ length: LargeSize }, (_, i) => i % 1000 === 0 ? i : undefined), description: "Array.from({ length: LargeSize }, (_, i) => i % 1000 === 0 ? i : undefined)" }
        ]
    },
    {
        category: 'arrays',
        subcategory: 'memory-intensive',
        level: 'large',
        generate: (): ValueWithDescription[] => [
            { value: new Array(LargeSize).fill('x'.repeat(100)), description: "new Array(LargeSize).fill('x'.repeat(100))" },
            { value: Array.from({ length: Math.floor(LargeSize / 100) }, (_, i) => ({ id: i, data: 'data'.repeat(1000) })), description: "Array.from({ length: Math.floor(LargeSize / 100) }, (_, i) => ({ id: i, data: 'data'.repeat(1000) }))" },
            { value: new Array(Math.floor(LargeSize / 10)).fill([]).map(() => new Array(10).fill({ timestamp: Date.now(), random: Math.random() })), description: "new Array(Math.floor(LargeSize / 10)).fill([]).map(() => new Array(10).fill({ timestamp: Date.now(), random: Math.random() }))" },
            { value: Array.from({ length: LargeSize }, (_, i) => String.fromCharCode(65 + (i % 26)).repeat(i % 100 + 1)), description: "Array.from({ length: LargeSize }, (_, i) => String.fromCharCode(65 + (i % 26)).repeat(i % 100 + 1))" }
        ]
    },
    {
        category: 'arrays',
        subcategory: 'deeply-nested',
        level: 'large',
        generate: (): ValueWithDescription[] => [ // @ts-ignore
            { value: (() => { let arr = [1]; for (let i = 0; i < 100; i++) arr = [arr]; return arr; })(), description: "(() => { let arr = [1]; for (let i = 0; i < 100; i++) arr = [arr]; return arr; })()" }, // @ts-ignore
            { value: (() => { let arr = []; for (let i = 0; i < 50; i++) arr = [arr, arr]; return arr; })(), description: "(() => { let arr = []; for (let i = 0; i < 50; i++) arr = [arr, arr]; return arr; })()" },
            { value: Array.from({ length: 20 }, (_, depth) => Array.from({ length: 20 - depth }, (_, i) => Array.from({ length: Math.max(1, 20 - depth - i) }, (_, j) => `${depth}-${i}-${j}`))), description: "Array.from({ length: 20 }, (_, depth) => Array.from({ length: 20 - depth }, (_, i) => Array.from({ length: Math.max(1, 20 - depth - i) }, (_, j) => `${depth}-${i}-${j}`)))" }
        ]
    }
];

export default arrayGenerators;
