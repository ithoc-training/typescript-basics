/**
 * Generics with Constraints
 *
 * You can add constraints to generics using the extends keyword to limit the types they can work with.
 */

// All animals give a loud
interface Animal {

    name: string;

    giveLoud(): string;
}

// Cat is born
class Cat implements Animal {

    name: string;

    constructor(name: string) {
        this.name = name;
    }

    giveLoud(): string {
        return "Miaow";
    }
}

// Dog is born
class Dog implements Animal {

    name: string;

    constructor(name: string) {
        this.name = name;
    }

    giveLoud(): string {
        return "Wouw";
    }
}

// Cat is an animal
const cat: Animal = new Cat("Mickey");
// Dog too
const dog: Animal = new Dog("Aldo");

let animalArray: Animal[] = [cat, dog];
animalArray.forEach(animal => console.log(animal.giveLoud()));


// Go for overloading...
function describe(cat: Cat): void;
function describe(dog: Dog): void;
function describe(catOrDog: Cat | Dog) {
    let text: string = catOrDog instanceof Cat ? 'Cat gives' : 'Dog gives';
    console.log(text, catOrDog.giveLoud());
}

describe(cat);
describe(dog);


// Go for generics...
function describeAnimal<T>(animal: T) {
    let text: string;
    if(animal instanceof Cat) {
        text = 'Cat gives Miaow';
    } else if(animal instanceof  Dog) {
        text = 'Dog gives Wouw'
    } else {
        text = 'No animal detected'
    }
    console.log(text);
}

describeAnimal(cat);
describeAnimal(dog);


// Buildings are described
interface Building {
    space: number;
    storeys: number;
    calculatePrice(): number;
}

// A house has been built
class House implements Building {
    space: number;
    storeys: number;

    constructor(space: number, storeys: number) {
        this.space = space;
        this.storeys = storeys;
    }

    calculatePrice(): number {
        return this.space * this.storeys * 1000.0;
    }
}

let house: Building = new House(60, 1);
describeAnimal<House>(house);

// An office building
class Office implements Building {
    space: number;
    storeys: number;

    constructor(space: number, storeys: number) {
        this.space = space;
        this.storeys = storeys;
    }

    calculatePrice(): number {
        return this.space * this.storeys * 500.0;
    }
}

let office: Building = new Office(100, 2);
describeAnimal<Office>(office);

// Description for animals only
function describeAnyAnimal<T extends Animal>(animal: T) {
    console.log('Animal gives', animal.giveLoud());
}

describeAnyAnimal(cat);
describeAnyAnimal(dog);
// describeAnyAnimal(house); // compilation error

// Description for buildings
function describeAnyBuilding<T extends Building>(building: T) {
    console.log('Building costs', building.calculatePrice(), 'Euro');
}

describeAnyBuilding(house);
describeAnyBuilding(office);

// Building returns its price
function priceForBuilding<T extends Building>(building: T): number {
    return building.calculatePrice();
}

console.log('Price for house in Euro:', priceForBuilding(house));
console.log('Price for office in Euro:', priceForBuilding(office));

// Makes no sense if you would like to return different type than generic
function priceForBuildingGeneric<T extends Building>(building: T): T {
    return building;
}

function priceForBuildingType<T extends Building>(building: T): number {
    return building.calculatePrice();
}

/*
 * Generics return types work for same type as given one, only.
 */
