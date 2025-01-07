let my_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let new_numbers = [];

for (const num of my_numbers) {
  if (num === 7) {
    continue;
  }
  new_numbers.push(num);
}
console.log(new_numbers);
