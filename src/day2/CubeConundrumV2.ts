const r = 'red';
const b = 'blue';
const g = 'green';

const CubeConundrumV2 = (inputs: string[]): number => {
    let sum = 0;
    for (const input of inputs) {
        const [_, results] = input.split(': ');
        let redMax = 1;
        let blueMax = 1;
        let greenMax = 1;
        for (const result of results.split('; ')) {
            for (const outcome of result.split(', ')) {
                const [totalString, color] = outcome.split(' ');
                const total = Number(totalString);
                switch (color) {
                    case r:
                        if (total > redMax) redMax = total;
                        break;
                    case b:
                        if (total > blueMax) blueMax = total;
                        break;
                    case g:
                        if (total > greenMax) greenMax = total;
                        break;
                }
            }
        }
        sum += redMax * blueMax * greenMax;
    }

    return sum;
}

export default CubeConundrumV2;