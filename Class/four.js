class Car {
  constructor(brand) {
    this.brand = brand;
  }
  static hello(x) {
    return `Hello ` + x.brand;
  }
}
const myCar = new Car("Toyota");
console.log(Car.hello(myCar));
