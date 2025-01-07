const country = new Map();

country.set("BD", "Bangladesh");
country.set("IN", "India");
country.set("CH", "China");
// console.log(country);

for (const [key, value] of country) {
  console.log(key, ":", value);
}
