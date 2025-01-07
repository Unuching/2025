function find_max() {
  let biggest_number = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > biggest_number) {
      biggest_number = arguments[i];
    }
  }
  return biggest_number;
}
console.log(find_max(33, 54, 89, 99, 123, 56));
