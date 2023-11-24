
// Array of values expected
function sum (values) {

    let sum = 0.0;
    values.forEach(value => {
        sum += value;
    });

    return sum;
}

// One of the elements is a different type
let values = [1, 2, 3, "4", 5];
let result = sum(values);
console.log(result);
