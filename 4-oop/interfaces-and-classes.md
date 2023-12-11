# Object-Oriented Programming

## Interfaces and Classes

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
