var retrieveworklistReponse = require('./data/casemanagement_retrieveworklist.json');
var retrieveApplicationPortfolioReponse = require('./data/casemanagement_retrieveApplicationPortfolio.json');

module.exports = {
    retrieveworklist: function (req, res) {
        res.json(retrieveworklistReponse);
    },
    retrieveApplicationPortfolio: function (req, res) {
        res.json(retrieveApplicationPortfolioReponse);
    },
    submitapplication: function (req, res) {
        setTimeout(function () {
            res.json({ "text": "code" });
        }, 500)
    }
}