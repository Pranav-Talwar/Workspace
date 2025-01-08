class coffeemachine{
    start(){
        return `starting`
    }
    brew(){
        return`brewing`
    }
    button(){
       let a =  this.start()
       let b = this.brew()
       return`${a}  ${b}`
    }
}
let mymachine = new coffeemachine();
console.log(mymachine.button());
