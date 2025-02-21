const express = require('express')
const app = express()
const port = 3001
const mongoose = require('mongoose');

const path = require("path");

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

mongoose.connect('mongodb://localhost:27017/practise', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB Connection Succeeded.');
}).catch((err) => {
    console.error('Error in DB connection:', err);
});

 
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");app.use(express.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/', (req, res) => {
    console.log(req.body)
    res.json({ success: true })
})

app.listen(port, () => console.log(`Example app listening at http://localhost:3001`))