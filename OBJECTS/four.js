// Object assign () method

const car1 = {
  brand: "Toyota",
  model: "XXL",
  year: 2022,
};
let car2 = {
  brand: "Honda",
  model: "XYT",
  year: 2024,
};
Object.assign(car1, car2);
// console.log(car1.brand,car1.model,car1.year);

const p1 = {
  name: "Unuching Marma",
  age: 32,
  home: "Khagrachari",
};
const p2 = {
  name: "Mrachingnu Marma",
  age: 30,
  home: "Ramgarh",
};
Object.assign(p1, p2);

console.log(p1.name, p1.age, p1.home);
