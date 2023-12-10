import Trebuchet from "../src/day1/Trebuchet";
import input from "../input/trebuchet/input";
import { inputSplitter } from "../src/utils/utils";

describe('Day 1', () => {
    it('Will compute the right answer', () => {
        const result = Trebuchet(inputSplitter(input));
        expect(result).toBe(53921);
    })
});