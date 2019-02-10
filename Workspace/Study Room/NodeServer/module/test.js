var test1Response = require("./data/test1.json");
var test2Response = require("./data/test2.json");
var _ = require("lodash");
//var dbService = require("../service/database");
module.exports = {
  //   testDB: function(req, res) {
  //     dbService.runQuery("select * from customers", {
  //       fn: function(result) {
  //         var obj = {};
  //         obj.correlationId = "";
  //         obj.errorInformationList = "";
  //         obj.referenceDataItemList = [];
  //         obj.sessionId = "";
  //         obj.uuid = "";
  //         obj.referenceDataItemList = _.map(result.recordset, function(element) {
  //           var obj = {};
  //           obj.code = element.CODE;
  //           obj.createdBy = element.CREATED_BY;
  //           obj.createdDt = new Date(element.CREATED_DT);
  //           obj.endDate = new Date(element.END_DATE);
  //           obj.groupName = element.GROUP_NAME;
  //           obj.itemNo = element.ITEM_NO;
  //           obj.modifiedBy = element.MODIFIED_BY;
  //           obj.modifiedDt = new Date(element.MODIFIED_DT);
  //           obj.role = element.ROLE;
  //           obj.startDate = new Date(element.START_DATE);
  //           obj.value = element.VALUE;
  //           return obj;
  //         });
  //         res.json(obj);
  //       }
  //     });
  //   },
  test1: function(req, res) {
    res.json(test1Response);
  },
  test2: function(req, res) {
    res.json(test2Response);
  }
};
