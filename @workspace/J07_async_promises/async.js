const { log } = require("async");


console.log("hi there");

setTimeout(function() {
    console.log("from inside async fn")

}, 5000);

setTimeout(function() {
    console.log("from inside async fn")

}, 3000);

let a = 0;for (let i = 0; i<10000000000; i++) {
a = a + i;
}
console.log(a);

 function findsum(n){
    let a = 0;
    for (let i=0 ; i<n; i++){
        a+=i;
    }
    return a;
}

function sum(){
    findsum(100)
}
setTimeout(sum,3000)
console.log("herllo")


function one(s){
    console.log("d");
     s()  
     
     s() ;
     s() 
     s() 
}
function y(){
console.log("ss");
}

one(y)