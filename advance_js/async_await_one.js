const fetchAPI = async function () {
  const res = await fetch("https://cat-fact.herokuapp.com/facts");
  const data = await res.json();
  console.log(data);
};
fetchAPI();
console.log("FIRST");
