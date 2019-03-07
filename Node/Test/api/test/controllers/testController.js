"use strict";
var _ = require("lodash");
const db = require("../../../util/dbConnection");

exports.testGet = function(req, res) {
  db("select * from customers", function(result) {
    var obj = {};
    obj.correlationId = "";
    obj.errorInformationList = "";
    obj.referenceDataItemList = [];
    obj.sessionId = "";
    obj.uuid = "";
    obj.customers = _.map(result.rows, function(element) {
      var obj = {};
      obj.id = element[0];
      obj.name = element[1];
      obj.city = element[2];
      return obj;
    });
    res.json(obj);
  });
};

exports.testPost = function(req, res) {
  db("select * from customers", function(result) {
    res.json(result.rows);
  });
};
