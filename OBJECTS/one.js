// cleating an object using object literal
const person = {};

person.fName = "Unuching";
person.lName = "Marma";
person.age = 30;
person.address = "Khagrachari";
person.eyes = "blue";

let p1 = `${person.fName} ${person.lName} is ${person.age} years old. He is from ${person.address}. He has ${person.eyes} color of eyes.`;

console.log(p1);

//creating object using new keyword

const car = new Object();

car.brand = "Toyota";
car.year = "2020";
car.name = "corolla";

let c1 = `My car is ${car.brand}. It is ${car.year} model. It is ${car.name}`
console.log(c1);

