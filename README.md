# test-inputs

[![npm](https://img.shields.io/npm/v/test-inputs)](https://www.npmjs.com/package/test-inputs)
[![npm](https://img.shields.io/npm/dt/test-inputs)](https://www.npmjs.com/package/test-inputs)
[![npm](https://img.shields.io/npm/l/test-inputs)](https://www.npmjs.com/package/test-inputs)
[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-support-yellow?logo=buy-me-a-coffee)](https://buymeacoffee.com/reidmoffat)

Easily generate comprehensive test input values to ensure all edge cases are accounted for

### ⭐ Features:
* Includes over **900** test input values
* Allows filtering by data type, complexity, and specific use case
* Provides simple values, specific use cases, and large structures
* Covers *all* data types, including obscure ones like Symbols and namespaces
* Optionally includes comprehensive metadata for each input

## 📦 Installation

```bash
npm install test-inputs

# or
yarn add install test-inputs

# or
pnpm install test-inputs
```

## 🚀 Quick start

```typescript
import TestInputs from "test-inputs";

// Get all simple test inputs with metadata
const inputs = TestInputs.getInputs();
console.log(inputs[0]);
// {
//     value: 0,
//     description: '0',
//     category: 'numbers',
//     subcategory: 'integers',
//     level: 'simple'
// }

// Get just the raw values without metadata
const rawInputs = TestInputs.getRawInputs();
console.log(rawInputs); // [0, 1, -1, 2, -2, 10, ...]


// Each method also has two optional parameters: filters and size

// Filters can include or exclude specific types of data
const filters = { include: { levels: ['simple', 'detailed', 'large']}, exclude: { categories: "strings" } };

// Controls the size of inputs in the 'large' level (default 10,000)
const largeSize = 20_000;

// All inputs except strings, with large inputs sized 20,000
const inputsFiltered = TestInputs.getInputs(filters, largeSize);
```

> ⚠️ Very large size parameters (>100,000) can take a long time to generate. Inputs roughly, but not always exactly, 
> follow this parameter

## 🏷️ Data Structure

### Complexity Levels

- `simple` - Basic, commonly used test values (default). E.g. `1, true, { a: 1 }, null`
- `detailed` - More comprehensive cases touching specific edge cases. E.g. `Number.MAX_VALUE, { '🚀': 'emoji key' }, [, , ,]`
- `large` - Data focusing on large size (). E.g. `new Array(LargeSize).fill(0), new Uint8Array(LargeSize)`

### Available Categories

Categories include:

- `numbers` - Integers, floats, edge cases like NaN, Infinity
- `strings` - Text data including ASCII, Unicode, empty strings, etc.
- `objects` - Various data inside objects
- `arrays` - Different array types and configurations with various data
- `other` - Miscellaneous, such as data structures and unconventional implementations

## Types

Input items with metadata (`TestInputs.getInputs()`) return the following structure:

```typescript
interface InputItem {
    value: any;                 // The actual test value
    description: string;        // Human-readable description
    category: Category;         // Top-level category
    subcategory: Subcategory;   // Specific subcategory
    level: Level;               // Complexity level
}
```

The methods `TestInputs.getInputs()` and `TestInputs.getRawInputs()` can be filtered with the following parameter:

```typescript
type FilterOptions = {
    include?: {
        levels?: Level | Level[];
        categories?: Category | Category[];
        subcategories?: Subcategory | Subcategory[];
    };
    exclude?: {
        levels?: Level | Level[];
        categories?: Category | Category[];
        subcategories?: Subcategory | Subcategory[];
    };
}
```

Categories and levels can be used to filter inputs:

```typescript
type Level = "simple" | "detailed" | "large";

type Category = "numbers" | "strings" | "arrays" | "objects" | "other";
```

...as with the subcategories:

```typescript
type NumberSubcategory =
    "integers" | "decimals" | "boundaries" | "max-min" | "precision" | "scientific" |
    "zeros" | "mathematical" | "edge-operations" | "large";
type StringSubcategory =
    "empty" | "basic" | "single-chars" | "common-words" | "unicode" | "whitespace" |
    "special-chars" | "escape-sequences" | "json" | "html" | "paths" | "sql" |
    "regex" | "encoding" | "formatting" | "numbers-as-strings" | "booleans-as-strings" |
    "large" | "repeated" | "memory-intensive";
type ArraySubcategory =
    "empty" | "basic" | "single-element" | "numbers" | "special-values" | "nested" |
    "objects" | "mixed-types" | "sparse" | "generated" | "strings" | "edge-cases" |
    "large-simple" | "large-nested" | "large-sparse" | "memory-intensive" | "deeply-nested";
type ObjectSubcategory =
    "empty" | "basic" | "single-property" | "numbers" | "special-values" | "special-keys" |
    "nested" | "arrays" | "functions" | "getters-setters" | "prototypes" | "circular" |
    "descriptors" | "built-ins" | "json-like" | "large-flat" | "large-nested" |
    "large-arrays" | "memory-intensive" | "recursive-structures";
type OtherSubcategory =
    "null-undefined" | "booleans" | "symbols" | "bigint" | "functions" | "bound-functions" |
    "built-in-functions" | "constructors" | "dates" | "regex" | "errors" | "promises" |
    "collections" | "typed-arrays" | "urls" | "generators" | "proxy" | "special-numbers" |
    "global-objects" | "large-symbols" | "large-bigints" | "large-functions" | "large-collections" |
    "large-typed-arrays" | "complex-generators";

type Subcategory = NumberSubcategory | StringSubcategory | ArraySubcategory | ObjectSubcategory | OtherSubcategory;
```

*Note: For all the types above, there is also a `readonly` array export with the values you can use as a variable,
e.g. `LevelValues` for `Level`*

## 💼 Real-world usage examples

### Testing a validation function

```typescript
import TestInputs from "test-inputs";
import { expect } from "chai";

function validateEmail(email: any): boolean {
    if (typeof email !== 'string') return false;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Test with comprehensive inputs to find edge cases
describe('validateEmail', () => {
    it('should handle all input types correctly', () => {
        const testInputs = TestInputs.getRawInputs();
        
        testInputs.forEach((input, index) => {
            const result = validateEmail(input);
            
            // Only valid email strings should return true
            if (typeof input === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input)) {
                expect(result).to.eq(true);
            } else {
                expect(result).to.eq(false);
            }
        });
    });
    
    // Test specifically with string inputs for more targeted testing
    it('should validate string inputs properly', () => {
        const stringInputs = TestInputs.getRawInputs({ 
            include: { categories: ['strings'] } 
        });
        
        stringInputs.forEach(str => {
            const result = validateEmail(str);
            // Add your specific email validation logic tests here
        });
    });
});
```

### Testing object serialization

```typescript
import TestInputs from "test-inputs";
import { expect } from "chai";

function safeJSONStringify(obj: any): string {
    try {
        return JSON.stringify(obj);
    } catch (error) {
        return '{"error": "Unable to serialize"}';
    }
}

describe('safeJSONStringify', () => {
    it('should handle all input types without throwing', () => {
        const allInputs = TestInputs.getRawInputs({
            include: { levels: ['simple', 'detailed'] } // Skip 'large' for performance
        });
        
        allInputs.forEach(input => {
            expect(() => safeJSONStringify(input)).not.throw();
            
            const result = safeJSONStringify(input);
            expect(typeof result).to.be.a('string');
        });
    });
});
```

## 📃 Changelog

To view the release notes for each version, view the changelog:

* On GitHub: [Link](https://github.com/reid-moffat/test-inputs/blob/main/CHANGELOG.md)
* On npm: [package page](https://www.npmjs.com/package/test-inputs?activeTab=code) -> CHANGELOG.md
* In the repository: CHANGELOG.md

---

☕ [Buy me a coffee](https://buymeacoffee.com/reidmoffat) if this package helped you!
