import { InputGenerator } from "../core/types";
import primitiveGenerators from "./primitives";
import numberGenerators from "./numbers";
import stringGenerators from "./strings";
import arrayGenerators from "./arrays";
import objectGenerators from "./objects";
import functionGenerators from "./functions";

const allGenerators: InputGenerator[][] = [
    primitiveGenerators,
    numberGenerators,
    stringGenerators,
    arrayGenerators,
    objectGenerators,
    functionGenerators
];

export default allGenerators;
