import { InputGenerator } from "../types/InputGenerator";
import NumberGenerators from "./numbers";
import StringGenerators from "./strings";
import ArrayGenerators from "./arrays";
import ObjectGenerators from "./objects";
import OtherGenerators from "./other";

const AllGenerators: InputGenerator[][] = [
    NumberGenerators,
    StringGenerators,
    ArrayGenerators,
    ObjectGenerators,
    OtherGenerators
];

export default AllGenerators;
