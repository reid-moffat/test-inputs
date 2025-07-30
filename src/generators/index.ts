import { InputGenerator } from "../core/types";
import primitiveGenerators from "./primitives";
import numberGenerators from "./numbers";
import stringGenerators from "./strings";
import arrayGenerators from "./arrays";
import objectGenerators from "./objects";

const allGenerators: InputGenerator[][] = [
    primitiveGenerators,
    numberGenerators,
    stringGenerators,
    arrayGenerators,
    objectGenerators
];

export default allGenerators;
