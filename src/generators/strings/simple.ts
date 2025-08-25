import { StringInputGenerator, ValueWithDescription } from "../../types/InputGenerator";

const SimpleGenerators: StringInputGenerator[] = [
    {
        category: 'strings',
        subcategory: 'empty',
        level: 'simple',
        generate: (): ValueWithDescription[] => [
            { value: '', description: "''" },
            { value: ' ', description: "' '" },
            { value: '\t', description: "'\\t'" },
            { value: '\n', description: "'\\n'" },
            { value: '\r', description: "'\\r'" },
            { value: '\r\n', description: "'\\r\\n'" }
        ]
    },
    {
        category: 'strings',
        subcategory: 'basic',
        level: 'simple',
        generate: (): ValueWithDescription[] => [
            { value: 'a', description: "'a'" },
            { value: 'A', description: "'A'" },
            { value: 'hello', description: "'hello'" },
            { value: 'world', description: "'world'" },
            { value: 'test', description: "'test'" },
            { value: 'foo', description: "'foo'" },
            { value: 'bar', description: "'bar'" },
            { value: 'abc123', description: "'abc123'" },
            { value: '123abc', description: "'123abc'" },
            { value: 'Hello World', description: "'Hello World'" }
        ]
    },
    {
        category: 'strings',
        subcategory: 'single-chars',
        level: 'simple',
        generate: (): ValueWithDescription[] => [
            { value: 'a', description: "'a'" },
            { value: 'Z', description: "'Z'" },
            { value: '0', description: "'0'" },
            { value: '9', description: "'9'" },
            { value: '!', description: "'!'" },
            { value: '@', description: "'@'" },
            { value: '#', description: "'#'" },
            { value: '$', description: "'$'" },
            { value: '%', description: "'%'" },
            { value: '^', description: "'^'" },
            { value: '&', description: "'&'" },
            { value: '*', description: "'*'" },
            { value: '(', description: "'('" },
            { value: ')', description: "')'" },
            { value: '-', description: "'-'" },
            { value: '_', description: "'_'" },
            { value: '+', description: "'+'" },
            { value: '=', description: "'='" }
        ]
    },
    {
        category: 'strings',
        subcategory: 'common-words',
        level: 'simple',
        generate: (): ValueWithDescription[] => [
            { value: 'true', description: "'true'" },
            { value: 'false', description: "'false'" },
            { value: 'null', description: "'null'" },
            { value: 'undefined', description: "'undefined'" },
            { value: 'NaN', description: "'NaN'" },
            { value: 'Infinity', description: "'Infinity'" },
            { value: 'Object', description: "'Object'" },
            { value: 'Array', description: "'Array'" },
            { value: 'Function', description: "'Function'" }
        ]
    }
];

export default SimpleGenerators;
