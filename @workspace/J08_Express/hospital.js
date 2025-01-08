const express  = require("express");
const app = express();
const users = [{
    name: "john",
    kidneys: [{
        healthy : false
    }]
}
]

app.get("/" , function (req,res){
    const johnk = users[0].kidneys;
     const numberofKidneys = johnk.length;
    let number0fHealthyKidneys = 0;
    for (let i = 0; i<johnk. length; i++) {
        if (johnk [i].healthy) {
        number0fHealthyKidneys = number0fHealthyKidneys + 1;

        }
    } 
    const number0fUnhealthyKidneys = numberofKidneys - number0fHealthyKidneys
    res.json({
        numberofKidneys,
        number0fHealthyKidneys,
        number0fUnhealthyKidneys
    })
})
app.use(express.json()
);
app.post("/" , function (req,res){  

   const isHealthy = req.body.isHealthy;  
   users[0].kidneys.push({
    healthy: isHealthy
   })
   res.json({
    msg:"done"
   })
})
app.put("/" , function (req,res){

  for (let i=0 ; i<users[0].kidneys.length; i++){
    users[0].kidneys[i].healthy= true;
  }
  res.json({
   })
 })
 app.delete("/" , function (req,res){
     
    const newKidneys= [];
    for (let i=0 ; i<users[0].kidneys.length; i++){
      if(users[0].kidneys[i].healthy){
        newKidneys.push({
            healthy:true

        })
      }
    }
    users[0].kidneys = newKidneys;
    res.json({msg:"ok"
     })
   })
app.listen(3001);