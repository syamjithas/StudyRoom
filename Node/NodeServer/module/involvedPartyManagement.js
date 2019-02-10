var signaturepage = require('./data/signaturepage.json');

module.exports = {
    retrieveSignaturePage: function(req, res) {

        var msg = {
            "uuid": "",
            "correlationId": "",
            "sessionId": "",
            "errorInformationList": null,
            "status": "Success",
            "signaturepage": signaturepage.imgData
        }
        res.json(msg)

    },
    recordSignature: function(req, res) {

        var msg = {
            "uuid": "",
            "correlationId": "",
            "sessionId": "",
            "errorInformationList": null,
            "status": "Success",
            "signaturepage": signaturepage.imgData
        }
        res.json(msg)

    }
}