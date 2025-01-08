class BankAccount {
    #balance = 1222;
    deposit(amount){
        this.#balance += amount
        return this.#balance
    }
    getBalance(){
        return `money = ${this.#balance}`;
    }
}
let acc = new BankAccount 
console.log(acc.getBalance())
  