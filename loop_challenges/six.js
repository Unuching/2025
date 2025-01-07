let members = ["Unuching", "Anurag", "Rashis", "Candy", "Supreme"];

let new_members = [];

members.forEach((mem) => {
  if (mem === "Candy") {
    return;
  }
  new_members.push(mem);
});
console.log(new_members);
