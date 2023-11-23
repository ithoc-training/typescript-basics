# Fundamental Concepts

## Basic Types

### Understanding Basic Types in TypeScript
TypeScript enhances JavaScript by adding a type system. Below, we'll explore the basic types 
in TypeScript: `number`, `string`, `boolean`, `null`, `undefined`, `object`, and `array`.

Each type in TypeScript provides benefits like type checking and IntelliSense in code editors, 
making it easier to write robust and error-free code.

#### Number
- In TypeScript, `number` represents both integer and floating-point values.
- Example: `let age: number = 30;`

#### String
- The `string` type is used for textual data.
- Example: `let name: string = 'Alice';`

#### Boolean
- The `boolean` type represents true/false values.
- Example: `let isActive: boolean = true;`

#### Null and Undefined
- `null` and `undefined` in TypeScript have their own types named `null` and `undefined` respectively.
- They are not much useful on their own: `let x: null = null;`, `let y: undefined = undefined;`

#### Object
- The `object` type represents any non-primitive type.
- Example: `let person: object = { name: 'Alice', age: 30 };`

#### Array
- Arrays can be written in one of two ways: `let list: number[] = [1, 2, 3];` or using a generic array type `let list: Array<number> = [1, 2, 3];`

### Type Inference and Type Annotations in TypeScript

TypeScript is known for its ability to infer types and its use of type annotations to explicitly 
define types. Understanding these concepts is crucial for effective TypeScript programming.

Understanding the balance between type inference and type annotations is key to writing clean and 
efficient TypeScript code. While type inference can make your code concise, type annotations 
provide clarity and ensure type safety where automatic inference is not possible.

#### Type Inference
- TypeScript automatically infers the type of a variable if it is initialized during declaration.
- Example: `let message = 'Hello, World!';` Here, TypeScript infers `message` to be of type `string`.
- This reduces the amount of code you need to write without losing the safety and benefits of types.

#### Type Annotations
- Type annotations in TypeScript allow you to explicitly define the type of a variable.
- Syntax: `let variableName: type = value;`
- Example: `let count: number = 5;` Here, `count` is explicitly declared as a `number`.
- Type annotations are particularly useful when a variable is declared without initialization or 
when the type cannot be inferred.
- Example: `let isCompleted: boolean;` Here, we explicitly state that `isCompleted` is a boolean.


## Interfaces and Classes in TypeScript

### Defining Interfaces
- Interfaces in TypeScript are used to define the structure for objects.
- Use the ```interface``` keyword followed by the interface name.
*Example*:
```typescript
interface User {
    name: string;
    age: number;
}
```
This ```User``` interface specifies that any object of this type will have a ```name``` string and 
an ```age``` number.

### Creating Classes and Implementing Interfaces
- Classes in TypeScript are blueprints for creating objects.
- Classes can implement interfaces to ensure they conform to certain structures.
- Use the class keyword followed by the class name and the implements keyword for interfaces.
*Example*:
```typescript
class Employee implements User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
```
Here, the ```Employee``` class implements the ```User``` interface.

### Access Modifiers: Public, Private, Protected
TypeScript supports access modifiers for class properties and methods.
- ```public```: Accessible from anywhere, default if not specified.
- ```private```: Only accessible within the declaring class.
- ```protected```: Accessible within the declaring class and its subclasses.
*Example*:
```typescript
class Person {
    public name: string;
    private id: number;
    protected age: number;

    constructor(name: string, id: number, age: number) {
        this.name = name;
        this.id = id;
        this.age = age;
    }
}
```
This class Person demonstrates the use of all three access modifiers.


## Functions and Generics

### Function Declaration and Parameters

#### Function Syntax
In TypeScript, we declare a function using a combination of the function keyword, a name for 
the function, a pair of parentheses for the function parameters, and curly braces for the 
function body.
```typescript
function functionName(parameter1: type, parameter2: type): returnType {
    // Function body
}
```
#### Function Parameters
Function parameters are variables that are passed into the function to hold the values that 
will be used inside the function body. These parameters can have types specified, which help 
in type-checking and provide better code understanding.
```typescript
function greet(name: string, age: number): void {
    console.log(`Hello ${name}, you are ${age} years old.`);
}
```
In the above example, `name` is of type `string` and `age` is of type `number`. The function 
`greet` takes these two parameters, concatenates them using a template literal, and logs the 
message to the console.
#### Return Types
Functions in TypeScript can also have return types, which specify the type of value the function 
will return after executing its logic. Return types are specified after the function parameters 
with a colon (:).
```typescript
function add(num1: number, num2: number): number {
    return num1 + num2;
}
```
The function `add` takes two parameters `num1` and `num2`, both of type `number`, and returns 
their sum, also of type `number`.

### Introduction to Generics
Generics provide a way to create reusable components that can work with multiple types. They 
allow us to define placeholders for the types and use them when defining classes, functions, 
or interfaces.

#### Creating a Generic Function
To create a generic function in TypeScript, we use angle brackets (`<>`) and specify the generic 
type placeholders. These placeholders can be any valid identifier.
```typescript
function identity<T>(arg: T): T {
    return arg;
}
```
In the above example, the function `identity` is a generic function that takes an argument `arg` 
of type `T` and returns the same value of type `T`. The generic type `T` can be any type, and it 
is inferred automatically based on the argument passed.

#### Using Generics with Arrays
Generics can also be used with arrays to create flexible and reusable functions. Let's consider 
an example of a function that takes an array of any type and returns its reversed version.
```typescript
function reverseArray<T>(array: T[]): T[] {
    return array.reverse();
}
```
In the above example, the function `reverseArray` is a generic function that takes an array 
`array` of type `T` and returns an array of the same type `T`. The `T[]` syntax denotes an 
array of generic type `T`.
By using generics, we can create functions and components that are more flexible, reusable, 
and type-safe, enabling us to write better TypeScript code.

**Note**: Markdown code formatting does not support syntax highlighting for TypeScript. 
The above code snippets are provided for clarity and understanding purposes.


## Advanced Types in TypeScript
In TypeScript, advanced types like union types, intersection types, type aliases, enums, 
and tuples provide powerful ways to define and manipulate data structures. Let's dive 
into each of these.

### Union Types
- Union types allow a variable to be one of several types.
- Use the | symbol to define a union type.
**Example**:
```typescript
let mixedType: string | number;
mixedType = 'Hello'; // Valid
mixedType = 42;      // Also valid
```
In this example, ```mixedType``` can be either a ```string``` or a ```number```.

### Intersection Types
- Intersection types combine multiple types into one.
- Use the & symbol to create an intersection type.
**Example**:
```typescript
interface Name {
    name: string;
}

interface Age {
    age: number;
}

type Person = Name & Age;
let employee: Person = { name: 'Alice', age: 30 };
```
Here, ```Person``` is a type that includes both ```Name``` and ```Age``` properties.

### Type Aliases
- Type aliases create a new name for a type.
- Use the ```type``` keyword to define a type alias.
**Example**:
```typescript
type StringOrNumber = string | number;
let value: StringOrNumber;
value = 'Hello';  // Valid
value = 100;      // Valid
```
```StringOrNumber``` is a type alias for ```string | number```.

### Enum Types
- Enums allow you to define a set of named constants.
- Use the ```enum``` keyword to define an enum.
**Example**:
```typescript
enum Direction {
    Up,
    Down,
    Left,
    Right
}

let dir: Direction = Direction.Up;
```
This example defines an ```enum``` for directions with four possible values.

### Tuple Types
- Tuples are arrays with fixed sizes and known datatypes.
- Define a tuple by specifying the type of each element.
**Example**: 
```typescript
let tuple: [string, number];
tuple = ['Hello', 42];  // Valid
tuple = [42, 'Hello'];  // Error: Type 'number' is not assignable to type 'string'
```
Here, ```tuple``` is a tuple type that must start with a ```string``` followed by a ```number```.


## Modules and Namespaces in TypeScript
In TypeScript, organizing code efficiently is crucial for maintainability and scalability. 
Modules and namespaces are two core concepts that help in structuring and organizing 
the code effectively.

### Organizing Code with Modules
- Modules are TypeScript's way to encapsulate and organize code. Each module is a separate file.
- Use export to expose module members (classes, functions, interfaces, etc.) to other modules.
- Use import to bring in members from other modules.
**Example**:
```typescript
// In mathUtils.ts
export function add(a: number, b: number): number {
    return a + b;
}

// In app.ts
import { add } from './mathUtils';

console.log(add(1, 2)); // Outputs: 3
```
This demonstrates how functions can be exported from one module and imported into another.

### Exporting and Importing Modules
- Use export before any declaration to export it from the module.
- Import what you need using import { MemberName } from 'ModuleName';.
**Example**:
```typescript
// Exporting in logger.ts
export function log(message: string) {
    console.log(message);
}

// Importing in app.ts
import { log } from './logger';

log('Hello, TypeScript!');
```
The log function is exported from logger.ts and then imported and used in app.ts.

### Differences Between Namespaces and Modules
- Namespaces: An older method primarily used to organize code in the global scope. Use the namespace keyword.
- Modules: The modern, preferred way to organize code in TypeScript. Relies on the module loader at runtime.
- Namespaces can be a good choice for small applications or where module loaders are not available.
- Modules are more flexible and better suited for larger applications.
**Example of Namespace**:
```typescript
namespace Utility {
    export function log(message: string) {
        console.log(message);
    }
}

Utility.log('Logging with Namespace');
```
