import { InputGenerator } from "../types/InputGenerator";
import numberGenerators from "./numbers";
import stringGenerators from "./strings";
import arrayGenerators from "./arrays";
import objectGenerators from "./objects";
import functionGenerators from "./functions";

const allGenerators: InputGenerator[][] = [
    numberGenerators,
    stringGenerators,
    arrayGenerators,
    objectGenerators,
    functionGenerators
];

export default allGenerators;
