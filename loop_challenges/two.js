let places = ["Rangamati", "Khagrachari", "Bandarban"];
let visited_places = [];
for (let p = 0; p < places.length; p++) {
  if (places[p] === "Bandarban") {
    continue;
  }
  visited_places.push(places[p]);
}
console.log(visited_places);
