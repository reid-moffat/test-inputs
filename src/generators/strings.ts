import { InputGenerator, LargeSize } from "../core/types";

const stringGenerators: InputGenerator[] = [
    {
        category: 'strings',
        subcategory: 'empty',
        level: 'simple',
        values: () => ['', ' ', '\t', '\n', '\r', '\r\n']
    },
    {
        category: 'strings',
        subcategory: 'basic',
        level: 'simple',
        values: () => ['a', 'A', 'hello', 'world', 'test', 'foo', 'bar', 'abc123', '123abc', 'Hello World']
    },
    {
        category: 'strings',
        subcategory: 'single-chars',
        level: 'simple',
        values: () => ['a', 'Z', '0', '9', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=']
    },
    {
        category: 'strings',
        subcategory: 'common-words',
        level: 'simple',
        values: () => ['true', 'false', 'null', 'undefined', 'NaN', 'Infinity', 'Object', 'Array', 'Function']
    },

    {
        category: 'strings',
        subcategory: 'unicode',
        level: 'detailed',
        values: () => [
            '🚀', '🎉', '💯', '🔥', '✨', // Emojis
            '中文', '日本語', '한국어', 'العربية', 'עברית', 'русский', // Languages
            '🏳️‍🌈', '🏳️‍⚧️', '👨‍👩‍👧‍👦', // Complex emojis
            'café', 'naïve', 'résumé', 'piñata', // Accented characters
            'Ω', 'π', 'Σ', 'Δ', 'λ', // Greek letters
            '™', '©', '®', '§', '¶', '†', '‡', // Symbols
            '\u0000', '\u0001', '\u001f', '\u007f', // Control characters
            '\u00a0', '\u2000', '\u2001', '\u2028', '\u2029', // Unicode whitespace
            '\ufeff', '\uffff', // BOM and special Unicode
        ]
    },
    {
        category: 'strings',
        subcategory: 'whitespace',
        level: 'detailed',
        values: () => [
            ' ', '  ', '   ', '\t', '\t\t', '\n', '\n\n', '\r', '\r\r', '\r\n',
            ' \t\n\r ', '\u00a0', '\u2000', '\u2001', '\u2002', '\u2003', '\u2004',
            '\u2005', '\u2006', '\u2007', '\u2008', '\u2009', '\u200a', '\u200b',
            '\u3000', // Various Unicode whitespace characters
        ]
    },
    {
        category: 'strings',
        subcategory: 'special-chars',
        level: 'detailed',
        values: () => [
            '\\', '/', '|', '<', '>', '"', "'", '`', '~', '!', '@', '#', '$', '%',
            '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', ';',
            ':', ',', '.', '?', '¿', '¡', '§', '°', '±', '×', '÷', '≠', '≤', '≥'
        ]
    },
    {
        category: 'strings',
        subcategory: 'escape-sequences',
        level: 'detailed',
        values: () => [
            '\\n', '\\t', '\\r', '\\\\', '\\"', "\\'", '\\0', '\\x00', '\\u0000',
            '\b', '\f', '\v', String.fromCharCode(0), String.fromCharCode(7),
            String.fromCharCode(27), // ESC character
        ]
    },
    {
        category: 'strings',
        subcategory: 'json',
        level: 'detailed',
        values: () => [
            '{}', '[]', 'null', 'true', 'false', '"string"', '123', '-123',
            '{"key":"value"}', '[1,2,3]', '{"nested":{"key":"value"}}',
            '"\\n\\t\\\\"', // Escaped JSON string
            '{"key":null}', '{"key":true}', '{"key":false}',
        ]
    },
    {
        category: 'strings',
        subcategory: 'html',
        level: 'detailed',
        values: () => [
            '<div>', '</div>', '<script>', '</script>', '<img>', '<br/>',
            '&lt;', '&gt;', '&amp;', '&quot;', '&#39;', '&nbsp;',
            '<script>alert("xss")</script>',
            '<!-- comment -->',
            '<img src="x" onerror="alert(1)">',
            '&lt;script&gt;alert(&#39;xss&#39;)&lt;/script&gt;'
        ]
    },
    {
        category: 'strings',
        subcategory: 'paths',
        level: 'detailed',
        values: () => [
            '/', '\\', '.', '..', '../', './', '../../', '~/',
            '/etc/passwd', 'C:\\Windows\\System32', '/var/log/',
            'file:///etc/passwd', 'http://example.com',
            'https://example.com/path?query=value#fragment',
            '\\\\server\\share', 'ftp://user:pass@host.com'
        ]
    },
    {
        category: 'strings',
        subcategory: 'sql',
        level: 'detailed',
        values: () => [
            "'", '"', "'; DROP TABLE users; --", '" OR 1=1 --',
            "' UNION SELECT * FROM users --", "1' OR '1'='1",
            "admin'--", "' OR 1=1#", "' WAITFOR DELAY '00:00:05' --",
            '; SELECT * FROM information_schema.tables --'
        ]
    },
    {
        category: 'strings',
        subcategory: 'regex',
        level: 'detailed',
        values: () => [
            '.', '*', '+', '?', '^', '$', '|', '(', ')', '[', ']', '{', '}',
            '\\', '\\d', '\\w', '\\s', '.*', '.+', '^.*$', '(.*)',
            '[a-z]', '[0-9]', '\\b', '\\B', '(?:)', '(?=)', '(?!)'
        ]
    },
    {
        category: 'strings',
        subcategory: 'encoding',
        level: 'detailed',
        values: () => [
            '%20', '%3C', '%3E', '%22', '%27', // URL encoded
            '&lt;', '&gt;', '&amp;', '&quot;', // HTML entities
            '\\x20', '\\x3c', '\\x3e', // Hex escaped
            '\\u0020', '\\u003c', '\\u003e', // Unicode escaped
            atob('aGVsbG8='), // Base64 decoded "hello"
            btoa('hello'), // Base64 encoded
        ]
    },
    {
        category: 'strings',
        subcategory: 'formatting',
        level: 'detailed',
        values: () => [
            '%s', '%d', '%f', '{}', '{0}', '{1}', '${variable}',
            '{{double}}', '%1$s', '%(name)s', '\\n\\t\\r',
            'line1\nline2', 'tab\there', 'quote"here', "quote'here"
        ]
    },
    {
        category: 'strings',
        subcategory: 'numbers-as-strings',
        level: 'detailed',
        values: () => [
            '0', '1', '-1', '123', '-123', '0.1', '-0.1', '3.14', '-3.14',
            'Infinity', '-Infinity', 'NaN', '1e10', '-1e10', '1.23e-4',
            '0x1F', '0o777', '0b1010', // Different number formats
            '1,000', '1.000,50', '$123.45', '50%', '1/2', '2²'
        ]
    },
    {
        category: 'strings',
        subcategory: 'booleans-as-strings',
        level: 'detailed',
        values: () => [
            'true', 'false', 'True', 'False', 'TRUE', 'FALSE',
            'yes', 'no', 'Yes', 'No', 'YES', 'NO',
            'on', 'off', 'On', 'Off', 'ON', 'OFF',
            '1', '0', 'y', 'n', 'Y', 'N'
        ]
    },

    {
        category: 'strings',
        subcategory: 'large',
        level: 'large',
        values: () => [
            ' '.repeat(LargeSize),
            'a'.repeat(LargeSize),
            'x'.repeat(LargeSize),
            '0'.repeat(LargeSize),
            'Hello World! '.repeat(LargeSize / 13),
            '🚀'.repeat(LargeSize / 4), // Unicode characters take more bytes
        ]
    },
    {
        category: 'strings',
        subcategory: 'repeated',
        level: 'large',
        values: () => [
            'a'.repeat(LargeSize),
            'ab'.repeat(LargeSize / 2),
            'abc'.repeat(LargeSize / 3),
            '123'.repeat(LargeSize / 3),
            '<tag>'.repeat(LargeSize / 5),
            '..\\'.repeat(LargeSize / 3),
            '/**/'.repeat(LargeSize / 4),
            'null,'.repeat(LargeSize / 4),
        ]
    },
    {
        category: 'strings',
        subcategory: 'memory-intensive',
        level: 'large',
        values: () => [
            JSON.stringify(Array(LargeSize).fill('data')),
            Array(LargeSize).fill('item').join(','),
            'A'.repeat(Math.floor(LargeSize / 2)) + 'B'.repeat(Math.floor(LargeSize / 2)), // Large concatenated string
            '🎉'.repeat(LargeSize), // Unicode heavy
            '<div>'.repeat(Math.floor(LargeSize / 2)) + 'content' + '</div>'.repeat(Math.floor(LargeSize / 2)),
        ]
    }
];

export default stringGenerators;
