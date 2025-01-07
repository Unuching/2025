const person = {
  fullName: "Unuching Marma",
  age: 32,
};

Object.defineProperty(person, "birthyear", { value: "1992" });
//console.log(person.birthyear);

const momos = {
  item1: "Chicken",
  item2: "Onion",
  item3: "Garlic",
};

Object.defineProperty(momos, "item4", { value: "Garlic" });
// console.log(momos.item4);
Object.defineProperty(momos, "item1", { value: "Pork" });
//console.log(momos.item1);
let item_list = Object.getOwnPropertyNames(momos)

console.log(item_list);
