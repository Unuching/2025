const new_nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const values = new_nums.filter((nums) => {
  return nums > 6;
});
// console.log(values);
const val = [];
new_nums.forEach((num) => {
  if (num < 7) {
    val.push(num);
  }
});

// console.log(val);

const num_s = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const required_nums = [];

num_s.forEach((r_value) => {
  if (r_value > 5) {
    required_nums.push(r_value);
  }
});

console.log(required_nums);
