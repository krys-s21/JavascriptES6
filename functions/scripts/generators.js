function* director(){
    yield "Three";
    yield "Two";
    yield "One";
    yield "Action";
}

let coutdown=director();

console.log(coutdown.next().value);
console.log(coutdown.next().value);
console.log(coutdown.next().value);
console.log(coutdown.next());
console.log(coutdown.next());