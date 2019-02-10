var express = require('express');
var bodyParser = require('body-parser')

var involvedPartyManagement = require('./module/involvedPartyManagement');
var casemanagement = require('./module/casemanagement.js');
var utilitymanagement = require('./module/utilitymanagement.js');
var resourceitemmanagement = require('./module/resourceitemmanagement.js');
var applicationmanagement = require('./module/applicationmanagement.js');
var regulatoryandcompliancemanagement = require('./module/regulatoryandcompliancemanagement.js');
var masterdatamanagement = require('./module/masterdatamanagement.js');


var app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/LORest/rest/utilitymanagement/validateLogin', utilitymanagement.validateLogin)
app.post('/LORest/rest/involvedpartymanagement/retrieveSignaturePage', involvedPartyManagement.retrieveSignaturePage)
app.post('/LORest/rest/involvedpartymanagement/recordSignature', involvedPartyManagement.recordSignature)
app.post('/LORest/rest/casemanagement/retrieveworklist', casemanagement.retrieveworklist);
app.post('/LORest/rest/casemanagement/submitapplication', casemanagement.submitapplication);
app.post('/LORest/rest/casemanagement/retrieveApplicationPortfolio', casemanagement.retrieveApplicationPortfolio);
app.post('/LORest/rest/resourceitemmanagement/retrievedocumentset', resourceitemmanagement.retrievedocumentset);
app.post('/LORest/rest/applicationmanagement/retrieveActionForRole', applicationmanagement.retrieveActionForRole);
app.post('/LORest/rest/regulatoryandcompliancemanagement/evaluatelendingorigination', regulatoryandcompliancemanagement.evaluatelendingorigination);
app.post('/LORest/rest/applicationmanagement/retrieveReviewComment', applicationmanagement.retrieveReviewComment);
app.post('/LORest/rest/masterdatamanagement/retrieveReferenceDataItem', masterdatamanagement.retrieveReferenceDataItem);
app.post('/LORest/rest/masterdatamanagement/retrieveMasterData', masterdatamanagement.retrieveMasterData);

app.post('/test', masterdatamanagement.retrieveReferenceDataItem);


app.set('port', 3002);
app.listen(app.get('port'));


module.exports = app;
