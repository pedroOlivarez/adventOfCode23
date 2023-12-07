import trebuchetV2 from "../src/day1/trebuchetV2";
import { input } from "../input/trebuchet/input";

describe('Day 1.2', () => {
    it('Will compute the right answer', () => {
        const result = trebuchetV2(input);
        expect(result).toBe(54676);
    })
});