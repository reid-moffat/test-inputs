import { ObjectInputGenerator, ValueWithDescription } from "../../types/InputGenerator";

const LargeGenerators: ObjectInputGenerator[] = [
    {
        category: 'objects',
        subcategory: 'large-flat',
        level: 'large',
        generate: (LargeInputSize: number): ValueWithDescription[] => [
            { value: Object.fromEntries(Array.from({ length: LargeInputSize }, (_, i) => [`key${i}`, i])), description: "Object.fromEntries(Array.from({ length: LargeInputSize }, (_, i) => [`key${i}`, i]))" },
            { value: Object.fromEntries(Array.from({ length: LargeInputSize }, (_, i) => [`prop${i}`, `value${i}`])), description: "Object.fromEntries(Array.from({ length: LargeInputSize }, (_, i) => [`prop${i}`, `value${i}`]))" },
            { value: Object.fromEntries(Array.from({ length: LargeInputSize }, (_, i) => [i.toString(), Math.random()])), description: "Object.fromEntries(Array.from({ length: LargeInputSize }, (_, i) => [i.toString(), Math.random()]))" },
            { value: (() => { const obj: any = {}; for (let i = 0; i < LargeInputSize; i++) obj[`field_${i}`] = i % 2 === 0; return obj; })(), description: "(() => { const obj: any = {}; for (let i = 0; i < LargeInputSize; i++) obj[`field_${i}`] = i % 2 === 0; return obj; })()" }
        ]
    },
    {
        category: 'objects',
        subcategory: 'large-nested',
        level: 'large',
        generate: (LargeInputSize: number): ValueWithDescription[] => [
            { value: (() => { let obj: any = {}; let current = obj; for (let i = 0; i < LargeInputSize; i++) { current.next = {}; current = current.next; } return obj; })(), description: "(() => { let obj: any = {}; let current = obj; for (let i = 0; i < LargeInputSize; i++) { current.next = {}; current = current.next; } return obj; })()" },
            { value: Object.fromEntries(Array.from({ length: Math.floor(LargeInputSize / 100) }, (_, i) => [`section${i}`, Object.fromEntries(Array.from({ length: 100 }, (_, j) => [`item${j}`, `data_${i}_${j}`]))])), description: "Object.fromEntries(Array.from({ length: Math.floor(LargeInputSize / 100) }, (_, i) => [`section${i}`, Object.fromEntries(Array.from({ length: 100 }, (_, j) => [`item${j}`, `data_${i}_${j}`]))]))" },
            { value: ( () => { const createTree = (depth: number, breadth: number): any => { return depth <= 0 ? { leaf: true } : Object.fromEntries(Array.from({ length: breadth }, (_, i) => { return [`child${i}`, createTree(depth - 1, breadth)] })); }; const getSize = () => { const endSize = (n: number) => (Math.pow(n, n + 1) - 1) / (n - 1); let curr = 2; while (true) { if (endSize(curr) > LargeInputSize) { return curr - 1; } curr++; } }; const calculatedSize = getSize(); return createTree(calculatedSize, calculatedSize); } )(), description: "( () => { const createTree = (depth: number, breadth: number): any => { return depth <= 0 ? { leaf: true } : Object.fromEntries(Array.from({ length: breadth }, (_, i) => { return [`child${i}`, createTree(depth - 1, breadth)] })); }; const getSize = () => { const endSize = (n: number) => (Math.pow(n, n + 1) - 1) / (n - 1); let curr = 2; while (true) { if (endSize(curr) > LargeInputSize) { return curr - 1; } curr++; } }; const calculatedSize = getSize(); return createTree(calculatedSize, calculatedSize); } )()" }
        ]
    },
    {
        category: 'objects',
        subcategory: 'large-arrays',
        level: 'large',
        generate: (LargeInputSize: number): ValueWithDescription[] => [
            { value: { data: new Array(LargeInputSize).fill(0).map((_, i) => ({ id: i, value: Math.random() })) }, description: "{ data: new Array(LargeInputSize).fill(0).map((_, i) => ({ id: i, value: Math.random() })) }" },
            { value: { matrix: Array.from({ length: Math.sqrt(LargeInputSize) }, (_, i) => Array.from({ length: Math.sqrt(LargeInputSize) }, (_, j) => i * Math.sqrt(LargeInputSize) + j)) }, description: "{ matrix: Array.from({ length: Math.sqrt(LargeInputSize) }, (_, i) => Array.from({ length: Math.sqrt(LargeInputSize) }, (_, j) => i * Math.sqrt(LargeInputSize) + j)) }" },
            { value: { items: new Array(Math.floor(LargeInputSize / 10)).fill(null).map((_, i) => ({ id: i, children: new Array(10).fill(null).map((_, j) => ({ childId: j, data: `item_${i}_${j}` })) })) }, description: "{ items: new Array(Math.floor(LargeInputSize / 10)).fill(null).map((_, i) => ({ id: i, children: new Array(10).fill(null).map((_, j) => ({ childId: j, data: `item_${i}_${j}` })) })) }" }
        ]
    },
    {
        category: 'objects',
        subcategory: 'memory-intensive',
        level: 'large',
        generate: (LargeInputSize: number): ValueWithDescription[] => [
            { value: Object.fromEntries(Array.from({ length: Math.floor(LargeInputSize / 100) }, (_, i) => [`data${i}`, 'x'.repeat(1000)])), description: "Object.fromEntries(Array.from({ length: Math.floor(LargeInputSize / 100) }, (_, i) => [`data${i}`, 'x'.repeat(1000)]))" },
            { value: { blob: new Array(LargeInputSize).fill('data').join(''), metadata: Object.fromEntries(Array.from({ length: 1000 }, (_, i) => [`meta${i}`, { timestamp: Date.now(), random: Math.random(), id: i }])) }, description: "{ blob: new Array(LargeInputSize).fill('data').join(''), metadata: Object.fromEntries(Array.from({ length: 1000 }, (_, i) => [`meta${i}`, { timestamp: Date.now(), random: Math.random(), id: i }])) }" },
            { value: (() => { const obj: any = {}; for (let i = 0; i < Math.floor(LargeInputSize / 1000); i++) { obj[`section_${i}`] = { data: '🚀'.repeat(1000), items: new Array(100).fill({ heavy: 'data'.repeat(100) }) }; } return obj; })(), description: "(() => { const obj: any = {}; for (let i = 0; i < Math.floor(LargeInputSize / 1000); i++) { obj[`section_${i}`] = { data: '🚀'.repeat(1000), items: new Array(100).fill({ heavy: 'data'.repeat(100) }) }; } return obj; })()" }
        ]
    },
    {
        category: 'objects',
        subcategory: 'recursive-structures',
        level: 'large',
        generate: (LargeInputSize: number): ValueWithDescription[] => [
            { value: (() => { const createLinkedList = (length: number): any => length <= 0 ? null : { value: length, next: createLinkedList(length - 1) }; return createLinkedList(Math.min(LargeInputSize, 5000)); })(), description: "(() => { const createLinkedList = (length: number): any => length <= 0 ? null : { value: length, next: createLinkedList(length - 1) }; return createLinkedList(Math.min(LargeInputSize, 5000)); })()" },
            { value: (() => { const createBinaryTree = (depth: number): any => depth <= 0 ? null : { value: depth, left: createBinaryTree(depth - 1), right: createBinaryTree(depth - 1) }; return createBinaryTree(Math.floor(Math.log(LargeInputSize + 1) / Math.log(2))); })(), description: "(() => { const createBinaryTree = (depth: number): any => depth <= 0 ? null : { value: depth, left: createBinaryTree(depth - 1), right: createBinaryTree(depth - 1) }; return createBinaryTree(Math.floor(Math.log(LargeInputSize + 1) / Math.log(2))); })()" },
            { value: (() => { const createGraph = (nodes: number): any => { const graph: any = {}; for (let i = 0; i < nodes; i++) { graph[`node_${i}`] = { id: i, connections: Array.from({ length: Math.min(10, nodes - 1) }, (_, j) => `node_${(i + j + 1) % nodes}`) }; } return graph; }; return createGraph(Math.sqrt(LargeInputSize)); })(), description: "(() => { const createGraph = (nodes: number): any => { const graph: any = {}; for (let i = 0; i < nodes; i++) { graph[`node_${i}`] = { id: i, connections: Array.from({ length: Math.min(10, nodes - 1) }, (_, j) => `node_${(i + j + 1) % nodes}`) }; } return graph; }; return createGraph(Math.sqrt(LargeInputSize)); })()" }
        ]
    }
];

export default LargeGenerators;
