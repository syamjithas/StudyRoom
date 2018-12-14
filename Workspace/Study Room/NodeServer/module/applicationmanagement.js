var retrieveActionForRoleReponse = require('./data/applicationmanagement_retrieveActionForRole.json');
var retrieveReviewCommentReponse = require('./data/applicationmanagement_retrieveReviewComment.json');
module.exports = {
    retrieveActionForRole: function (req, res) {
        res.json(retrieveActionForRoleReponse);
    },
    retrieveReviewComment: function (req, res) {
        res.json(retrieveReviewCommentReponse);
    }
}