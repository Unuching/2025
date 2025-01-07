const myChamber = {
  electro1: "Ultrasound Therapy",
  electro2: "Traction Machine",
  electro3: "TENS",
  get item() {
    return this.electro1;
  },
  get item2() {
    return this.electro2;
  },
};
//console.log(myChamber.item2);


const myFamily ={
    father: "Mongsanu",
    mother: "Sanai",
    me :"no",

    set member(value){
        this.me = value
    }
}

myFamily.me = "Unuching"

console.log(myFamily.me);
