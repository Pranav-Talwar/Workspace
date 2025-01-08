const express = require('express')
const app = express()
const port = 3001

app.use(express.json())

app.get('/', (req, res) => {
    const today = new Date();
    let day = today.getDay();
    let type = "a weekend"
    let adv = "restup"
    console.log(day);
    if (day!==0 &&  day!==6){
        type = "weekday";
        adv = "getup";
    }
    // console.log(day);
    res.render("index.ejs",{
        day: type,
        advice: adv
})})


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))  