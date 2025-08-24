import { OtherInputGenerator, ValueWithDescription } from "../../types/InputGenerator.ts";

const SimpleGenerators: OtherInputGenerator[] = [
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
    }
];

export default SimpleGenerators;
