let cityPopulation = {
  Dhaka: 25000000,
  Chittagong: 15000000,
  Khulna: 5000000,
  Barishal: 2300000,
};

let new_cities = {};

// console.log(cities);

for (const city in cityPopulation) {
  if (city === "Khulna") {
    continue;
  }
  new_cities[city] = cityPopulation[city];
}
console.log(new_cities);
