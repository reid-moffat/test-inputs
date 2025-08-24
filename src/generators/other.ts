import { OtherInputGenerator } from "../types/InputGenerator";
import SimpleGenerators from "./other/simple.ts";
import DetailedGenerators from "./other/detailed.ts";
import LargeGenerators from "./other/large.ts";

const OtherGenerators: OtherInputGenerator[] = [
    ...SimpleGenerators,
    ...DetailedGenerators,
    ...LargeGenerators,
];

export default OtherGenerators;
