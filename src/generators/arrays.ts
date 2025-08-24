import { ArrayInputGenerator } from "../types/InputGenerator";
import SimpleGenerators from "./arrays/simple.ts";
import DetailedGenerators from "./arrays/detailed.ts";
import LargeGenerators from "./arrays/large.ts";

const arrayGenerators: ArrayInputGenerator[] = [
    ...SimpleGenerators,
    ...DetailedGenerators,
    ...LargeGenerators,
];

export default arrayGenerators;