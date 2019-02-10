var Master;
var cp = require('child_process');
var events = require('events');
var path = require('path');
var util = require('util');
var _ = require('lodash');

var pidStart = 9230;

//child.fork(__dirname + '/task.js',[],{execArgv:['--inspect=xxxx']});
// var debug = typeof v8debug === 'object';
// if (debug) {
//     Set an unused port number.    
//     process.execArgv.push('--debug=' + (40894));
// }


module.exports = Master = function () {
    this.threads = [];
};

util.inherits(Master, events.EventEmitter);

Master.prototype.createThread = function () {
    var child, that = this;
    var onError = function (e) {
        that.emit('event', 'child error', this.pid, e);
    }, onDisconnect = function (e) {
        that.emit('event', 'child disconnect', this.pid, 'killing...');
        this.kill();
        that.threads = _.remove(that.threads, { pid: this.pid });
    };
    child = cp.fork(__dirname + path.sep + 'Child.js', [])//, { execArgv: ['--inspect-brk=' + pidStart++] })
    child.on('error', onError);
    child.on('disconnect', onDisconnect);
    child.signalCode = 0;
    child.setMaxListeners(100)
    that.threads.push(child);
    return child;
}

Master.prototype.start = function (number) {
    var that = this;
    for (i = 0; i < number; i++) {
        that.threads.push(that.createThread());
    }
};

Master.prototype.runQuery = function (query, callback) {
    var that = this;
    var thread = that.threads[Math.floor(Math.random() * that.threads.length)];
    //var thread = _.find(that.threads, { signalCode: 0 })
    var fn = function (message) {
        callback.fn(message.data);
        this._events.message = null;
        this.removeAllListeners()
    }
    thread.on('message', fn);
    thread.send(query);
    if (!thread) {
        that.createThread() && that.runQuery(query, callback);
    }
}


Master.prototype.stop = function (pid) {
    var that = this;
    if (typeof pid === 'undefined') {
        that.threads.forEach(function (item, i, arr) {
            item.disconnect();
        });
    } else {
        var thread = _.find(that.threads, { pid: pid })
        thread && thread.disconnect();
    }
};

Master.prototype.destroy = function () {
    process.kill();
};
