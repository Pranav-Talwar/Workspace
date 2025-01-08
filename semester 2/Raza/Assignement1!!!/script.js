



let incomeCalculator = ()=>{
    let income = parseFloat(document.getElementById('income').value);
    let tax = 0;
    if (income <= 10000) {
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

    return tax.toFixed(2)
}


let btn = document.getElementById('btn');

btn.addEventListener("click", ()=> {
    let taxOwed = incomeCalculator()
    document.getElementById('show').innerText = taxOwed;
})