
module.exports = {
    getApplicableProductList: function (req, res) {

        var msg = { "uuid": null, "correlationId": null, "sessionId": null, "errorInformationList": null, "productMatchList": [{ "classCode": 301, "description": "SV-Individual-Res-INTB-USD" }, { "classCode": 305, "description": "SV-Mustaqbali-Ind-USD" }, { "classCode": 313, "description": "SV-Al Dana-Res-USD" }] }
        res.json(msg)
    }
}