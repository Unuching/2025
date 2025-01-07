//Object entries() method
const kgc = {
  fullName: "Khagrachari",
  division: "Chittagong",
  country: "Bangladesh",
};

let district = Object.entries(kgc);

// console.log(district);
// object entries method returm key and value pairs of an object

//looping an object using object entries method

const person = {
  fullName: "Unuching Marma",
  age: 32,
  home: "Khagrachari",
};
let info = "";

for (const [intro, data] of Object.entries(person)) {
  info += intro + ":" + data + "\n";
}
//console.log(info);

// const items = {
//   books: 200,
//   pens: 1000,
//   noteBook: 1600,
// };

// let list_of_items = "";
// for (const [item, amount] of Object.entries(items)) {
//   list_of_items += item + ":" + amount + "\n";
// }
// console.log(list_of_items);

const stationary = [
  ["books", 200],
  ["pens", 1000],
  ["noteBook", 1600],
];

let list_of_stationary = "";
for (const [item, amount] of Object.entries(stationary)) {
  list_of_stationary += item + ":" + amount + "\n";
}
// console.log(list_of_stationary);

let myItems = Object.fromEntries(stationary);
// console.log(myItems.pens);

const my_table_items = {
  item1: "laptop",
  item2: "mouse",
  item3: "keyboard",
};

let my_items = Object.values(my_table_items)
console.log(my_items);

