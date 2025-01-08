var d = new promise(function(s){
    s(x)
})

function x(){
    return 1 ; 
}

console.log(d)

var d = new Promise(resolve => resolve(1));  // Directly resolving with 1

d.then(console.log(d));  // Directly passing console.log as the success handler

var x = new Promise (function(resolve ){               
   setTimeout(function(){
    resolve("foo");}
    , 1000);
});
function callback(data) {
    console.log("aaa");
    console.log(data);
    console.log("aaa");


}
console.log(x);
x.then(callback)