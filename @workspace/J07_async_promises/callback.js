const delay = (nw,delayy, doNext) =>{
    setTimeout(()=> {
        console.log(nw) ;
         doNext();
    }, delayy)
}
delay (5 , 1000,()=>{
    delay (4 , 1000,()=>{
        delay (3 , 1000,()=>{
            delay (2 , 1000,()=>{
                delay (1 , 1000,()=>{
                    console.log("booooom"); 

                })
            })
        })
    })
})







const dela = (n , tim) => {
    setTimeout(() => {
    console.log(n); }, tim)
}
dela(5 , 1000);
dela(4 , 2000);
dela(3 , 3000);
dela(2 , 4000);
dela(1 , 5000);