import trebuchet from "../src/trebuchet";
import { input } from "../input/trebuchet/input";

describe('Day 1', () => {
    it('Will compute the right answer', () => {
        const result = trebuchet(input);
        expect(result).toBe(53921);
    })
});