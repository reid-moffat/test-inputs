import { ObjectInputGenerator, ValueWithDescription } from "../types/InputGenerator";
import { LargeSize } from "../types/constants";

const objectGenerators: ObjectInputGenerator[] = [
    {
        category: 'objects',
        subcategory: 'empty',
        level: 'simple',
        generate: (): ValueWithDescription[] => [
            { value: {}, description: "{}" },
            { value: new Object(), description: "new Object()" },
            { value: Object.create(null), description: "Object.create(null)" },
            { value: Object.create({}), description: "Object.create({})" },
            { value: Object.create(Object.prototype), description: "Object.create(Object.prototype)" }
        ]
    },
    {
        category: 'objects',
        subcategory: 'basic',
        level: 'simple',
        generate: (): ValueWithDescription[] => [
            { value: { a: 1 }, description: "{ a: 1 }" },
            { value: { key: 'value' }, description: "{ key: 'value' }" },
            { value: { name: 'test' }, description: "{ name: 'test' }" },
            { value: { x: 0, y: 0 }, description: "{ x: 0, y: 0 }" },
            { value: { id: 123, active: true }, description: "{ id: 123, active: true }" },
            { value: { foo: 'bar', baz: 'qux' }, description: "{ foo: 'bar', baz: 'qux' }" },
            { value: { first: 'John', last: 'Doe' }, description: "{ first: 'John', last: 'Doe' }" },
            { value: { count: 0 }, description: "{ count: 0 }" },
            { value: { enabled: false }, description: "{ enabled: false }" },
            { value: { message: 'hello world' }, description: "{ message: 'hello world' }" }
        ]
    },
    {
        category: 'objects',
        subcategory: 'single-property',
        level: 'simple',
        generate: (): ValueWithDescription[] => [
            { value: { a: 1 }, description: "{ a: 1 }" },
            { value: { b: 'string' }, description: "{ b: 'string' }" },
            { value: { c: true }, description: "{ c: true }" },
            { value: { d: null }, description: "{ d: null }" },
            { value: { e: undefined }, description: "{ e: undefined }" },
            { value: { f: [] }, description: "{ f: [] }" },
            { value: { g: {} }, description: "{ g: {} }" },
            { value: { h: 0 }, description: "{ h: 0 }" },
            { value: { i: '' }, description: "{ i: '' }" },
            { value: { j: NaN }, description: "{ j: NaN }" }
        ]
    },
    {
        category: 'objects',
        subcategory: 'numbers',
        level: 'simple',
        generate: (): ValueWithDescription[] => [
            { value: { zero: 0, one: 1, two: 2 }, description: "{ zero: 0, one: 1, two: 2 }" },
            { value: { positive: 42, negative: -42 }, description: "{ positive: 42, negative: -42 }" },
            { value: { pi: Math.PI, e: Math.E }, description: "{ pi: Math.PI, e: Math.E }" },
            { value: { max: Number.MAX_VALUE, min: Number.MIN_VALUE }, description: "{ max: Number.MAX_VALUE, min: Number.MIN_VALUE }" },
            { value: { infinity: Infinity, negInfinity: -Infinity }, description: "{ infinity: Infinity, negInfinity: -Infinity }" },
            { value: { decimal: 3.14, fraction: 0.5 }, description: "{ decimal: 3.14, fraction: 0.5 }" },
            { value: { scientific: 1e10, small: 1e-10 }, description: "{ scientific: 1e10, small: 1e-10 }" }
        ]
    },

    {
        category: 'objects',
        subcategory: 'special-values',
        level: 'detailed',
        generate: (): ValueWithDescription[] => [
            { value: { null: null, undefined: undefined }, description: "{ null: null, undefined: undefined }" },
            { value: { nan: NaN, infinity: Infinity }, description: "{ nan: NaN, infinity: Infinity }" },
            { value: { zero: 0, negZero: -0 }, description: "{ zero: 0, negZero: -0 }" },
            { value: { symbol: Symbol('test') }, description: "{ symbol: Symbol('test') }" },
            { value: { bigint: BigInt(123) }, description: "{ bigint: BigInt(123) }" },
            { value: { func: function() {} }, description: "{ func: function() {} }" },
            { value: { arrow: () => {} }, description: "{ arrow: () => {} }" },
            { value: { date: new Date() }, description: "{ date: new Date() }" },
            { value: { regex: /test/g }, description: "{ regex: /test/g }" },
            { value: { error: new Error('test') }, description: "{ error: new Error('test') }" },
            { value: { promise: Promise.resolve() }, description: "{ promise: Promise.resolve() }" },
            { value: { map: new Map() }, description: "{ map: new Map() }" },
            { value: { set: new Set() }, description: "{ set: new Set() }" }
        ]
    },
    {
        category: 'objects',
        subcategory: 'special-keys',
        level: 'detailed',
        generate: (): ValueWithDescription[] => [
            { value: { '': 'empty key' }, description: "{ '': 'empty key' }" },
            { value: { ' ': 'space key' }, description: "{ ' ': 'space key' }" },
            { value: { '123': 'numeric key' }, description: "{ '123': 'numeric key' }" },
            { value: { 'key with spaces': 'value' }, description: "{ 'key with spaces': 'value' }" },
            { value: { 'special!@#$%^&*()': 'special chars' }, description: "{ 'special!@#$%^&*()': 'special chars' }" },
            { value: { '\\n\\t\\r': 'escape sequences' }, description: "{ '\\\\n\\\\t\\\\r': 'escape sequences' }" },
            { value: { '🚀': 'emoji key' }, description: "{ '🚀': 'emoji key' }" },
            { value: { '中文': 'unicode key' }, description: "{ '中文': 'unicode key' }" },
            { value: { 'constructor': 'dangerous key' }, description: "{ 'constructor': 'dangerous key' }" },
            { value: { '__proto__': 'proto key' }, description: "{ '__proto__': 'proto key' }" },
            { value: { 'toString': 'method name' }, description: "{ 'toString': 'method name' }" },
            { value: { [Symbol('key')]: 'symbol key' }, description: "{ [Symbol('key')]: 'symbol key' }" }
        ]
    },
    {
        category: 'objects',
        subcategory: 'nested',
        level: 'detailed',
        generate: (): ValueWithDescription[] => [
            { value: { nested: {} }, description: "{ nested: {} }" },
            { value: { nested: { key: 'value' } }, description: "{ nested: { key: 'value' } }" },
            { value: { level1: { level2: { level3: 'deep' } } }, description: "{ level1: { level2: { level3: 'deep' } } }" },
            { value: { a: { b: { c: { d: { e: 'very deep' } } } } }, description: "{ a: { b: { c: { d: { e: 'very deep' } } } } }" },
            { value: { parent: { child1: { name: 'c1' }, child2: { name: 'c2' } } }, description: "{ parent: { child1: { name: 'c1' }, child2: { name: 'c2' } } }" },
            { value: { config: { server: { host: 'localhost', port: 3000 } } }, description: "{ config: { server: { host: 'localhost', port: 3000 } } }" },
            { value: { user: { profile: { personal: { name: 'John', age: 30 } } } }, description: "{ user: { profile: { personal: { name: 'John', age: 30 } } } }" }
        ]
    },
    {
        category: 'objects',
        subcategory: 'arrays',
        level: 'detailed',
        generate: (): ValueWithDescription[] => [
            { value: { arr: [] }, description: "{ arr: [] }" },
            { value: { arr: [1, 2, 3] }, description: "{ arr: [1, 2, 3] }" },
            { value: { numbers: [1, 2, 3], strings: ['a', 'b', 'c'] }, description: "{ numbers: [1, 2, 3], strings: ['a', 'b', 'c'] }" },
            { value: { nested: [{ id: 1 }, { id: 2 }] }, description: "{ nested: [{ id: 1 }, { id: 2 }] }" },
            { value: { matrix: [[1, 2], [3, 4]] }, description: "{ matrix: [[1, 2], [3, 4]] }" },
            { value: { mixed: [1, 'a', true, null, {}] }, description: "{ mixed: [1, 'a', true, null, {}] }" },
            { value: { sparse: [1, , , 4] }, description: "{ sparse: [1, , , 4] }" },
            { value: { items: new Array(5).fill({ active: true }) }, description: "{ items: new Array(5).fill({ active: true }) }" }
        ]
    },
    {
        category: 'objects',
        subcategory: 'functions',
        level: 'detailed',
        generate: (): ValueWithDescription[] => [
            { value: { method: function() { return 'test'; } }, description: "{ method: function() { return 'test'; } }" },
            { value: { arrow: () => 'arrow function' }, description: "{ arrow: () => 'arrow function' }" },
            { value: { async: async function() { return 'async'; } }, description: "{ async: async function() { return 'async'; } }" },
            { value: { generator: function*() { yield 1; } }, description: "{ generator: function*() { yield 1; } }" }, // @ts-ignore
            { value: { bound: (function() { return this; }).bind({ context: 'bound' }) }, description: "{ bound: (function() { return this; }).bind({ context: 'bound' }) }" },
            { value: { constructor: function CustomConstructor() {} }, description: "{ constructor: function CustomConstructor() {} }" },
            { value: { closure: (() => { const x = 42; return () => x; })() }, description: "{ closure: (() => { const x = 42; return () => x; })() }" }
        ]
    },
    {
        category: 'objects',
        subcategory: 'getters-setters',
        level: 'detailed',
        generate: (): ValueWithDescription[] => [
            { value: { get prop() { return 'getter'; } }, description: "{ get prop() { return 'getter'; } }" }, // @ts-ignore
            { value: { set prop(value) { this._prop = value; } }, description: "{ set prop(value) { this._prop = value; } }" },
            { value: (() => { const obj = {}; Object.defineProperty(obj, 'computed', { get: () => Date.now() }); return obj; })(), description: "(() => { const obj = {}; Object.defineProperty(obj, 'computed', { get: () => Date.now() }); return obj; })()" },
            { value: (() => { const obj = { _value: 0 }; Object.defineProperty(obj, 'value', { get() { return this._value; }, set(v) { this._value = v; } }); return obj; })(), description: "(() => { const obj = { _value: 0 }; Object.defineProperty(obj, 'value', { get() { return this._value; }, set(v) { this._value = v; } }); return obj; })()" }
        ]
    },
    {
        category: 'objects',
        subcategory: 'prototypes',
        level: 'detailed',
        generate: (): ValueWithDescription[] => [
            { value: Object.create(null), description: "Object.create(null)" },
            { value: Object.create(Object.prototype), description: "Object.create(Object.prototype)" },
            { value: Object.create({ inherited: 'property' }), description: "Object.create({ inherited: 'property' })" }, // @ts-ignore
            { value: (() => { function Parent() {} Parent.prototype.method = () => 'inherited'; return new Parent(); })(), description: "(() => { function Parent() {} Parent.prototype.method = () => 'inherited'; return new Parent(); })()" },
            { value: (() => { const proto = { type: 'base' }; return Object.create(proto, { own: { value: 'property', enumerable: true } }); })(), description: "(() => { const proto = { type: 'base' }; return Object.create(proto, { own: { value: 'property', enumerable: true } }); })()" }
        ]
    },
    {
        category: 'objects',
        subcategory: 'circular',
        level: 'detailed',
        generate: (): ValueWithDescription[] => [
            { value: (() => { const obj: any = { self: null }; obj.self = obj; return obj; })(), description: "(() => { const obj: any = { self: null }; obj.self = obj; return obj; })()" },
            { value: (() => { const a: any = { name: 'a' }; const b: any = { name: 'b' }; a.ref = b; b.ref = a; return a; })(), description: "(() => { const a: any = { name: 'a' }; const b: any = { name: 'b' }; a.ref = b; b.ref = a; return a; })()" },
            { value: (() => { const parent: any = { children: [] }; const child: any = { parent: parent }; parent.children.push(child); return parent; })(), description: "(() => { const parent: any = { children: [] }; const child: any = { parent: parent }; parent.children.push(child); return parent; })()" }
        ]
    },
    {
        category: 'objects',
        subcategory: 'descriptors',
        level: 'detailed',
        generate: (): ValueWithDescription[] => [
            { value: (() => { const obj = {}; Object.defineProperty(obj, 'readonly', { value: 'immutable', writable: false }); return obj; })(), description: "(() => { const obj = {}; Object.defineProperty(obj, 'readonly', { value: 'immutable', writable: false }); return obj; })()" },
            { value: (() => { const obj = {}; Object.defineProperty(obj, 'hidden', { value: 'secret', enumerable: false }); return obj; })(), description: "(() => { const obj = {}; Object.defineProperty(obj, 'hidden', { value: 'secret', enumerable: false }); return obj; })()" },
            { value: (() => { const obj = {}; Object.defineProperty(obj, 'locked', { value: 'fixed', configurable: false }); return obj; })(), description: "(() => { const obj = {}; Object.defineProperty(obj, 'locked', { value: 'fixed', configurable: false }); return obj; })()" },
            { value: Object.freeze({ frozen: 'cannot change' }), description: "Object.freeze({ frozen: 'cannot change' })" },
            { value: Object.seal({ sealed: 'no new props' }), description: "Object.seal({ sealed: 'no new props' })" },
            { value: Object.preventExtensions({ locked: 'no extensions' }), description: "Object.preventExtensions({ locked: 'no extensions' })" }
        ]
    },
    {
        category: 'objects',
        subcategory: 'built-ins',
        level: 'detailed',
        generate: (): ValueWithDescription[] => [
            { value: new Date(), description: "new Date()" },
            { value: new RegExp('test', 'gi'), description: "new RegExp('test', 'gi')" },
            { value: new Error('Custom error'), description: "new Error('Custom error')" },
            { value: new Map([['key', 'value']]), description: "new Map([['key', 'value']])" },
            { value: new Set([1, 2, 3]), description: "new Set([1, 2, 3])" },
            { value: new WeakMap(), description: "new WeakMap()" },
            { value: new WeakSet(), description: "new WeakSet()" },
            { value: new ArrayBuffer(8), description: "new ArrayBuffer(8)" },
            { value: new Int32Array([1, 2, 3, 4]), description: "new Int32Array([1, 2, 3, 4])" },
            { value: new DataView(new ArrayBuffer(16)), description: "new DataView(new ArrayBuffer(16))" },
            { value: new URL('https://example.com'), description: "new URL('https://example.com')" },
            { value: new URLSearchParams('key=value&foo=bar'), description: "new URLSearchParams('key=value&foo=bar')" }
        ]
    },
    {
        category: 'objects',
        subcategory: 'json-like',
        level: 'detailed',
        generate: (): ValueWithDescription[] => [
            { value: JSON.parse('{}'), description: "JSON.parse('{}')" },
            { value: JSON.parse('{"key":"value"}'), description: "JSON.parse('{\"key\":\"value\"}')" },
            { value: JSON.parse('{"number":123,"boolean":true,"null":null}'), description: "JSON.parse('{\"number\":123,\"boolean\":true,\"null\":null}')" },
            { value: JSON.parse('{"nested":{"deep":{"value":"test"}}}'), description: "JSON.parse('{\"nested\":{\"deep\":{\"value\":\"test\"}}}')" },
            { value: JSON.parse('{"array":[1,2,3],"object":{"key":"value"}}'), description: "JSON.parse('{\"array\":[1,2,3],\"object\":{\"key\":\"value\"}}')" },
            { value: { toJSON: () => ({ serialized: true }) }, description: "{ toJSON: () => ({ serialized: true }) }" }
        ]
    },

    {
        category: 'objects',
        subcategory: 'large-flat',
        level: 'large',
        generate: (): ValueWithDescription[] => [
            { value: Object.fromEntries(Array.from({ length: LargeSize }, (_, i) => [`key${i}`, i])), description: "Object.fromEntries(Array.from({ length: LargeSize }, (_, i) => [`key${i}`, i]))" },
            { value: Object.fromEntries(Array.from({ length: LargeSize }, (_, i) => [`prop${i}`, `value${i}`])), description: "Object.fromEntries(Array.from({ length: LargeSize }, (_, i) => [`prop${i}`, `value${i}`]))" },
            { value: Object.fromEntries(Array.from({ length: LargeSize }, (_, i) => [i.toString(), Math.random()])), description: "Object.fromEntries(Array.from({ length: LargeSize }, (_, i) => [i.toString(), Math.random()]))" },
            { value: (() => { const obj: any = {}; for (let i = 0; i < LargeSize; i++) obj[`field_${i}`] = i % 2 === 0; return obj; })(), description: "(() => { const obj: any = {}; for (let i = 0; i < LargeSize; i++) obj[`field_${i}`] = i % 2 === 0; return obj; })()" }
        ]
    },
    {
        category: 'objects',
        subcategory: 'large-nested',
        level: 'large',
        generate: (): ValueWithDescription[] => [
            { value: (() => { let obj: any = {}; let current = obj; for (let i = 0; i < 1000; i++) { current.next = {}; current = current.next; } return obj; })(), description: "(() => { let obj: any = {}; let current = obj; for (let i = 0; i < 1000; i++) { current.next = {}; current = current.next; } return obj; })()" },
            { value: Object.fromEntries(Array.from({ length: Math.floor(LargeSize / 100) }, (_, i) => [`section${i}`, Object.fromEntries(Array.from({ length: 100 }, (_, j) => [`item${j}`, `data_${i}_${j}`]))])), description: "Object.fromEntries(Array.from({ length: Math.floor(LargeSize / 100) }, (_, i) => [`section${i}`, Object.fromEntries(Array.from({ length: 100 }, (_, j) => [`item${j}`, `data_${i}_${j}`]))]))" },
            { value: (() => { const createTree = (depth: number, breadth: number): any => depth <= 0 ? { leaf: true } : Object.fromEntries(Array.from({ length: breadth }, (_, i) => [`child${i}`, createTree(depth - 1, breadth)])); return createTree(4, 4); })(), description: "(() => { const createTree = (depth: number, breadth: number): any => depth <= 0 ? { leaf: true } : Object.fromEntries(Array.from({ length: breadth }, (_, i) => [`child${i}`, createTree(depth - 1, breadth)])); return createTree(4, 4); })()" }
        ]
    },
    {
        category: 'objects',
        subcategory: 'large-arrays',
        level: 'large',
        generate: (): ValueWithDescription[] => [
            { value: { data: new Array(LargeSize).fill(0).map((_, i) => ({ id: i, value: Math.random() })) }, description: "{ data: new Array(LargeSize).fill(0).map((_, i) => ({ id: i, value: Math.random() })) }" },
            { value: { matrix: Array.from({ length: Math.sqrt(LargeSize) }, (_, i) => Array.from({ length: Math.sqrt(LargeSize) }, (_, j) => i * Math.sqrt(LargeSize) + j)) }, description: "{ matrix: Array.from({ length: Math.sqrt(LargeSize) }, (_, i) => Array.from({ length: Math.sqrt(LargeSize) }, (_, j) => i * Math.sqrt(LargeSize) + j)) }" },
            { value: { items: new Array(Math.floor(LargeSize / 10)).fill(null).map((_, i) => ({ id: i, children: new Array(10).fill(null).map((_, j) => ({ childId: j, data: `item_${i}_${j}` })) })) }, description: "{ items: new Array(Math.floor(LargeSize / 10)).fill(null).map((_, i) => ({ id: i, children: new Array(10).fill(null).map((_, j) => ({ childId: j, data: `item_${i}_${j}` })) })) }" }
        ]
    },
    {
        category: 'objects',
        subcategory: 'memory-intensive',
        level: 'large',
        generate: (): ValueWithDescription[] => [
            { value: Object.fromEntries(Array.from({ length: Math.floor(LargeSize / 100) }, (_, i) => [`data${i}`, 'x'.repeat(1000)])), description: "Object.fromEntries(Array.from({ length: Math.floor(LargeSize / 100) }, (_, i) => [`data${i}`, 'x'.repeat(1000)]))" },
            { value: { blob: new Array(LargeSize).fill('data').join(''), metadata: Object.fromEntries(Array.from({ length: 1000 }, (_, i) => [`meta${i}`, { timestamp: Date.now(), random: Math.random(), id: i }])) }, description: "{ blob: new Array(LargeSize).fill('data').join(''), metadata: Object.fromEntries(Array.from({ length: 1000 }, (_, i) => [`meta${i}`, { timestamp: Date.now(), random: Math.random(), id: i }])) }" },
            { value: (() => { const obj: any = {}; for (let i = 0; i < Math.floor(LargeSize / 1000); i++) { obj[`section_${i}`] = { data: '🚀'.repeat(1000), items: new Array(100).fill({ heavy: 'data'.repeat(100) }) }; } return obj; })(), description: "(() => { const obj: any = {}; for (let i = 0; i < Math.floor(LargeSize / 1000); i++) { obj[`section_${i}`] = { data: '🚀'.repeat(1000), items: new Array(100).fill({ heavy: 'data'.repeat(100) }) }; } return obj; })()" }
        ]
    },
    {
        category: 'objects',
        subcategory: 'recursive-structures',
        level: 'large',
        generate: (): ValueWithDescription[] => [
            { value: (() => { const createLinkedList = (length: number): any => length <= 0 ? null : { value: length, next: createLinkedList(length - 1) }; return createLinkedList(1000); })(), description: "(() => { const createLinkedList = (length: number): any => length <= 0 ? null : { value: length, next: createLinkedList(length - 1) }; return createLinkedList(1000); })()" },
            { value: (() => { const createBinaryTree = (depth: number): any => depth <= 0 ? null : { value: depth, left: createBinaryTree(depth - 1), right: createBinaryTree(depth - 1) }; return createBinaryTree(15); })(), description: "(() => { const createBinaryTree = (depth: number): any => depth <= 0 ? null : { value: depth, left: createBinaryTree(depth - 1), right: createBinaryTree(depth - 1) }; return createBinaryTree(15); })()" },
            { value: (() => { const createGraph = (nodes: number): any => { const graph: any = {}; for (let i = 0; i < nodes; i++) { graph[`node_${i}`] = { id: i, connections: Array.from({ length: Math.min(10, nodes - 1) }, (_, j) => `node_${(i + j + 1) % nodes}`) }; } return graph; }; return createGraph(500); })(), description: "(() => { const createGraph = (nodes: number): any => { const graph: any = {}; for (let i = 0; i < nodes; i++) { graph[`node_${i}`] = { id: i, connections: Array.from({ length: Math.min(10, nodes - 1) }, (_, j) => `node_${(i + j + 1) % nodes}`) }; } return graph; }; return createGraph(500); })()" }
        ]
    }
];

export default objectGenerators;
