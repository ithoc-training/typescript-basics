// Array of values expected
function sum (values: number[]) {

    let sum = 0.0;
    values.forEach(value => {
        sum += value;
    });

    return sum;
}

// One of the elements is a different type
let values: number[] = [1, 2, 3, 5, 8, 13, 21];
let result = sum(values);
console.log(result);
