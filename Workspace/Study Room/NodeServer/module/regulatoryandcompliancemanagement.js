var evaluatelendingoriginationReponse = require('./data/regulatoryandcompliancemanagement_evaluatelendingorigination');

module.exports = {
    evaluatelendingorigination: function (req, res) {
        res.json(evaluatelendingoriginationReponse);
    }
}