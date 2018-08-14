var express = require("express");
var app = express();

var p1 = express.Router();
app.use("/p1", p1);

p1.get("/r1", (req, res) => {
  res.send("p1 r1");
});
p1.get("/r2", (req, res) => {
  res.send("p1 r2");
});

var p2 = express.Router();
app.use("/p2", p2);

p2.get("/r1", (req, res) => {
  res.send("p2 r1");
});
p2.get("/r2", (req, res) => {
  res.send("p2 r2");
});
app.listen(8081, () => {
  console.log("listening at 8081");
});
