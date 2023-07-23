const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 3000;
const app = express();
const apiData = require("../apiData.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello");
});
app.get("/Services", (req, res) => {
  res.send(apiData);
});

app.listen(port, () => {
  console.log("Server is runing on port 3000");
});
