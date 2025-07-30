import { InputGenerator } from "../core/types";
import stringGenerators from "./strings";
import numberGenerators from "./numbers";

const allGenerators: InputGenerator[][] = [
    numberGenerators,
    stringGenerators
];

export default allGenerators;
