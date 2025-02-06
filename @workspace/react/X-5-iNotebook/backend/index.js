const connectToMongo = require('./db');
const express = require('express')
connectToMongo();

const app = express()
const port = 5000

app.use(express.json())
app.use('/api/auth', require ('./routes/auth'))
app.use('/api/notes', require ('./routes/notes'))
 

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/', (req, res) => {
    console.log(req.body)
    res.json({ success: true })
})  

app.listen(port, () => console.log(`iNotebook backend listening at http://localhost:5000`))