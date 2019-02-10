var express = require("express");
var router = express.Router();
var app = express();

/* GET home page. */
router.get("/test", function(req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = app;
