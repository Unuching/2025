class Laptop {
  constructor(model, ram) {
    this.model = model;
    this.ram = ram;
  }
}
const new_laptop1 = new Laptop("Lenovo", "16 GB");
const new_laptop2 = new Laptop("HP", "8GB");

// console.log(new_laptop2.model);

class Bike {
  constructor(engine, model, year) {
    this.engine = engine;
    this.model = model;
    this.year = year;
  }
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

const bike1 = new Bike("150cc", "Yamaha");

// console.log(`My bike has ${bike1.engine} engine and it's a ${bike1.model}`);
const bike2 = new Bike("250CC", "Suzuki", "2010");
console.log(
  `My bike has ${bike2.engine} engine and its ${bike2.age()} years old.`
);
