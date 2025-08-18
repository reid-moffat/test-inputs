import { FilterOptions } from "../src";

type InvalidOption = {
    name: string;
    input: FilterOptions;
    message: string;
}

const invalidOptions: InvalidOption[] = [
    {
        name: "Include & exclude simple level",
        input: { include: { levels: 'simple' }, exclude: { levels: 'simple' } },
        message: "Cannot define both exclude and include for any filter (levels)"
    }
];

export { invalidOptions };
