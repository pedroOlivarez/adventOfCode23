const trebuchetV2 = (input: string): number => {
    const inputs = input
        // .replace(/one/g, 'o1e')
        // .replace(/two/g, 't2o')
        // .replace(/three/g, 't3e')
        // .replace(/four/g, 'f4r')
        // .replace(/five/g, 'f5e')
        // .replace(/six/g, 's6')
        // .replace(/seven/g, 's7n')
        // .replace(/eight/g, 'e8t')
        // .replace(/nine/g, 'n9e')
        // .replace(/zero/g, '0o')
        .split(/\r?\n/);

    const initialValue = 0;
    const inputMap = new Map();
    inputMap.set('one', '1'); // 3
    inputMap.set('two', '2'); // 3
    inputMap.set('six', '6'); // 3
    inputMap.set('four', '4'); // 4
    inputMap.set('five', '5'); // 4
    inputMap.set('nine', '9'); // 4
    inputMap.set('zero', '0'); //4
    inputMap.set('three', '3'); // 5
    inputMap.set('seven', '7'); //5
    inputMap.set('eight', '8'); // 5

    return inputs.reduce((sum, input) => {
        let leftmost: string | null = null;
        let rightmost: string | null = null;
        let i = 0;
        let j = input.length - 1;
        let leftStack = '';
        let rightStack = '';
        while ((!leftmost || !rightmost) && i <= j) {
            if (!leftmost) {
                const cl = input.charAt(i);
                const nl = Number(cl);
                if (!isNaN(nl)) leftmost = cl;
                else {
                    leftStack += cl;
                    if (leftStack.length >= 3) {
                        if (inputMap.has(leftStack)) {
                            leftmost = inputMap.get(leftStack);
                        } else if (leftStack.length === 4) {
                            if (inputMap.has(leftStack.substring(1))) leftmost = inputMap.get(leftStack.substring(1));
                        } else if (leftStack.length === 5) {
                            if (inputMap.has(leftStack.substring(1))) leftmost = inputMap.get(leftStack.substring(1));
                            if (inputMap.has(leftStack.substring(2))) leftmost = inputMap.get(leftStack.substring(2));
                            leftStack = leftStack.substring(1);
                        }
                    }
                }
                i++;
            }
            if (!rightmost) {
                const cr = input.charAt(j);
                const nr = Number(cr);
                if (!isNaN(nr)) rightmost = cr;
                else {
                    rightStack = cr + rightStack;
                    if (rightStack.length >= 3) {
                        if (inputMap.has(rightStack)) {
                            rightmost = inputMap.get(rightStack);
                        } else if (rightStack.length === 4) {
                            if (inputMap.has(rightStack.substring(0, 3))) rightmost = inputMap.get(rightStack.substring(0, 3));
                        } else if (rightStack.length === 5) {
                            if (inputMap.has(rightStack.substring(0, 3))) rightmost = inputMap.get(rightStack.substring(0, 3));
                            rightStack = rightStack.substring(0, 4);
                            if (inputMap.has(rightStack)) rightmost = inputMap.get(rightStack);

                        }
                    }
                }
                j--;
            }
        }

        if (!leftmost) leftmost = rightmost || '';
        if (!rightmost) rightmost = leftmost || '';
        return sum + Number(`${leftmost}${rightmost}`);
    }, initialValue)
}

export default trebuchetV2;