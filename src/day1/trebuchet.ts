const Trebuchet = (inputs: string[]): number => {
    const initialValue = 0;
    return inputs.reduce((sum, input) => {
        let leftmost: string | null = null;
        let rightmost: string | null = null;
        let i = 0;
        let j = input.length - 1;
        while ((!leftmost || !rightmost) && i <= j) {
            if (!leftmost) {
                const cl = input.charAt(i);
                const nl = Number(cl);
                if (!isNaN(nl)) leftmost = cl;
                i++;
            }
            if (!rightmost) {
                const cr = input.charAt(j);
                const nr = Number(cr);
                if (!isNaN(nr)) rightmost = cr;
                j--;
            }
        }

        if (!leftmost) leftmost = rightmost || '';
        if (!rightmost) rightmost = leftmost || '';

        return sum + Number(`${leftmost}${rightmost}`);
    }, initialValue)
}

export default Trebuchet;