function display_this(hi) {
  //console.log(hi);
}
function first() {
  display_this("Hello");
}
function second() {
  display_this("My World");
}
second();
first();


function myCalc(num1, num2){
    let sum = num1+ num2
    return sum
}
let result = myCalc(4,8)
showThis(result)
function showThis(result){
    //console.log(result);
 
}


function mydisplay(some){
    console.log(some);
    
}

function addition(a,b, myCallback){
    let add = a* b
    myCallback(add)
}
addition(2,3,mydisplay)