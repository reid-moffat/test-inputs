import { StringInputGenerator } from "../../types/InputGenerator";
import SimpleGenerators from "./simple.ts";
import DetailedGenerators from "./detailed.ts";
import LargeGenerators from "./large.ts";

const StringGenerators: StringInputGenerator[] = [
    ...SimpleGenerators,
    ...DetailedGenerators,
    ...LargeGenerators,
];

export default StringGenerators;
