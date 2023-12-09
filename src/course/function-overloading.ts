/**
 * Function overloading declares all possible signatures and implements
 * the declarations once, distinguishing between the different data types.
 *
 * See https://stackoverflow.com/questions/13212625/typescript-function-overloading
 *
 * Note: Function overloading only works for same number of parameters.
 *       Different number of parameters do not work.
 */
function add(a: number, b: number): number;
function add(a: number, b: string): number;

function add(a: number, b: number | string): number {

    if(typeof(b) == 'string') {
        // JavaScript: 1 + '2' = '12'
        b = parseInt(b);
    }

    return a + b;
}

let resultStr = add(13, '21');
console.log('resultStr:', resultStr);

let resultNum = add(13, 21);
console.log('resultNum:', resultNum);

