import { InputGenerator } from "../types/InputGenerator";
import numberGenerators from "./numbers";
import stringGenerators from "./strings";
import arrayGenerators from "./arrays";
import objectGenerators from "./objects";
import OtherGenerators from "./other";

const AllGenerators: InputGenerator[][] = [
    numberGenerators,
    stringGenerators,
    arrayGenerators,
    objectGenerators,
    OtherGenerators
];

export default AllGenerators;
