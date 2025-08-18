import { OtherInputGenerator, ValueWithDescription } from "../types/InputGenerator";
import { LargeSize } from "../types/constants";

const otherGenerators: OtherInputGenerator[] = [
    {
        category: 'other',
        subcategory: 'null-undefined',
        level: 'simple',
        generate: (): ValueWithDescription[] => [
            { value: null, description: "null" },
            { value: undefined, description: "undefined" },
            { value: void 0, description: "void 0" },
            { value: void(0), description: "void(0)" }
        ]
    },
    {
        category: 'other',
        subcategory: 'booleans',
        level: 'simple',
        generate: (): ValueWithDescription[] => [
            { value: true, description: "true" },
            { value: false, description: "false" },
            { value: Boolean(1), description: "Boolean(1)" },
            { value: Boolean(0), description: "Boolean(0)" },
            { value: Boolean(""), description: "Boolean(\"\")" },
            { value: Boolean("false"), description: "Boolean(\"false\")" },
            { value: !0, description: "!0" },
            { value: !1, description: "!1" },
            { value: !!1, description: "!!1" },
            { value: !!0, description: "!!0" }
        ]
    },
    {
        category: 'other',
        subcategory: 'symbols',
        level: 'detailed',
        generate: (): ValueWithDescription[] => [
            { value: Symbol(), description: "Symbol()" },
            { value: Symbol('test'), description: "Symbol('test')" },
            { value: Symbol(''), description: "Symbol('')" },
            { value: Symbol.for('global'), description: "Symbol.for('global')" },
            { value: Symbol.iterator, description: "Symbol.iterator" },
            { value: Symbol.toStringTag, description: "Symbol.toStringTag" },
            { value: Symbol.hasInstance, description: "Symbol.hasInstance" },
            { value: Symbol.species, description: "Symbol.species" }
        ]
    },
    {
        category: 'other',
        subcategory: 'bigint',
        level: 'detailed',
        generate: (): ValueWithDescription[] => [
            { value: BigInt(0), description: "BigInt(0)" },
            { value: BigInt(1), description: "BigInt(1)" },
            { value: BigInt(-1), description: "BigInt(-1)" },
            { value: BigInt(123), description: "BigInt(123)" },
            { value: BigInt(9007199254740991), description: "BigInt(9007199254740991)" },
            { value: BigInt(Number.MAX_SAFE_INTEGER), description: "BigInt(Number.MAX_SAFE_INTEGER)" }
        ]
    },

    {
        category: 'other',
        subcategory: 'functions',
        level: 'detailed',
        generate: (): ValueWithDescription[] => [
            { value: function() {}, description: "function() {}" },
            { value: function named() {}, description: "function named() {}" },
            { value: () => {}, description: "() => {}" },
            { value: () => 42, description: "() => 42" },
            { value: async function() {}, description: "async function() {}" },
            { value: async () => {}, description: "async () => {}" },
            { value: function*() {}, description: "function*() {}" },
            { value: async function*() {}, description: "async function*() {}" }, // @ts-ignore
            { value: function(a, b) { return a + b; }, description: "function(a, b) { return a + b; }" },
            { value: (x = 1, y = 2) => x + y, description: "(x = 1, y = 2) => x + y" }, // @ts-ignore
            { value: (...args) => args, description: "(...args) => args" },
            { value: function() { return this; }, description: "function() { return this; }" }
        ]
    },
    {
        category: 'other',
        subcategory: 'bound-functions',
        level: 'detailed',
        generate: (): ValueWithDescription[] => [ // @ts-ignore
            { value: (function() { return this; }).bind(null), description: "(function() { return this; }).bind(null)" }, // @ts-ignore
            { value: (function() { return this; }).bind({}), description: "(function() { return this; }).bind({})" }, // @ts-ignore
            { value: (function(a, b) { return a + b; }).bind(null, 1), description: "(function(a, b) { return a + b; }).bind(null, 1)" },
            { value: parseInt.bind(null), description: "parseInt.bind(null)" },
            { value: console.log.bind(console), description: "console.log.bind(console)" }
        ]
    },
    {
        category: 'other',
        subcategory: 'built-in-functions',
        level: 'detailed',
        generate: (): ValueWithDescription[] => [
            { value: parseInt, description: "parseInt" },
            { value: parseFloat, description: "parseFloat" },
            { value: isNaN, description: "isNaN" },
            { value: isFinite, description: "isFinite" },
            { value: encodeURI, description: "encodeURI" },
            { value: decodeURI, description: "decodeURI" },
            { value: encodeURIComponent, description: "encodeURIComponent" },
            { value: decodeURIComponent, description: "decodeURIComponent" },
            { value: eval, description: "eval" },
            { value: setTimeout, description: "setTimeout" },
            { value: clearTimeout, description: "clearTimeout" },
            { value: console.log, description: "console.log" },
            { value: console.error, description: "console.error" },
            { value: JSON.parse, description: "JSON.parse" },
            { value: JSON.stringify, description: "JSON.stringify" },
            { value: Object.keys, description: "Object.keys" },
            { value: Object.values, description: "Object.values" },
            { value: Object.entries, description: "Object.entries" },
            { value: Array.from, description: "Array.from" },
            { value: Array.isArray, description: "Array.isArray" }
        ]
    },
    {
        category: 'other',
        subcategory: 'constructors',
        level: 'detailed',
        generate: (): ValueWithDescription[] => [
            { value: Object, description: "Object" },
            { value: Array, description: "Array" },
            { value: Function, description: "Function" },
            { value: String, description: "String" },
            { value: Number, description: "Number" },
            { value: Boolean, description: "Boolean" },
            { value: Symbol, description: "Symbol" },
            { value: BigInt, description: "BigInt" },
            { value: Date, description: "Date" },
            { value: RegExp, description: "RegExp" },
            { value: Error, description: "Error" },
            { value: TypeError, description: "TypeError" },
            { value: ReferenceError, description: "ReferenceError" },
            { value: SyntaxError, description: "SyntaxError" },
            { value: Promise, description: "Promise" },
            { value: Map, description: "Map" },
            { value: Set, description: "Set" },
            { value: WeakMap, description: "WeakMap" },
            { value: WeakSet, description: "WeakSet" }
        ]
    },
    {
        category: 'other',
        subcategory: 'dates',
        level: 'detailed',
        generate: (): ValueWithDescription[] => [
            { value: new Date(), description: "new Date()" },
            { value: new Date(0), description: "new Date(0)" },
            { value: new Date('2023-01-01'), description: "new Date('2023-01-01')" },
            { value: new Date('invalid'), description: "new Date('invalid')" },
            { value: new Date(2023, 0, 1), description: "new Date(2023, 0, 1)" },
            { value: new Date(Date.now()), description: "new Date(Date.now())" },
            { value: new Date(Number.MAX_SAFE_INTEGER), description: "new Date(Number.MAX_SAFE_INTEGER)" },
            { value: new Date(-Number.MAX_SAFE_INTEGER), description: "new Date(-Number.MAX_SAFE_INTEGER)" }
        ]
    },
    {
        category: 'other',
        subcategory: 'regex',
        level: 'detailed',
        generate: (): ValueWithDescription[] => [
            { value: /test/, description: "/test/" },
            { value: /test/g, description: "/test/g" },
            { value: /test/i, description: "/test/i" },
            { value: /test/gi, description: "/test/gi" },
            { value: /.*/, description: "/.*/" },
            { value: /^$/, description: "/^$/" },
            { value: new RegExp('test'), description: "new RegExp('test')" },
            { value: new RegExp('test', 'gi'), description: "new RegExp('test', 'gi')" },
            { value: new RegExp(''), description: "new RegExp('')" },
            { value: /[a-z]+/g, description: "/[a-z]+/g" },
            { value: /\d{3}-\d{3}-\d{4}/, description: "/\\d{3}-\\d{3}-\\d{4}/" }
        ]
    },
    {
        category: 'other',
        subcategory: 'errors',
        level: 'detailed',
        generate: (): ValueWithDescription[] => [
            { value: new Error(), description: "new Error()" },
            { value: new Error('Custom message'), description: "new Error('Custom message')" },
            { value: new TypeError('Type error'), description: "new TypeError('Type error')" },
            { value: new ReferenceError('Reference error'), description: "new ReferenceError('Reference error')" },
            { value: new SyntaxError('Syntax error'), description: "new SyntaxError('Syntax error')" },
            { value: new RangeError('Range error'), description: "new RangeError('Range error')" },
            { value: new URIError('URI error'), description: "new URIError('URI error')" },
            { value: new EvalError('Eval error'), description: "new EvalError('Eval error')" }
        ]
    },
    {
        category: 'other',
        subcategory: 'promises',
        level: 'detailed',
        generate: (): ValueWithDescription[] => [
            { value: Promise.resolve(), description: "Promise.resolve()" },
            { value: Promise.resolve(42), description: "Promise.resolve(42)" },
            { value: Promise.reject(), description: "Promise.reject()" },
            { value: Promise.reject(new Error('test')), description: "Promise.reject(new Error('test'))" },
            { value: new Promise(() => {}), description: "new Promise(() => {})" },
            { value: new Promise((resolve) => resolve('test')), description: "new Promise((resolve) => resolve('test'))" },
            { value: Promise.all([]), description: "Promise.all([])" },
            { value: Promise.race([]), description: "Promise.race([])" },
            { value: Promise.allSettled([Promise.resolve(1), Promise.reject(2)]), description: "Promise.allSettled([Promise.resolve(1), Promise.reject(2)])" }
        ]
    },
    {
        category: 'other',
        subcategory: 'collections',
        level: 'detailed',
        generate: (): ValueWithDescription[] => [
            { value: new Map(), description: "new Map()" },
            { value: new Map([['key', 'value']]), description: "new Map([['key', 'value']])" },
            { value: new Set(), description: "new Set()" },
            { value: new Set([1, 2, 3]), description: "new Set([1, 2, 3])" },
            { value: new WeakMap(), description: "new WeakMap()" },
            { value: new WeakSet(), description: "new WeakSet()" },
            { value: (() => { const map = new Map(); map.set('circular', map); return map; })(), description: "(() => { const map = new Map(); map.set('circular', map); return map; })()" },
            { value: (() => { const set = new Set(); set.add(set); return set; })(), description: "(() => { const set = new Set(); set.add(set); return set; })()" }
        ]
    },
    {
        category: 'other',
        subcategory: 'typed-arrays',
        level: 'detailed',
        generate: (): ValueWithDescription[] => [
            { value: new ArrayBuffer(8), description: "new ArrayBuffer(8)" },
            { value: new ArrayBuffer(0), description: "new ArrayBuffer(0)" },
            { value: new Int8Array([1, 2, 3]), description: "new Int8Array([1, 2, 3])" },
            { value: new Uint8Array([255, 0, 128]), description: "new Uint8Array([255, 0, 128])" },
            { value: new Uint8ClampedArray([300, -10, 128]), description: "new Uint8ClampedArray([300, -10, 128])" },
            { value: new Int16Array([32767, -32768]), description: "new Int16Array([32767, -32768])" },
            { value: new Uint16Array([65535, 0]), description: "new Uint16Array([65535, 0])" },
            { value: new Int32Array([2147483647, -2147483648]), description: "new Int32Array([2147483647, -2147483648])" },
            { value: new Uint32Array([4294967295, 0]), description: "new Uint32Array([4294967295, 0])" },
            { value: new Float32Array([3.14, -3.14, Infinity]), description: "new Float32Array([3.14, -3.14, Infinity])" },
            { value: new Float64Array([Math.PI, Math.E, NaN]), description: "new Float64Array([Math.PI, Math.E, NaN])" },
            { value: new BigInt64Array([BigInt(1), BigInt(-1)]), description: "new BigInt64Array([BigInt(1), BigInt(-1)])" },
            { value: new BigUint64Array([BigInt(18446744073709551615), BigInt(0)]), description: "new BigUint64Array([BigInt(18446744073709551615), BigInt(0)])" },
            { value: new DataView(new ArrayBuffer(16)), description: "new DataView(new ArrayBuffer(16))" }
        ]
    },
    {
        category: 'other',
        subcategory: 'urls',
        level: 'detailed',
        generate: (): ValueWithDescription[] => [
            { value: new URL('https://example.com'), description: "new URL('https://example.com')" },
            { value: new URL('https://example.com/path?query=value#fragment'), description: "new URL('https://example.com/path?query=value#fragment')" },
            { value: new URL('/relative', 'https://example.com'), description: "new URL('/relative', 'https://example.com')" },
            { value: new URLSearchParams(), description: "new URLSearchParams()" },
            { value: new URLSearchParams('key=value&foo=bar'), description: "new URLSearchParams('key=value&foo=bar')" },
            { value: new URLSearchParams([['key', 'value'], ['foo', 'bar']]), description: "new URLSearchParams([['key', 'value'], ['foo', 'bar']])" }
        ]
    },
    {
        category: 'other',
        subcategory: 'generators',
        level: 'detailed',
        generate: (): ValueWithDescription[] => [
            { value: (function*() {})(), description: "(function*() {})()" },
            { value: (function*() { yield 1; yield 2; yield 3; })(), description: "(function*() { yield 1; yield 2; yield 3; })()" },
            { value: (function*() { yield* [1, 2, 3]; })(), description: "(function*() { yield* [1, 2, 3]; })()" },
            { value: (async function*() { yield 1; })(), description: "(async function*() { yield 1; })()" }
        ]
    },
    {
        category: 'other',
        subcategory: 'proxy',
        level: 'detailed',
        generate: (): ValueWithDescription[] => [
            { value: new Proxy({}, {}), description: "new Proxy({}, {})" },
            { value: new Proxy({}, { get: () => 'intercepted' }), description: "new Proxy({}, { get: () => 'intercepted' })" },
            { value: new Proxy([], { set: () => false }), description: "new Proxy([], { set: () => false })" },
            { value: new Proxy(function() {}, {}), description: "new Proxy(function() {}, {})" },
            { value: new Proxy({}, { has: () => true }), description: "new Proxy({}, { has: () => true })" }
        ]
    },
    {
        category: 'other',
        subcategory: 'special-numbers',
        level: 'detailed',
        generate: (): ValueWithDescription[] => [
            { value: NaN, description: "NaN" },
            { value: Infinity, description: "Infinity" },
            { value: -Infinity, description: "-Infinity" },
            { value: Number.POSITIVE_INFINITY, description: "Number.POSITIVE_INFINITY" },
            { value: Number.NEGATIVE_INFINITY, description: "Number.NEGATIVE_INFINITY" },
            { value: Number.NaN, description: "Number.NaN" },
            { value: Number.MAX_VALUE, description: "Number.MAX_VALUE" },
            { value: Number.MIN_VALUE, description: "Number.MIN_VALUE" },
            { value: Number.MAX_SAFE_INTEGER, description: "Number.MAX_SAFE_INTEGER" },
            { value: Number.MIN_SAFE_INTEGER, description: "Number.MIN_SAFE_INTEGER" },
            { value: Number.EPSILON, description: "Number.EPSILON" },
            { value: 0, description: "0" },
            { value: -0, description: "-0" },
            { value: 1/0, description: "1/0" },
            { value: -1/0, description: "-1/0" },
            { value: 0/0, description: "0/0" }
        ]
    },
    {
        category: 'other',
        subcategory: 'global-objects',
        level: 'detailed',
        generate: (): ValueWithDescription[] => [
            { value: globalThis, description: "globalThis" },
            { value: console, description: "console" },
            { value: Math, description: "Math" },
            { value: JSON, description: "JSON" },
            { value: Reflect, description: "Reflect" },
            { value: Proxy, description: "Proxy" },
            { value: Intl, description: "Intl" },
            { value: typeof window !== 'undefined' ? window : globalThis, description: "typeof window !== 'undefined' ? window : globalThis" }
        ]
    },

    {
        category: 'other',
        subcategory: 'large-symbols',
        level: 'large',
        generate: (): ValueWithDescription[] => [
            { value: Array.from({ length: Math.floor(LargeSize) }, (_, i) => Symbol(`symbol_${i}`)), description: "Array.from({ length: Math.floor(LargeSize) }, (_, i) => Symbol(`symbol_${i}`))" },
            { value: Array.from({ length: Math.floor(LargeSize) }, (_, i) => Symbol.for(`global_${i}`)), description: "Array.from({ length: Math.floor(LargeSize) }, (_, i) => Symbol.for(`global_${i}`))" }
        ]
    },
    {
        category: 'other',
        subcategory: 'large-bigints',
        level: 'large',
        generate: (): ValueWithDescription[] => [
            { value: BigInt('9'.repeat(LargeSize)), description: "BigInt('9'.repeat(LargeSize))" },
            { value: BigInt('1' + '0'.repeat(LargeSize)), description: "BigInt('1' + '0'.repeat(LargeSize))" },
            { value: Array.from({ length: Math.floor(LargeSize) }, (_, i) => BigInt(i * i)), description: "Array.from({ length: Math.floor(LargeSize) }, (_, i) => BigInt(i * i))" }
        ]
    },
    {
        category: 'other',
        subcategory: 'large-functions',
        level: 'large',
        generate: (): ValueWithDescription[] => [
            { value: Array.from({ length: Math.floor(LargeSize) }, (_, i) => () => i), description: "Array.from({ length: Math.floor(LargeSize) }, (_, i) => () => i)" },
            { value: Array.from({ length: Math.floor(LargeSize) }, (_, i) => function() { return i; }), description: "Array.from({ length: Math.floor(LargeSize) }, (_, i) => function() { return i; })" },
            { value: (() => { const funcs = []; for (let i = 0; i < Math.floor(LargeSize); i++) { funcs.push(new Function('return ' + i)); } return funcs; })(), description: "(() => { const funcs = []; for (let i = 0; i < Math.floor(LargeSize); i++) { funcs.push(new Function('return ' + i)); } return funcs; })()" }
        ]
    },
    {
        category: 'other',
        subcategory: 'large-collections',
        level: 'large',
        generate: (): ValueWithDescription[] => [
            { value: (() => { const map = new Map(); for (let i = 0; i < LargeSize; i++) map.set(`key_${i}`, i); return map; })(), description: "(() => { const map = new Map(); for (let i = 0; i < LargeSize; i++) map.set(`key_${i}`, i); return map; })()" },
            { value: (() => { const set = new Set(); for (let i = 0; i < LargeSize; i++) set.add(Symbol(`item_${i}`)); return set; })(), description: "(() => { const set = new Set(); for (let i = 0; i < LargeSize; i++) set.add(Symbol(`item_${i}`)); return set; })()" },
            { value: new Map(Array.from({ length: LargeSize }, (_, i) => [Symbol(`key_${i}`), { id: i, data: `item_${i}` }])), description: "new Map(Array.from({ length: LargeSize }, (_, i) => [Symbol(`key_${i}`), { id: i, data: `item_${i}` }]))" },
            { value: new Set(Array.from({ length: LargeSize }, (_, i) => new Date(i * 1000))), description: "new Set(Array.from({ length: LargeSize }, (_, i) => new Date(i * 1000)))" }
        ]
    },
    {
        category: 'other',
        subcategory: 'large-typed-arrays',
        level: 'large',
        generate: (): ValueWithDescription[] => [
            { value: new ArrayBuffer(LargeSize), description: "new ArrayBuffer(LargeSize)" },
            { value: new Uint8Array(LargeSize), description: "new Uint8Array(LargeSize)" },
            { value: new Int32Array(Array.from({ length: Math.floor(LargeSize / 4) }, (_, i) => i)), description: "new Int32Array(Array.from({ length: Math.floor(LargeSize / 4) }, (_, i) => i))" },
            { value: new Float64Array(Array.from({ length: Math.floor(LargeSize / 8) }, (_, i) => Math.random())), description: "new Float64Array(Array.from({ length: Math.floor(LargeSize / 8) }, (_, i) => Math.random()))" },
            { value: new BigUint64Array(Array.from({ length: Math.floor(LargeSize / 8) }, (_, i) => BigInt(i))), description: "new BigUint64Array(Array.from({ length: Math.floor(LargeSize / 8) }, (_, i) => BigInt(i)))" }
        ]
    },
    {
        category: 'other',
        subcategory: 'complex-generators',
        level: 'large',
        generate: (): ValueWithDescription[] => [
            { value: (function*() { for (let i = 0; i < LargeSize; i++) yield i; })(), description: "(function*() { for (let i = 0; i < LargeSize; i++) yield i; })()" },
            { value: (function*() { let i = 0; while (i < LargeSize) yield `item_${i++}`; })(), description: "(function*() { let i = 0; while (i < LargeSize) yield `item_${i++}`; })()" },
            { value: (async function*() { for (let i = 0; i < Math.min(1000, LargeSize); i++) yield Promise.resolve(i); })(), description: "(async function*() { for (let i = 0; i < Math.min(1000, LargeSize); i++) yield Promise.resolve(i); })()" }
        ]
    }
];

export default otherGenerators;
