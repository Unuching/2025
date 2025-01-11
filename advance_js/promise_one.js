let p = new Promise(function (resolve, reject) {
  let isTrue = true;
  if (isTrue) {
    console.log(resolve("Promise resolved"));
  } else {
    console.log(reject("Promise is not resolved"));
  }
});
