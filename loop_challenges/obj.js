const myObject = {
  js: "javascript",
  py: "Python",
  cpp: "C++",
  rb: "Ruby on rails",
};
for (const key in myObject) {
  //console.log(`${key} : ${myObject[key]}`);
}

for (const key in myObject) {
  console.log(`${key} stands for ${myObject[key]}`);
}
