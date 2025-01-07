// the rest parameter '...args'

function adding(...args) {
  let sum = 0;
  for (const arg of args) {
    sum += arg;
  }
  return sum;
}
//console.log(adding(1,2,3,4,5,6,7,8,9));
function adition(...args) {
  let result = 0;
  for (const nums of args) {
    result += nums;
  }
  return result;
}
console.log(adition(44, 55, 33, 22, 66, 77, 22));
// the rest parameter allows a function to treat a indefinite number as an array
