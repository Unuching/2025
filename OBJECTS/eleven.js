const me = {
  fullName: "Unuching Marma",
  age: 32,
};
// Object.preventExtensions(me);
me.nationality = "Marma";
let text = "";
try {
  me.nationality = "Marma";
} catch (err) {
  text = "error_text";
}
//console.log(me.nationality);


const people = ["Unu", "Mema"]

Object.preventExtensions(people)
// people.push("Cheng")

//console.log(people);
let result = Object.isExtensible(people)
console.log(result);
