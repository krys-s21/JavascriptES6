let books = new Set();

books.add("Price and Prejudice");
books.add("War and Peace").add("Oliver Twist");
//every value must be unique, will add only 1 time.
books.add("War and Peace");

console.log(books);
console.log(books.size);

books.delete("Oliver Twist");
//map is not available for sets
//books.map((item)=>console.log(item));
//we need to use forEach instead
books.forEach((item)=>console.log(item));

console.log("has Oliver Twist", books.has("Oliver Twist"));