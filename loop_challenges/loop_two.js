let divided_numbers = [];
let my_numbers = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

for (let k = 0; k < my_numbers.length; k++) {
  let divide = my_numbers[k] / 100;
  divided_numbers.push(divide);
}

console.log(divided_numbers);
