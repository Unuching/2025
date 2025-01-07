let my_numbers = [1, 3, 4, 5, 6, 7, 8, 9];

let d_numbers = [];
for (let i = 0; i < my_numbers.length; i++) {
  if (my_numbers[i] === 5) {
    continue;
  }
  d_numbers.push(my_numbers[i]*3);
}
console.log(d_numbers);
