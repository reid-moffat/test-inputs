import { FilterOptions } from "../src";

type InvalidOption = {
    name: string;
    input: FilterOptions;
    message: string;
}

const excludeIncludeMessage = (filters: string[]) => {
    return `Cannot define both 'exclude' and 'include' for the same filter type (${filters.join(', ')}). `
        + `Using 'include' makes all non-specified filters excluded, and vice-verse for 'exclude'`;
}

const includeExclude: InvalidOption[] = [
    // Simple level
    {
        name: "Include & exclude simple level (both strings)",
        input: { include: { levels: 'simple' }, exclude: { levels: 'simple' } },
        message: excludeIncludeMessage(['levels'])
    },
    {
        name: "Include & exclude simple level (array & string)",
        input: { include: { levels: ['simple'] }, exclude: { levels: 'simple' } },
        message: excludeIncludeMessage(['levels'])
    },
    {
        name: "Include & exclude simple level (string & array)",
        input: { include: { levels: 'simple' }, exclude: { levels: ['simple'] } },
        message: excludeIncludeMessage(['levels'])
    },
    {
        name: "Include & exclude simple level (both arrays)",
        input: { include: { levels: ['simple'] }, exclude: { levels: ['simple'] } },
        message: excludeIncludeMessage(['levels'])
    },

    // Array category
    {
        name: "Include & exclude array category (both strings)",
        input: { include: { categories: 'arrays' }, exclude: { categories: 'arrays' } },
        message: excludeIncludeMessage(['categories'])
    },
    {
        name: "Include & exclude array category (array and string)",
        input: { include: { categories: ['arrays'] }, exclude: { categories: 'arrays' } },
        message: excludeIncludeMessage(['categories'])
    },
    {
        name: "Include & exclude array category (string and array)",
        input: { include: { categories: 'arrays' }, exclude: { categories: ['arrays'] } },
        message: excludeIncludeMessage(['categories'])
    },
    {
        name: "Include & exclude array category (both arrays)",
        input: { include: { categories: ['arrays'] }, exclude: { categories: ['arrays'] } },
        message: excludeIncludeMessage(['categories'])
    },

    // Single chars subcategory
    {
        name: "Include & exclude array single-chars subcategory (both strings)",
        input: { include: { subcategories: 'single-chars' }, exclude: { subcategories: 'single-chars' } },
        message: excludeIncludeMessage(['subcategories'])
    },
    {
        name: "Include & exclude array single-chars subcategory (string and array)",
        input: { include: { subcategories: ['single-chars'] }, exclude: { subcategories: 'single-chars' } },
        message: excludeIncludeMessage(['subcategories'])
    },
    {
        name: "Include & exclude array single-chars subcategory (array and string)",
        input: { include: { subcategories: 'single-chars' }, exclude: { subcategories: ['single-chars'] } },
        message: excludeIncludeMessage(['subcategories'])
    },
    {
        name: "Include & exclude array single-chars subcategory (both arrays)",
        input: { include: { subcategories: ['single-chars'] }, exclude: { subcategories: ['single-chars'] } },
        message: excludeIncludeMessage(['subcategories'])
    },

    // Empty arrays

    // Multiple cases
    {
        name: "Include & exclude all levels",
        input: { include: { levels: ['simple', 'large', 'detailed'] }, exclude: { levels: ['simple', 'large', 'detailed'] } },
        message: excludeIncludeMessage(['levels'])
    },
    {
        name: "Include all levels, exclude detailed",
        input: { include: { levels: ['simple', 'large', 'detailed'] }, exclude: { levels: 'detailed' } },
        message: excludeIncludeMessage(['levels'])
    },

    {
        name: "Include & exclude all categories",
        input: { include: { categories: ['numbers', 'strings', 'arrays', 'objects', 'other'] }, exclude: { categories: ['numbers', 'strings', 'arrays', 'objects', 'other'] } },
        message: excludeIncludeMessage(['categories'])
    },
    {
        name: "Include all categories, exclude numbers",
        input: { include: { categories: ['numbers', 'strings', 'arrays', 'objects', 'other'] }, exclude: { categories: ['numbers'] } },
        message: excludeIncludeMessage(['categories'])
    },

    {
        name: "Include & exclude many subcategories",
        input: { include: { subcategories: ['large', 'sql', 'special-keys'] }, exclude: { subcategories: ['large', 'sql', 'special-keys'] } },
        message: excludeIncludeMessage(['subcategories'])
    },
    {
        name: "Include many subcategories, exclude sql",
        input: { include: { subcategories: ['large', 'sql', 'special-keys'] }, exclude: { subcategories: ['sql'] } },
        message: excludeIncludeMessage(['subcategories'])
    }
];

/**
 * All invalid options cases
 */
const invalidOptions: InvalidOption[] = [
    ...includeExclude,
];

export { invalidOptions };
