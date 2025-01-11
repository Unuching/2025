function greet(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}
function goodBye() {
  console.log("good Bye!");
}

greet("Ume", goodBye);
