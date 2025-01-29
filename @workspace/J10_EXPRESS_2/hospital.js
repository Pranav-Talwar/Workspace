const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
var users = [ {
    name : "john",
    kidneys:[{
        healthy:false
    }]
}]
app.get('/', (req, res) => {
    const johnKidneys = users[0].kidneys
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for (let index = 0; index < johnKidneys.length; index++) {
        if (johnKidneys[index].healthy) {
            numberOfHealthyKidneys += 1
        }
    }
    let numberOfUnhealthyKidneys = numberOfKidneys-numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
}
)

app.post('/', (req, res) => {
      
})

app.listen(port, () => console.log(`Example app listening at http://localhost:3000`))