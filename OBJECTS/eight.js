const momos = {
  item1: "Chicken",
  item2: "Onion",
  item3: "Garlic",
};
Object.defineProperty(momos,"item3",{enumerable:false})

let items = Object.keys(momos)
console.log(items);
