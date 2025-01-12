let name_one = "Unuching";
let name_two = "Mrachingnu";

console.log(name_one);

setTimeout(function () {
  console.log("Asynchronous");
}, 4000);
console.log(name_two);
