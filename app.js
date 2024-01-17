const express = require("express");
require("dotenv").config();
const app = express();

app.get("/", (req, res) => res.send("your site"));
app.listen(PORT, () => {
  console.log("it is working");
});
