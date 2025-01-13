let request = fetch("https://course-api.com/react-store-products");

request
  .then(function (response) {
    console.log(response);
    return response.json;
  })
  .then(function (data) {
    console.log(data);
  });
