
// function to calcculate income tax owed
let incomeCalculator = ()=>{
    //initializing local variables
    let income = parseFloat(document.getElementById('income').value); //typecasting string to float for calculations and storing it in 'income' variable. Literals gives Not a Number (NaN) output
    let tax = 0; //initializing variable named 'tax'


    //conditional statements to apply different tax rates based on income brackets
    if (income < 0) {
        alert("Please input a figure greater than zero") //messagebox pops up if inomce is negative
    }
    else if (income <= 10000) {
        tax = 0;
    }
    else if (income <= 40000) {
        tax = (income-10000)*.10;
    }
    else if (income <= 100000) {
        tax = (income - 40000)*.20 + (40000 - 10000)*.10
    }
    else{
        tax = (income-100000)*.30 + (100000 - 40000)*.20 + (40000 - 10000)*.10
    }

    return tax.toFixed(2) //rounding tax figure to 2 decimals
}

let btn = document.getElementById('btn');


//event listener to call incomeCalculator function and update taxOwed variable
btn.addEventListener("click", ()=> {

    let taxOwed = incomeCalculator(); //storing and updating function output in variable 'taxOwed'
    document.getElementById('show').innerText = taxOwed; //updating tax owed figure
})