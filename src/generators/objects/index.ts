import { ObjectInputGenerator } from "../../types/InputGenerator";
import SimpleGenerators from "./simple";
import DetailedGenerators from "./detailed";
import LargeGenerators from "./large";

const ObjectGenerators: ObjectInputGenerator[] = [
    ...SimpleGenerators,
    ...DetailedGenerators,
    ...LargeGenerators,
];

export default ObjectGenerators;
