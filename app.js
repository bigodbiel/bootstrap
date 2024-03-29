const express = require("express");
require("dotenv").config();
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "/node_modules/bootstrap/")));
app.use("/public", express.static(path.join(__dirname, "/public")));

app.get("/:id", (req, res) =>
  res.sendFile(path.join(__dirname, "/", `${req.params.id}`))
);

app.listen(process.env.PORT, () => {
  console.log(`it is working ${process.env.PORT}`);
});
