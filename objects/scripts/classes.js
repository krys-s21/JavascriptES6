//Classes
class Vehicle {
    constructor(description, wheels) {
        this.description = description;
        this.wheels = wheels;
    }
    describeYourself() {
        console.log(`I am a ${this.description}
        with ${this.wheels} wheels.`);
    }
}
let coolSkiVan = new Vehicle("cool ski van", 4);
console.log(coolSkiVan);
coolSkiVan.describeYourself();

//Inheritance
class SemiTruck extends Vehicle {
    constructor() {
        super("semi truck", 18)
    }
}
let groceryStoreSemi = new SemiTruck();
groceryStoreSemi.describeYourself();


//Getters and Setters

//without class
let attendance = {
    _list: [],
    set addName(name) {
        this._list.push(name);
    },
    get list() {
        return this._list.join(", ");
    }
}

attendance.addName = "Joanne Starr";
console.log(attendance.list);

attendance.addName = "Bill Benkelman";
attendance.addName = "Charlie Charlson";
console.log(attendance.list);

//with class
class Hike {
    constructor(distance, pace) {
        this.distance = distance;
        this.pace = pace;
    }
    get lengthInHours() {
        return `${this.calcLength()} hours`;
    }
    calcLength() {
        return this.distance / this.pace;
    }
}

const mtTallac = new Hike(10, 2);
console.log(mtTallac.lengthInHours);