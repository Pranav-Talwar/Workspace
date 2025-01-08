const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({extended: true}))

app.use(express.json())

app.get('/tacos', (req, res) =>res.send('GET /tacos response'))

app.post('/tacos', (req, res) =>{
    console.log(req.body);
    res.send('GET /tacos response')})


app.listen(port, () => console.log(`Example app listening at http://localhost:3000/taco`))