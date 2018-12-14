var validateLoginReponse = require('./data/utilitymanagement_validateLogin.json');

module.exports = {
    validateLogin: function (req, res) {
        response = getLoginRespinse(req.body.login.loginId)

        res.json(validateLoginReponse)
    }
}
function getLoginRespinse(userId) {
    userId = userId.toUpperCase();
    var userData = userList[userId];
    validateLoginReponse.user.branchCode = userData.branchCode;
    validateLoginReponse.user.branchName = userData.branchName;
    validateLoginReponse.user.branchType = userData.branchType;
    validateLoginReponse.user.empId = userData.empId;
    validateLoginReponse.user.role = userData.role;
    validateLoginReponse.user.userName = userData.userName;
}

var userList = {
    "ARFA0202": {
        "branchCode": "99",
        "branchName": "Head Office",
        "branchType": "Conventional",
        "empId": 956,
        "role": "DSA Conv,AML,ASU",
        "userName": "Arefa Al Hashimi"
    }
}