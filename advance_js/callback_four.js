function calc(action, a, b) {
  if (action == "add") {
    return a + b;
  } else if (action == "divide") {
    return a / b;
  }
}
console.log(calc("add", 33, 54));
console.log(calc("divide", 45,7));

