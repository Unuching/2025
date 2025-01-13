//callback hell
setTimeout(function () {
  console.log("One Second");
  setTimeout(function () {
    console.log("Two seconds");
    setTimeout(function () {
      console.log("Three seconds");
      setTimeout(function(){
        console.log("Four seconds");
        
      },1000)
    }, 1000);
  }, 1000);
}, 1000);
