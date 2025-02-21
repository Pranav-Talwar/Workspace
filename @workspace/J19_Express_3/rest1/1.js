const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const { v4: uuid } = require("uuid");
uuid();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

let comments = [
  {
    id: uuid(),
    username: "todd",
    comment: "lol bro",
  },
  {
    id: uuid(),
    username: "rodd",
    comment: " bro",
  },
  {
    id: uuid(),

    username: "fodd",
    comment: "mmm bro",
  },
];
app.get("/comments", (req, res) => {
  res.render("comments/1", { comments });
});
app.get("/tacos", (req, res) => res.send("Hello World!"));
app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});
app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/show", { comment });
});
app.get("/comments/:id/edit", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/edit", { comment });
});  
app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ id: uuid(), username, comment });
  res.redirect("/comments");
});
app.put("/comments/:id", (req, res) => {
  const { id } = req.params;
  const newcomment = req.body.comment;
  const fcomment = comments.find((c) => c.id === id);
  fcomment.comment = newcomment;
  res.redirect("/comments"); 

});
app.delete("/comments/:id", (req, res) => {
  const { id } = req.params;
comments = comments.filter(c=>c.id !==id)  
  res.redirect("/comments"); 

});

app.post("/tacos", (req, res) => {
  const { meat, qty } = req.body;
  res.send(`${qty}${meat}'s`);
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:3000`)
);
