class My_Bike {
    constructor(brand){
        this.brand = brand
    }
    get bike_name(){
        return this.brand
    }
    set bike_name(x){
        return this.brand = x
    }
}

const bike = new My_Bike("yamaha")
console.log(bike.bike_name);
