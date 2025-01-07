const prices = [2.55, 4.66, 45, 3.66];

const total_price = prices.reduce(function (ac, cv) {
  console.log(`${ac} , ${cv}`);

  return ac + cv;
}, 0);
console.log(total_price);
