# Introduction

To illustrate the concept of TypeScript and its advantages, let's consider an example where the lack of type checking 
in JavaScript can lead to potential issues, and how TypeScript addresses these issues.

*The following example demonstrates how TypeScript's type system helps in catching errors at compile time, leading to more 
robust and maintainable code, which is a key advantage over standard JavaScript.*


## JavaScript Example: Potential Weaknesses in Untyped Code

Let's consider the following JavaScript code:
```javascript
function calculateTotal(items) {
    let total = 0;
    for (let item of items) {
        total += item.price;
    }
    return total;
}

// Usage
const order = [{ price: 15 }, { price: 42 }, { price: "30" }]; // Note: "30" is a string!
console.log(calculateTotal(order)); // Output: 87 (This is incorrect due to string concatenation)
```

**Weaknesses in this JavaScript Code**:
- The ```calculateTotal``` function expects each ```item``` in the items array to have a ```price``` property 
that should be a number.
- JavaScript does not enforce types, and one of the ```price``` values is mistakenly passed as a string. 
This leads to incorrect calculation due to string concatenation instead of numerical addition.


## TypeScript Solution: Leveraging Type Safety
```typescript
interface Item {
    price: number;
}

function calculateTotal(items: Item[]): number {
    let total = 0;
    for (let item of items) {
        total += item.price;
    }
    return total;
}

// Usage
const order: Item[] = [{ price: 15 }, { price: 42 }, { price: 30 }]; // All prices are numbers
console.log(calculateTotal(order)); // Output: 87 (Correctly calculated)

// If you try to add an item with a string price, TypeScript will throw a compilation error:
// const incorrectOrder: Item[] = [{ price: 15 }, { price: 42 }, { price: "30" }]; // Error
```

**Benefits of the TypeScript Code**:
- TypeScript enforces types. The ```Item``` interface ensures that each ```item``` in the items array has a ```price``` 
property of type ```number```.
- If you try to pass an object with a ```price``` that is not a number, TypeScript will throw a compilation error. 
This prevents runtime errors and ensures more reliable code.
- The function ```calculateTotal``` is explicitly typed to return a number, making the code more readable and 
maintainable.

