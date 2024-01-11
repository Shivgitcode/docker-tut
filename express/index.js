const express = require("express");
const app = express();

app.get("/dogs", (req, res) => {
  res.send("my server is working woof");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
