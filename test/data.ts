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

const invalidOptions: InvalidOption[] = [
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

    {
        name: "Include & exclude simple level",
        input: { include: { levels: 'simple' }, exclude: { levels: 'simple' } },
        message: excludeIncludeMessage(['levels'])
    },

    {
        name: "Include & exclude simple level",
        input: { include: { levels: 'simple' }, exclude: { levels: 'simple' } },
        message: excludeIncludeMessage(['levels'])
    }
];

export { invalidOptions };
