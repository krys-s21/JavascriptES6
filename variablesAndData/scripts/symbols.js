/**
* Symbol is a built-in object whose constructor returns a symbol primitive — also 
* called a Symbol value or just a Symbol — that's guaranteed to be unique.
*
* Symbol("foo") === Symbol("foo"); // false
*/

const id = Symbol();

const courseInfo = {
    title: "Javascript",
    topics: ["strings", "arrays", "objects"],
    id: "js-course"
};

courseInfo[id] = 41284;
console.log(courseInfo);