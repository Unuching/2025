let myResult = multiply(4, 4);
//console.log(myResult);
function multiply(a, b) {
  return a * b;
}

let x = function (a, b, c) {
  return a + b + c;
};

let y = x(4, 5, 6);
//console.log(y);

// Function Constructor

const division = new Function("a", "b", " return a/b");
//console.log(Math.round(division(13, 7)));
const subtract = new Function ("a", "b", "return a-b")

console.log(subtract(9,7));
