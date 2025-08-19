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


// Filter inputs: include all inputs except strings
const filters = { include: { levels: ['simple', 'detailed', 'large']}, exclude: { categories: "strings" } };
const inputsFiltered = TestInputs.getInputs(filters);
```

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

---

☕ [Buy me a coffee](https://buymeacoffee.com/reidmoffat) if this package helped you!
