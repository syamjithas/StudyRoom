"use strict";
var testController = require("../controllers/testController");

module.exports = function(app) {
  app.get("/testGet", testController.testGet);
};
