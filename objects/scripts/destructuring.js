//normal way
const sandwitch = {
    title: "Reuben",
    price: 7,
    description: "A classic",
    ingredients: [
        "bread",
        "corner beef",
        "dressing",
        "sauerkraut",
        "cheese"
    ]
};
console.log(sandwitch.title);
console.log(sandwitch.price);

//destructuring way
const {
    title,
    price
} = {
    title: "Reuben",
    price: 7,
    description: "A classic",
    ingredients: [
        "bread",
        "corner beef",
        "dressing",
        "sauerkraut",
        "cheese"
    ]
};
console.log(title);
console.log(price);

//more complex example
const vacation = {
    destination: "Chile",
    travelers: 2,
    activity: "skiing",
    cost: "too much"
};

function marketing({
    destination,
    activity
}) {
    return `Come to ${destination} and do some ${activity}`;
};

console.log(marketing(vacation));