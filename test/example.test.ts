import { sum } from "../src/example";

describe('example', () => {
    it('runs', () => {
        const a = 1;
        const b = 2;
        expect(sum(a, b)).toBe(3);
    })
});