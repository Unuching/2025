let district_names = ["Chittagong", "Rangamati", "Dhaka", "Khulna", "Barishal"];
let selected_district = [];

for (let d = 0; d < district_names.length; d++) {
  selected_district.push(district_names[d]);
  if (district_names[d] === "Dhaka") {
    break;
  }
}
console.log(selected_district);
