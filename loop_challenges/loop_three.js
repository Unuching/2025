let added_numbers = [];
let my_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let n = 0; n < my_numbers.length; n++) {
  let addition = my_numbers[n] + 10;
  added_numbers.push(addition);
}
console.log(added_numbers);
