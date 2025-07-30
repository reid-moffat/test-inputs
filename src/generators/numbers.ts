import { NumberInputGenerator, ValueWithDescription } from "../types/InputGenerator";

const numberGenerators: NumberInputGenerator[] = [
    {
        category: 'numbers',
        subcategory: 'integers',
        level: 'simple',
        values: () => [
            { value: 0, description: '0' },
            { value: 1, description: '1' },
            { value: -1, description: '-1' },
            { value: 2, description: '2' },
            { value: -2, description: '-2' },
            { value: 10, description: '10' },
            { value: -10, description: '-10' },
            { value: 42, description: '42' },
            { value: 100, description: '100' },
            { value: -100, description: '-100' }
        ]
    },
    {
        category: 'numbers',
        subcategory: 'decimals',
        level: 'simple',
        values: () => [
            { value: 0.1, description: '0.1' },
            { value: -0.1, description: '-0.1' },
            { value: 0.5, description: '0.5' },
            { value: -0.5, description: '-0.5' },
            { value: 1.5, description: '1.5' },
            { value: -1.5, description: '-1.5' },
            { value: 3.14, description: '3.14' },
            { value: -3.14, description: '-3.14' }
        ]
    },

    {
        category: 'numbers',
        subcategory: 'boundaries',
        level: 'detailed',
        values: () => [
            { value: Number.MAX_SAFE_INTEGER, description: 'Number.MAX_SAFE_INTEGER' },
            { value: Number.MIN_SAFE_INTEGER, description: 'Number.MIN_SAFE_INTEGER' },
            { value: Number.MAX_VALUE, description: 'Number.MAX_VALUE' },
            { value: Number.MIN_VALUE, description: 'Number.MIN_VALUE' },
            { value: Number.EPSILON, description: 'Number.EPSILON' },
            { value: Number.MAX_SAFE_INTEGER + 1, description: 'Number.MAX_SAFE_INTEGER + 1' },
            { value: Number.MIN_SAFE_INTEGER - 1, description: 'Number.MIN_SAFE_INTEGER - 1' }
        ]
    },
    {
        category: 'numbers',
        subcategory: 'max-min',
        level: 'detailed',
        values: () => [
            { value: Infinity, description: 'Infinity' },
            { value: -Infinity, description: '-Infinity' },
            { value: NaN, description: 'NaN' },
            { value: Number.POSITIVE_INFINITY, description: 'Number.POSITIVE_INFINITY' },
            { value: Number.NEGATIVE_INFINITY, description: 'Number.NEGATIVE_INFINITY' },
            { value: Number.NaN, description: 'Number.NaN' }
        ]
    },
    {
        category: 'numbers',
        subcategory: 'precision',
        level: 'detailed',
        values: () => [
            { value: 0.1 + 0.2, description: '0.1 + 0.2' },
            { value: 0.30000000000000004, description: '0.30000000000000004' },
            { value: 1e-10, description: '1e-10' },
            { value: 1e-16, description: '1e-16' },
            { value: 1e-324, description: '1e-324' },
            { value: -1e-324, description: '-1e-324' },
            { value: 9007199254740993, description: '9007199254740993' },
            { value: 0.9999999999999999, description: '0.9999999999999999' },
            { value: 1.0000000000000002, description: '1.0000000000000002' }
        ]
    },
    {
        category: 'numbers',
        subcategory: 'scientific',
        level: 'detailed',
        values: () => [
            { value: 1e0, description: '1e0' },
            { value: 1e1, description: '1e1' },
            { value: 1e2, description: '1e2' },
            { value: 1e10, description: '1e10' },
            { value: 1e100, description: '1e100' },
            { value: 1e308, description: '1e308' },
            { value: -1e0, description: '-1e0' },
            { value: -1e1, description: '-1e1' },
            { value: -1e2, description: '-1e2' },
            { value: -1e10, description: '-1e10' },
            { value: -1e100, description: '-1e100' },
            { value: -1e308, description: '-1e308' },
            { value: 1.23e-4, description: '1.23e-4' },
            { value: 5.67e+8, description: '5.67e+8' },
            { value: 9.99e-100, description: '9.99e-100' },
            { value: 1.01e+50, description: '1.01e+50' }
        ]
    },
    {
        category: 'numbers',
        subcategory: 'zeros',
        level: 'detailed',
        values: () => [
            { value: 0, description: '0' },
            { value: -0, description: '-0' },
            { value: +0, description: '+0' },
            { value: 0.0, description: '0.0' },
            { value: -0.0, description: '-0.0' },
            { value: +0.0, description: '+0.0' },
            { value: 1e-400, description: '1e-400' },
            { value: -1e-400, description: '-1e-400' }
        ]
    },
    {
        category: 'numbers',
        subcategory: 'mathematical',
        level: 'detailed',
        values: () => [
            { value: Math.PI, description: 'Math.PI' },
            { value: Math.E, description: 'Math.E' },
            { value: Math.LN2, description: 'Math.LN2' },
            { value: Math.LN10, description: 'Math.LN10' },
            { value: Math.LOG2E, description: 'Math.LOG2E' },
            { value: Math.LOG10E, description: 'Math.LOG10E' },
            { value: Math.SQRT1_2, description: 'Math.SQRT1_2' },
            { value: Math.SQRT2, description: 'Math.SQRT2' },
            { value: -Math.PI, description: '-Math.PI' },
            { value: -Math.E, description: '-Math.E' }
        ]
    },
    {
        category: 'numbers',
        subcategory: 'edge-operations',
        level: 'detailed',
        values: () => [
            { value: 1 / 0, description: '1 / 0' },
            { value: -1 / 0, description: '-1 / 0' },
            { value: 0 / 0, description: '0 / 0' },
            { value: Math.sqrt(-1), description: 'Math.sqrt(-1)' },
            { value: Math.log(-1), description: 'Math.log(-1)' },
            { value: Math.pow(2, 1024), description: 'Math.pow(2, 1024)' },
            { value: Math.pow(2, -1024), description: 'Math.pow(2, -1024)' },
            { value: parseInt(''), description: "parseInt('')" },
            { value: parseFloat(''), description: "parseFloat('')" },
            { value: Number(''), description: "Number('')" },
            { value: Number('abc'), description: "Number('abc')" }
        ]
    },

    {
        category: 'numbers',
        subcategory: 'large',
        level: 'large',
        values: () => [
            { value: Number.MAX_SAFE_INTEGER, description: 'Number.MAX_SAFE_INTEGER' },
            { value: Number.MAX_VALUE, description: 'Number.MAX_VALUE' },
            { value: 1e100, description: '1e100' },
            { value: 1e200, description: '1e200' },
            { value: 1e300, description: '1e300' },
            { value: Math.PI * 1e15, description: 'Math.PI * 1e15' },
            { value: Math.E * 1e20, description: 'Math.E * 1e20' }
        ]
    }
];

export default numberGenerators;
