let lottery = new Promise(function (resolve, reject) {
  console.log("Lottery is ongoing");

  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve("You won");
    } else {
      reject(new Error("better luck next time"));
    }
  }, 2000);
});
lottery
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
