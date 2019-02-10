var express = require("express");
var bodyParser = require("body-parser");

var test = require("./module/test");

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//app.post("/testDB", test.testDB);
app.post("/test1", test.test1);
app.post("/test2", test.test2);

app.set("port", 3002);
app.listen(app.get("port"));

module.exports = app;
