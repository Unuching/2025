const person = {
    fullname(city, country){
        return this.fName + " " + this.lName+ " "+ city+ " " + country
    }
}
let p1 ={
    fName: "Unuching",
    lName: "Marma"
} 
let p2 = {
  fName: "Mrachingnu",
  lName: "Marma",
}; 

console.log(person.fullname.call(p2, "ramgarh", "Bangladesh"));
