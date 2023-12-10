import TrebuchetV2 from "../src/day1/TrebuchetV2";
import input from "../input/trebuchet/input";
import { inputSplitter } from "../src/utils/utils";

describe('Day 1.2', () => {
    it('Will compute the right answer', () => {
        const result = TrebuchetV2(inputSplitter(input));
        expect(result).toBe(54676);
    })
});