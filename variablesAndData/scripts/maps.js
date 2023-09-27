/**
 * The Map object holds key-value pairs and remembers the original insertion order 
 * of the keys. Any value (both objects and primitive values) may be used as either 
 * a key or a value.
 */

let course = new Map();

course.set("react", {
    description: "ui"
});
course.set("jest", {
    description: "testing"
});

console.log(course);
console.log(course.react);
console.log(course.get("react"));

let details = new Map([
    [new Date(), "today"],
    [2, {
        javascript: ["js", "node", "react"],

    }],
    ["items", [1, 2]]
]);

console.log(details);
console.log(details.size);

details.forEach((item) => console.log(item));