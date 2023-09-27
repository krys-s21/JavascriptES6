//1st example
let yell = "woo!";

let party = yell.repeat(20);
console.log(party);

//2nd example
let cat = {
    meow(times) {
        console.log("meow".repeat(times));
    },
    purr(times) {
        console.log("prrr".repeat(times));
    },
    snore(times) {
        console.log("ZzZzZ".repeat(times));
    }
};

cat.meow(3);
cat.purr(3);
cat.snore(6);