const express = require("express");

const PORT = process.env.PORT || 9000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(PORT, () => {
  console.log("Server listending on port " + PORT);
});
