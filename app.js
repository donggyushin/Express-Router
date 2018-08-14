var express = require("express");
var app = express();

var p1 = require("./routes/p1");
var p2 = require("./routes/p2");

app.use("/p1", p1);
app.use("/p2", p2);

app.listen(8081, () => {
  console.log("listening at 8081");
});
