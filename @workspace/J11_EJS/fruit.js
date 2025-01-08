const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
let bowl = ["apple", "banana", "papaya"];
app.get('/', (req, res) => res.render("fruit.ejs" , {fruits:bowl}))


app.listen(port, () => console.log(`Example app listening at http://localhost:3000`))