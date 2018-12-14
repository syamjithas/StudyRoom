var express = require('express');
var socket_connector = require('./app/service/socket-connector')
var main = require('./app/main')

var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = 3000;
socket_connector.init(io);

app.use(function(req, res, next) {
    var nodeSSPI = require('node-sspi')
    var nodeSSPIObj = new nodeSSPI({
        retrieveGroups: true
    })
    nodeSSPIObj.authenticate(req, res, function(err) {
        res.finished || next()
    })
})
app.use(function(req, res, next) {
    var out =
        'Hello ' +
        req.connection.user +
        '! Your sid is ' +
        req.connection.userSid +
        ' and you belong to following groups:<br/><ul>'
    if (req.connection.userGroups) {
        for (var i in req.connection.userGroups) {
            out += '<li>' + req.connection.userGroups[i] + '</li><br/>\n'
        }
    }
    out += '</ul>'
    res.send(out)
})

server.listen(port, () => {});
main.init(app);


module.exports = app;