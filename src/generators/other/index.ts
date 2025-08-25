import { OtherInputGenerator } from "../../types/InputGenerator.ts";
import SimpleGenerators from "./simple.ts";
import DetailedGenerators from "./detailed.ts";
import LargeGenerators from "./large.ts";

const OtherGenerators: OtherInputGenerator[] = [
    ...SimpleGenerators,
    ...DetailedGenerators,
    ...LargeGenerators,
];

export default OtherGenerators;
