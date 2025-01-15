function dataOne() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Got first Data");
    }, 2000);
  });
}
function dataTwo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Got Second Data");
    }, 5000);
  });
}

async function allData() {
  try {
    let d1 = await dataOne();
    console.log(d1);
    let d2 = await dataTwo();

    console.log(d2);
  } catch (error) {
    console.log("Error Fetching data", error);
  }
}
allData();
