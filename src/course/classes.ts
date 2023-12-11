



type DataType = {
    id: number;
    name: string;
}

let dataTypeObj: DataType = {
    id: 1,
    name: 'eins'
}

interface DataTypeInterface {
    id: number;
    name: string;

    nextId(): number;
}

let dataTypeInterfaceObj: DataTypeInterface = {
    id: 2,
    name: 'zwei',
    nextId(): number {
        return 3;
    }
}

class DataTypeClass implements DataTypeInterface {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    nextId(): number {
        return 42;
    }
}

class DataTypeSecondClass implements DataTypeInterface {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    nextId(): number {
        return 42;
    }
}

const dtObj: DataTypeInterface = new DataTypeClass(13, 'dreizehn');
const dtObj2: DataTypeInterface = new DataTypeSecondClass(26, "sechsundzwanzig");
