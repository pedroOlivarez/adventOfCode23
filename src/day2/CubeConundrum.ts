const r = 'red';
const b = 'blue';
const g = 'green';

const CubeConundrum = (inputs: string[], redMax: number, greenMax: number, blueMax: number): number => {
    let sum = 0;
    for (const input of inputs) {
        const [game, results] = input.split(': ');
        const id = Number(game.split(' ')[1]);
        let valid = true;
        for (const result of results.split('; ')) {
            if (!valid) break;
            for (const outcome of result.split(', ')) {
                const [totalString, color] = outcome.split(' ');
                const total = Number(totalString);
                switch (color) {
                    case r:
                        if (total > redMax) valid = false;
                        break;
                    case b:
                        if (total > blueMax) valid = false;
                        break;
                    case g:
                        if (total > greenMax) valid = false;
                        break;
                }
                if (!valid) break;
            }
        }
        if (valid) sum += id;
    }

    return sum;
}

export default CubeConundrum;