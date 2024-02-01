const express = require("express");
const ejs = require("ejs");
const path = require("path");

const Port = 3000;

const app = express();

// app.use("view engine", ejs);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/dogs", (req, res) => {
  res.send("<h1>bow bow!!!!!!</h1>");
});

app.listen(Port, () => {
  console.log("listening on port 3000");
});
