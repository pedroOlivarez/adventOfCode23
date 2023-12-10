import CubeConundrum from "../src/day2/CubeConundrum";
import input from "../input/cubeConundrum/input";
import { inputSplitter } from "../src/utils/utils";

describe('Day 2', () => {
    it('Will compute the right answer', () => {
        const result = CubeConundrum(inputSplitter(input), 12, 13, 14);
        expect(result).toBe(2632);
    })
})