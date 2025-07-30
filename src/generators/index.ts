import { InputGenerator } from "../types/InputGenerator";
import numberGenerators from "./numbers";
import stringGenerators from "./strings";
import arrayGenerators from "./arrays";
import objectGenerators from "./objects";
import otherGenerators from "./other";

const allGenerators: InputGenerator[][] = [
    numberGenerators,
    stringGenerators,
    arrayGenerators,
    objectGenerators,
    otherGenerators
];

export default allGenerators;
