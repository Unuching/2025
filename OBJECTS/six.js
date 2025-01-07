const MyClothes = [
  { name: "Shirts", quantity: 10 },
  { name: "Pants", quantity: 7 },
  { name: "Underpant", quantity: 3 },
  { name: "Sweater", quantity: 2 },
];

function myCallback({ quantity }) {
  return quantity > 5 ? "Ok" : "Low";
}
const result = Object.groupBy(MyClothes, myCallback);

let text = `This clothing items are ok:  \n `;
for (const [a,b] of result.Ok.) {
    
}