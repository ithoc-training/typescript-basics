/*
 * Function declaration for
 * 'function operation(a: number, b: number): number'
 */
type Operation = (a: number, b: number) => number;

/*
 * Type implementation for arithmetic operations.
 */
let addition: Operation = (a, b) => a + b;
let substraction: Operation = (a, b) => a - b;
let multiplication: Operation = (a, b) => a * b;

/*
 * Callback definition for printing out result of
 * arithmetic operations given two values.
 *
 * Note: Callback is forced to define function signature as is
 * through type Operation.
 */
function printResult(operation: Operation, a: number, b: number): void {
    const result: number = operation(a, b);
    console.log(result);
}

/*
 * Initialisation of a generic-driven array, meaning only functions
 * following signature declared by Operation are allowed.
 *
 * Note: We can rely on that the operations take two parameters and
 * return a value of type number.
 */
const operations: Operation[] = [addition, substraction, multiplication];
for(let i = 0; i < operations.length; i++) {
    const op: Operation = operations[i];
    printResult(op, i, i*i);
}

/*
 * Analogous Java code would like following.
 */
/*
interface Operation {
    double operation(double a, double b);
}
class Addition implements Operation {
    public operation(double a, double b) {
        // Implement me.
}
...

List<Operation> list = new ArrayList<>();

Operation addition = new Addition();
Operation substraction = new Substraction();
Operation multiplication = new Multiplication();

for(int i = 0; i < list.length(); i++) {
    System.out.println("Result: " + operation.operation())
}
*/
