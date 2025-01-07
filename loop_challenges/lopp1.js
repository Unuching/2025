// let countdown = [];
// let i = 10;

// while (i > 0) {
//   countdown.push(i);
//   i--;
// }
// console.log(countdown);

// let books = [];
// let book;

// do {
//   book = prompt(`What is your favourite books(Type "stop" to finish)`);
//   if (book !== "stop") {
//     books.push(book);
//   }
// } while (book !== "stop");

let total = 0;
let i = 1;

do {
  if (i < 4) {
    total += i;
  }
  i++;
} while (i < 4);

console.log(total);

// let total = 0; // Initialize total outside the loop
// let i = 1;

// do {
//   if (i < 4) {
//     total += i; // Accumulate the value of i
//   }
//   i++; // Increment i to avoid an infinite loop
// } while (i < 4);

// console.log(total); // Outputs the total
