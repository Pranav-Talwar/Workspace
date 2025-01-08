const express = require("express");
const app = express();

function sum(n,m){
    let ans = n+m;
    return ans;}

app.get("/", function(req, res) {
    const n = req.query.n;
    const m = req.query.m;

    const ans = sum(1,2)
    res.send(ans)});



app.listen(3000);