var retrieveReferenceDataItemReponse = require('./data/masterdatamanagement_retrieveReferenceDataItem.json');
var retrieveMasterDataReponse = require('./data/masterdatamanagement_retrieveMasterData.json');
var _ = require('lodash');
var dbService = require('../service/database');
module.exports = {
    retrieveReferenceDataItem: function (req, res) {
        // var groupName = req.body.groupName;
        // response = JSON.parse(JSON.stringify(retrieveReferenceDataItemReponse));
        // response.referenceDataItemList = _.filter(response.referenceDataItemList, { 'groupName': groupName })
        // res.json(response);
        dbService.runQuery("select * from T_REFERENCE_DATA_ITEM where GROUP_NAME ='ReworkReason' and role ='CA'", {
            fn: function (result) {
                var obj = {}
                obj.correlationId = "";
                obj.errorInformationList = "";
                obj.referenceDataItemList = [];
                obj.sessionId = "";
                obj.uuid = "";
                obj.referenceDataItemList = _.map(result.recordset, function (element) {
                    var obj = {}
                    obj.code = element.CODE
                    obj.createdBy = element.CREATED_BY
                    obj.createdDt = new Date(element.CREATED_DT)
                    obj.endDate = new Date(element.END_DATE)
                    obj.groupName = element.GROUP_NAME
                    obj.itemNo = element.ITEM_NO
                    obj.modifiedBy = element.MODIFIED_BY
                    obj.modifiedDt = new Date(element.MODIFIED_DT)
                    obj.role = element.ROLE
                    obj.startDate = new Date(element.START_DATE)
                    obj.value = element.VALUE
                    return obj
                })
                res.json(obj);
            }
        })
    },
    retrieveMasterData: function (req, res) {
        res.json(retrieveMasterDataReponse[req.body.listName]);
    }
}