import { NumberInputGenerator } from "../../types/InputGenerator";
import SimpleGenerators from "./simple.ts";
import DetailedGenerators from "./detailed.ts";
import LargeGenerators from "./large.ts";

const NumberGenerators: NumberInputGenerator[] = [
    ...SimpleGenerators,
    ...DetailedGenerators,
    ...LargeGenerators,
];

export default NumberGenerators;
