//let a = 0;

function nums() {
  let a = 0;
  return (a += 2);
}
nums();
nums();
//console.log(nums());

function car() {
  function newCar() {
    let carname = "Toyota";
    //console.log(carname);
  }
  newCar();
}
car();


function out(){
    let username = "Unu"
    function inner(){
        console.log(username);
        
    }
     return inner
}
const newname = out()
console.log(newname);
