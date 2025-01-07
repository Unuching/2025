class Car {
  constructor(brand) {
    this.brand = brand;
  }

  myCar() {
    return `I have a ${this.brand}. `;
  }
}
// const car2 = new Car("BMW")

// console.log(car2.myCar());

class Model extends Car {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }
  show() {
    return this.myCar() + `It is a ${this.model}`;
  }
}

const car1 = new Model("BMW", "electric");
// console.log(car1.show());

class Collection {
  constructor(item1) {
    this.item1 = item1;
  }

  thing() {
    return `I have a ${this.item1}.`;
  }
}

// const m = new Collection("hORSE")
// console.log(m.thing());

class NewCollection extends Collection {
  constructor(item1, item2) {
    super(item1);
    this.item2 = item2;
  }

  new_product() {
    return this.thing() + `I also have a ${this.item2}.`;
  }
}
const myCollection = new NewCollection("Laptop", "Bike");
//console.log(myCollection.new_product());

class Products {
  constructor(first, second) {
    this.first = first;
    this.second = second;
  }

  first_product() {
    return `Use ${this.first} and ${this.second}.`;
  }
}
// const p1 = new Products("lotion", "oil")
// console.log(p1.first_product());

class Another_product extends Products {
  constructor(first, second, third) {
    super(first, second);
    this.third = third;
  }
  another_item() {
    return `${this.first_product()} Also use ${this.third} in the winter.`;
  }
}

const winter_product = new Another_product("lotion", "oil", "moisturizer");
console.log(winter_product.another_item());
