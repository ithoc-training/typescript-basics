const primitiveArray: number[] = [1, 2, 3, 5, 8, 13, 21];
console.log(primitiveArray);

interface Point {
    x: number;
    y: number;
}

let point1: Point = {
    x: 13,
    y: 21
}

let point2: Point = {
    x: 21,
    y: 34
}

let pointArray: Point[] = [
    point1,
    point2
];

console.log(pointArray);

let zahl: number | string = '42';
console.log(typeof(zahl));
zahl = 84;
console.log(typeof(zahl));
