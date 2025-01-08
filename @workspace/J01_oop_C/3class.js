function car (make , model ){
    this.make = make;
    this.model = model;
    this.decribe = function(){
        return `this is a  ${this.make}`;
    };
}



// console.log(b.tyres())

 class vehicle {
     constructor(make,model){
        this.make = make
        this.model = model

     }

     start(){
        return`${this.model} is a car from ${this.make}`
     }
}

class car1 extends vehicle {
    constructor(make, model) {
        super(make, model); // Initialize the parent class properties
    }
    drive(){
        return`${this.make} this `
    }
}
let ma = new car1f("toyoy", "aaa");
console.log(ma.drive());
console.log(ma.start());