import { InputGenerator } from "../core/types";

const numberGenerators: InputGenerator[] = [
    {
        category: 'numbers',
        subcategory: 'integers',
        level: 'simple',
        generate: () => [0, 1, -1, 2, -2, 10, -10, 42, 100, -100]
    },
    {
        category: 'numbers',
        subcategory: 'decimals',
        level: 'simple',
        generate: () => [0.1, -0.1, 0.5, -0.5, 1.5, -1.5, 3.14, -3.14]
    },

    {
        category: 'numbers',
        subcategory: 'boundaries',
        level: 'detailed',
        generate: () => [
            Number.MAX_SAFE_INTEGER,
            Number.MIN_SAFE_INTEGER,
            Number.MAX_VALUE,
            Number.MIN_VALUE,
            Number.EPSILON,
            Number.MAX_SAFE_INTEGER + 1,
            Number.MIN_SAFE_INTEGER - 1
        ]
    },
    {
        category: 'numbers',
        subcategory: 'max-min',
        level: 'detailed',
        generate: () => [
            Infinity,
            -Infinity,
            NaN,
            Number.POSITIVE_INFINITY,
            Number.NEGATIVE_INFINITY,
            Number.NaN
        ]
    },
    {
        category: 'numbers',
        subcategory: 'precision',
        level: 'detailed',
        generate: () => [
            0.1 + 0.2, // Classic floating point precision issue
            0.30000000000000004,
            1e-10,
            1e-16,
            1e-324, // Smallest positive number
            -1e-324,
            9007199254740993, // Number.MAX_SAFE_INTEGER + 2
            0.9999999999999999,
            1.0000000000000002
        ]
    },
    {
        category: 'numbers',
        subcategory: 'scientific',
        level: 'detailed',
        generate: () => [
            1e0, 1e1, 1e2, 1e10, 1e100, 1e308,
            -1e0, -1e1, -1e2, -1e10, -1e100, -1e308,
            1.23e-4, 5.67e+8, 9.99e-100, 1.01e+50
        ]
    },
    {
        category: 'numbers',
        subcategory: 'zeros',
        level: 'detailed',
        generate: () => [
            0,
            -0,
            +0,
            0.0,
            -0.0,
            +0.0,
            1e-400, // Underflows to 0
            -1e-400
        ]
    },
    {
        category: 'numbers',
        subcategory: 'mathematical',
        level: 'detailed',
        generate: () => [
            Math.PI,
            Math.E,
            Math.LN2,
            Math.LN10,
            Math.LOG2E,
            Math.LOG10E,
            Math.SQRT1_2,
            Math.SQRT2,
            -Math.PI,
            -Math.E
        ]
    },
    {
        category: 'numbers',
        subcategory: 'edge-operations',
        level: 'detailed',
        generate: () => [
            1 / 0,        // Infinity
            -1 / 0,       // -Infinity
            0 / 0,        // NaN
            Math.sqrt(-1), // NaN
            Math.log(-1),  // NaN
            Math.pow(2, 1024), // Infinity (overflow)
            Math.pow(2, -1024), // 0 (underflow)
            parseInt(''),    // NaN
            parseFloat(''), // NaN
            Number(''),     // 0
            Number('abc'),  // NaN
        ]
    },

    {
        category: 'numbers',
        subcategory: 'large',
        level: 'large',
        generate: () => [
            // Large integers that might cause performance issues
            Number.MAX_SAFE_INTEGER,
            Number.MAX_VALUE,
            1e100,
            1e200,
            1e300,
            // Very long decimal representations
            Math.PI * 1e15,
            Math.E * 1e20,
        ]
    }
];

export default numberGenerators;
