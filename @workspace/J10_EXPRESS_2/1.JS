const express = require("express");
const app = express();
app.get("/r/:site" , (req , res )=> {
    const {site} = req.params;

    res.send(`this is ${site}.com `)
})
app.listen(3000 , console.log("ok")) 