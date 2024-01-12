const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello I am using Docker boom");
});

app.listen(3000, () => {
  console.log("Listening on port 3000...");
});
