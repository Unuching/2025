function add(a, b) {
  return a + b;
}
function divide(a, b) {
  return a / b;
}
function multiply(a,b){
    return a*b
}

function calc(callback, a, b) {
  return callback(a, b);
}
console.log(calc(add,4,3));
console.log(calc(divide,45,7));
console.log(calc(multiply,5,9));


