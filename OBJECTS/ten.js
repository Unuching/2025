const districts = {
  d1: "Khagrachari",
  d2: "Rangamati",
  d3: "Bandarban",
  get dist() {
    return this.d2.toUpperCase();
  },
};

console.log(districts.dist);
