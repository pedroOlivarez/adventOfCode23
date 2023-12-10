import CubeConundrumV2 from "../src/day2/CubeConundrumV2";
import input from "../input/cubeConundrum/input";
import { inputSplitter } from "../src/utils/utils";

describe('Day 2', () => {
    it('Will compute the right answer', () => {
        const result = CubeConundrumV2(inputSplitter(input));
        expect(result).toBeTruthy();
    })
})