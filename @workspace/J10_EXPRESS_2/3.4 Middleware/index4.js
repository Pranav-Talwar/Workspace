import bodyParser from "body-parser";
import express from "express";

import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var name =""

app.use(bodyParser.urlencoded({ extended: true }));

function band(req,res,next){
  console.log(req.body);
  name = req.body["street"] + req.body["pet"]
  next()
}
app.use(band);


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.post("/submit", (req, res) => {
  res.send(`${req.body["street"]} ${req.body["pet"]}  `)
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
