function car (make , model ){
    this.make = make;
    this.model = model;
    this.decribe = function(){
        return `this is a cup of ${this.make}`;
    };
}
let a = new car("tata" , "nano")
let b = new car("aa", "nano")
console.log(a.decribe()) 

car.prototype.tyres = function(){
    return `number ${this.make}`;
}

console.log(b.tyres())
