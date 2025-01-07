// object constructor

function Family(father, mother, sister, brother) {
  this.father = father;
  this.mother = mother;
  this.brother = brother;
  this.sister = sister;
}

const myFamily = new Family(
  "Mongsanu Marma",
  "Sanai Marama",
  "Hlachingnu Marma",
  "Nunuching Marma"
);

let myFather = `The name of my father is ${myFamily.father}`;
// console.log(myFather);

function Motorbike(engine, brand, year) {
  this.engine = engine;
  this.brand = brand;
  this.year = year;
}
const bike = new Motorbike("150 CC", "Yamaha", 2022);
let myBike = `My motorbike is ${bike.brand}. It has a ${bike.engine} engine and it's a ${bike.year} model`;
console.log(myBike);
