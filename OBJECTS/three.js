// by using javascript prototype you can add new method to existing objects

function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}

Car.prototype.engine = "2000 cc";
const unuCar = new Car("Yamaha", "XMS", "2000");
let myCar = `My car has ${unuCar.engine} engine`;

// console.log(myCar);

// adding new method to an object using object prototype
function Person(first, last, age, familyMember) {
  this.fName = first;
  this.lName = last;
  this.age = age;
  this.fMember = familyMember;
}
Person.prototype.name = function () {
  return this.fName + " " + this.lName;
};

let p1 = new Person("Unuching", "Marma", 32, 7);

console.log(`My name is ${p1.name()}`);
