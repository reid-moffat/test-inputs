import { OtherInputGenerator, ValueWithDescription } from "../../types/InputGenerator.ts";

const LargeGenerators: OtherInputGenerator[] = [
    {
        category: 'other',
        subcategory: 'large-symbols',
        level: 'large',
        generate: (LargeInputSize: number): ValueWithDescription[] => [
            { value: Array.from({ length: Math.floor(LargeInputSize) }, (_, i) => Symbol(`symbol_${i}`)), description: "Array.from({ length: Math.floor(LargeInputSize) }, (_, i) => Symbol(`symbol_${i}`))" },
            { value: Array.from({ length: Math.floor(LargeInputSize) }, (_, i) => Symbol.for(`global_${i}`)), description: "Array.from({ length: Math.floor(LargeInputSize) }, (_, i) => Symbol.for(`global_${i}`))" }
        ]
    },
    {
        category: 'other',
        subcategory: 'large-bigints',
        level: 'large',
        generate: (LargeInputSize: number): ValueWithDescription[] => [
            { value: BigInt('9'.repeat(LargeInputSize)), description: "BigInt('9'.repeat(LargeInputSize))" },
            { value: BigInt('1' + '0'.repeat(LargeInputSize)), description: "BigInt('1' + '0'.repeat(LargeInputSize))" },
            { value: Array.from({ length: Math.floor(LargeInputSize) }, (_, i) => BigInt(i * i)), description: "Array.from({ length: Math.floor(LargeInputSize) }, (_, i) => BigInt(i * i))" }
        ]
    },
    {
        category: 'other',
        subcategory: 'large-functions',
        level: 'large',
        generate: (LargeInputSize: number): ValueWithDescription[] => [
            { value: Array.from({ length: Math.floor(LargeInputSize) }, (_, i) => () => i), description: "Array.from({ length: Math.floor(LargeInputSize) }, (_, i) => () => i)" },
            { value: Array.from({ length: Math.floor(LargeInputSize) }, (_, i) => function() { return i; }), description: "Array.from({ length: Math.floor(LargeInputSize) }, (_, i) => function() { return i; })" },
            { value: (() => { const funcs = []; for (let i = 0; i < Math.floor(LargeInputSize); i++) { funcs.push(new Function('return ' + i)); } return funcs; })(), description: "(() => { const funcs = []; for (let i = 0; i < Math.floor(LargeInputSize); i++) { funcs.push(new Function('return ' + i)); } return funcs; })()" }
        ]
    },
    {
        category: 'other',
        subcategory: 'large-collections',
        level: 'large',
        generate: (LargeInputSize: number): ValueWithDescription[] => [
            { value: (() => { const map = new Map(); for (let i = 0; i < LargeInputSize; i++) map.set(`key_${i}`, i); return map; })(), description: "(() => { const map = new Map(); for (let i = 0; i < LargeInputSize; i++) map.set(`key_${i}`, i); return map; })()" },
            { value: (() => { const set = new Set(); for (let i = 0; i < LargeInputSize; i++) set.add(Symbol(`item_${i}`)); return set; })(), description: "(() => { const set = new Set(); for (let i = 0; i < LargeInputSize; i++) set.add(Symbol(`item_${i}`)); return set; })()" },
            { value: new Map(Array.from({ length: LargeInputSize }, (_, i) => [Symbol(`key_${i}`), { id: i, data: `item_${i}` }])), description: "new Map(Array.from({ length: LargeInputSize }, (_, i) => [Symbol(`key_${i}`), { id: i, data: `item_${i}` }]))" },
            { value: new Set(Array.from({ length: LargeInputSize }, (_, i) => new Date(i * 1000))), description: "new Set(Array.from({ length: LargeInputSize }, (_, i) => new Date(i * 1000)))" }
        ]
    },
    {
        category: 'other',
        subcategory: 'large-typed-arrays',
        level: 'large',
        generate: (LargeInputSize: number): ValueWithDescription[] => [
            { value: new ArrayBuffer(LargeInputSize), description: "new ArrayBuffer(LargeInputSize)" },
            { value: new Uint8Array(LargeInputSize), description: "new Uint8Array(LargeInputSize)" },
            { value: new Int32Array(Array.from({ length: Math.floor(LargeInputSize) }, (_, i) => i)), description: "new Int32Array(Array.from({ length: Math.floor(LargeInputSize) }, (_, i) => i))" },
            { value: new Float64Array(Array.from({ length: Math.floor(LargeInputSize) }, (_, i) => Math.random())), description: "new Float64Array(Array.from({ length: Math.floor(LargeInputSize) }, (_, i) => Math.random()))" },
            { value: new BigUint64Array(Array.from({ length: Math.floor(LargeInputSize) }, (_, i) => BigInt(i))), description: "new BigUint64Array(Array.from({ length: Math.floor(LargeInputSize) }, (_, i) => BigInt(i)))" }
        ]
    },
    {
        category: 'other',
        subcategory: 'complex-generators',
        level: 'large',
        generate: (LargeInputSize: number): ValueWithDescription[] => [
            { value: (function*() { for (let i = 0; i < LargeInputSize; i++) yield i; })(), description: "(function*() { for (let i = 0; i < LargeInputSize; i++) yield i; })()" },
            { value: (function*() { let i = 0; while (i < LargeInputSize) yield `item_${i++}`; })(), description: "(function*() { let i = 0; while (i < LargeInputSize) yield `item_${i++}`; })()" },
            { value: (async function*() { for (let i = 0; i < Math.min(1000, LargeInputSize); i++) yield Promise.resolve(i); })(), description: "(async function*() { for (let i = 0; i < Math.min(1000, LargeInputSize); i++) yield Promise.resolve(i); })()" }
        ]
    }
];

export default LargeGenerators;
