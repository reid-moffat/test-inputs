import { ArrayInputGenerator, ValueWithDescription } from "../../types/InputGenerator";

const LargeGenerators: ArrayInputGenerator[] = [
    {
        category: 'arrays',
        subcategory: 'large-simple',
        level: 'large',
        generate: (LargeInputSize: number): ValueWithDescription[] => [
            { value: new Array(LargeInputSize).fill(0), description: "new Array(LargeInputSize).fill(0)" },
            { value: new Array(LargeInputSize).fill(1), description: "new Array(LargeInputSize).fill(1)" },
            { value: new Array(LargeInputSize).fill('a'), description: "new Array(LargeInputSize).fill('a')" },
            { value: new Array(LargeInputSize).fill(null), description: "new Array(LargeInputSize).fill(null)" },
            { value: new Array(LargeInputSize).fill(undefined), description: "new Array(LargeInputSize).fill(undefined)" },
            { value: Array.from({ length: LargeInputSize }, (_, i) => i), description: "Array.from({ length: LargeInputSize }, (_, i) => i)" },
            { value: Array.from({ length: LargeInputSize }, () => Math.random()), description: "Array.from({ length: LargeInputSize }, () => Math.random())" }
        ]
    },
    {
        category: 'arrays',
        subcategory: 'large-nested',
        level: 'large',
        generate: (LargeInputSize: number): ValueWithDescription[] => [
            { value: new Array(Math.floor(LargeInputSize / 3)).fill([1, 2, 3]), description: "new Array(Math.floor(LargeInputSize / 3)).fill([1, 2, 3])" },
            { value: Array.from({ length: Math.floor(LargeInputSize / 100) }, (_, i) => new Array(100).fill(i)), description: "Array.from({ length: Math.floor(LargeInputSize / 100) }, (_, i) => new Array(100).fill(i))" },
            { value: new Array(Math.floor(LargeInputSize / 10)).fill({}).map((_, i) => ({ id: i, data: new Array(10).fill(i) })), description: "new Array(Math.floor(LargeInputSize / 10)).fill({}).map((_, i) => ({ id: i, data: new Array(10).fill(i) }))" },
            { value: Array.from({ length: 100 }, () => Array.from({ length: Math.floor(LargeInputSize / 100) }, (_, i) => i)), description: "Array.from({ length: 100 }, () => Array.from({ length: Math.floor(LargeInputSize / 100) }, (_, i) => i))" }
        ]
    },
    {
        category: 'arrays',
        subcategory: 'large-sparse',
        level: 'large',
        generate: (LargeInputSize: number): ValueWithDescription[] => [
            { value: new Array(LargeInputSize), description: "new Array(LargeInputSize)" },
            { value: (() => { const arr = new Array(LargeInputSize).fill(0); for (let i = 0; i < LargeInputSize; i += 100) delete arr[i]; return arr; })(), description: "(() => { const arr = new Array(LargeInputSize).fill(0); for (let i = 0; i < LargeInputSize; i += 100) delete arr[i]; return arr; })()" },
            { value: Array.from({ length: LargeInputSize }, (_, i) => i % 1000 === 0 ? i : undefined), description: "Array.from({ length: LargeInputSize }, (_, i) => i % 1000 === 0 ? i : undefined)" }
        ]
    },
    {
        category: 'arrays',
        subcategory: 'memory-intensive',
        level: 'large',
        generate: (LargeInputSize: number): ValueWithDescription[] => [
            { value: new Array(LargeInputSize).fill('x'.repeat(100)), description: "new Array(LargeInputSize).fill('x'.repeat(100))" },
            { value: Array.from({ length: Math.floor(LargeInputSize / 100) }, (_, i) => ({ id: i, data: 'data'.repeat(1000) })), description: "Array.from({ length: Math.floor(LargeInputSize / 100) }, (_, i) => ({ id: i, data: 'data'.repeat(1000) }))" },
            { value: new Array(Math.floor(LargeInputSize / 10)).fill([]).map(() => new Array(10).fill({ timestamp: Date.now(), random: Math.random() })), description: "new Array(Math.floor(LargeInputSize / 10)).fill([]).map(() => new Array(10).fill({ timestamp: Date.now(), random: Math.random() }))" },
            { value: Array.from({ length: LargeInputSize }, (_, i) => String.fromCharCode(65 + (i % 26)).repeat(i % 100 + 1)), description: "Array.from({ length: LargeInputSize }, (_, i) => String.fromCharCode(65 + (i % 26)).repeat(i % 100 + 1))" }
        ]
    },
    {
        category: 'arrays',
        subcategory: 'deeply-nested',
        level: 'large',
        generate: (LargeInputSize: number): ValueWithDescription[] => [ // @ts-ignore
            { value: (() => { let arr = [1]; for (let i = 0; i < 100; i++) arr = [arr]; return arr; })(), description: "(() => { let arr = [1]; for (let i = 0; i < 100; i++) arr = [arr]; return arr; })()" }, // @ts-ignore
            { value: (() => { let arr = []; for (let i = 0; i < Math.floor(Math.log2(LargeInputSize)); i++) arr = [arr, arr]; return arr; })(), description: "(() => { let arr = []; for (let i = 0; i < Math.floor(Math.log2(LargeInputSize)); i++) arr = [arr, arr]; return arr; })()" },
            { value: (() => { const getSize = () => { for(let n = Math.floor(Math.cbrt(6 * LargeInputSize));;n--) if(n * (n + 1) * (n + 2) <= 6 * LargeInputSize) return n; }; const size = getSize(); return Array.from({ length: size }, (_, depth) => Array.from({ length: size - depth }, (_, i) => Array.from({ length: Math.max(1, size - depth - i) }, (_, j) => `${depth}-${i}-${j}`))) })(), description: "(() => { const getSize = () => { for(let n = Math.floor(Math.cbrt(6 * LargeInputSize));;n--) if(n * (n + 1) * (n + 2) <= 6 * LargeInputSize) return n; }; const size = getSize(); return Array.from({ length: size }, (_, depth) => Array.from({ length: size - depth }, (_, i) => Array.from({ length: Math.max(1, size - depth - i) }, (_, j) => `${depth}-${i}-${j}`))) })()" }
        ]
    }
];

export default LargeGenerators;
