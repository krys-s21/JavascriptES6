// => Arrow Functions

//without arrow function
let studentListN = function (students) {
    console.log(students);
}
studentListN(["A", "B", "C"]);

//with arrow function
const studentList = (students) => console.log(students);
studentList(["A", "B", "C"]);


let list = ["apple", "banana", "cherry"];

//without arrow function
list.map(function (item) {
    console.log(item);
});

//with arrow function
list.map((item) => console.log(item));



//"this" in arrow functions

//withou arrow function
let person = {
    first: "Angie",
    hobbies: ["bike", "hike", "ski"],
    printHobbies: function() {
        this.hobbies.forEach((hobby) => {
            let string = `${this.first} likes to ${hobby}`;
            console.log(string);
        });
    }
}

person.printHobbies();