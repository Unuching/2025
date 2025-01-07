// functions using an expression are not hoisted

const x = function (a, b) {
  return a * b;
};
console.log(x(5, 6));
