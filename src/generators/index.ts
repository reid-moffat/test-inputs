import { InputGenerator } from "../types/InputGenerator";
import numberGenerators from "./numbers";
import stringGenerators from "./strings";
import ArrayGenerators from "./arrays";
import objectGenerators from "./objects";
import OtherGenerators from "./other";

const AllGenerators: InputGenerator[][] = [
    numberGenerators,
    stringGenerators,
    ArrayGenerators,
    objectGenerators,
    OtherGenerators
];

export default AllGenerators;
