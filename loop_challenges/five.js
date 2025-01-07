let family = ["Unuching", "Chengchengnu", "Mema", "Nunu"];

let new_family = [];

family.forEach((member) => {
  if (member === "Mema") {
    return;
  }
  new_family.push(member);
});
console.log(new_family);
