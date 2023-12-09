
function sum(...values: number[]): number {

    let sum: number = 0;
    for(let i = 0; i < values.length; i++) {
        sum += values[i];
    }

    return sum;
}

let total: number = sum(1, 2, 3, 5, 8, 13);
console.log('Total:', total);
