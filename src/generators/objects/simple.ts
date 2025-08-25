import { ObjectInputGenerator, ValueWithDescription } from "../../types/InputGenerator";

const SimpleGenerators: ObjectInputGenerator[] = [
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
    }
];

export default SimpleGenerators;
