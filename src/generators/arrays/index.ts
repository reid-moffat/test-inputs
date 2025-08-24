import { ArrayInputGenerator } from "../../types/InputGenerator.ts";
import SimpleGenerators from "./simple.ts";
import DetailedGenerators from "./detailed.ts";
import LargeGenerators from "./large.ts";

const ArrayGenerators: ArrayInputGenerator[] = [
    ...SimpleGenerators,
    ...DetailedGenerators,
    ...LargeGenerators,
];

export default ArrayGenerators;
