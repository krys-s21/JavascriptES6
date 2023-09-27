const daytime = {
    breakfast: "oatmeal",
    lunch: "peanut butter ans jelly"
};

const nighttime = "mac and cheese";

const backpackingMeals = {
    ...daytime,
    nighttime
};

console.log(backpackingMeals);