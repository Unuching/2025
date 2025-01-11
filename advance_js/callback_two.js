function getData(callBack) {
  setTimeout(() => {
    let data = { id: 1, Name: "Unu" };
    callBack(data);
  }, 2000);
}
getData((data) => {
  console.log("Data Received", data);
});
