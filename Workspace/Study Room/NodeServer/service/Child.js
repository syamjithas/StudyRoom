var Child;
const sql = require('mssql')
var config = {
    user: 'COBUAT',
    password: 'COBUAT$2016',
    server: '172.16.60.195',
    driver: 'tedious',
    database: 'PL_APP_UAT',
    options: {
        instanceName: 'SQL2014',
        max: 20,
        min: 10,
        idleTimeoutMillis: 30000,
        encrypt: true
    }
};

module.exports = Child = function (args) {
    this.pid = process.pid;
};

Child.prototype.start = function (config) {
    var that = this;
    process.signalCode = 1;
    var promise = new sql.ConnectionPool(config).connect();
    promise.then(function (pool) {
        that.pool = pool;
    })
    // new sql.ConnectionPool(config).connect().then(pool => {
    //     return pool.request().query(query)
    // })
    process.on('message', function (query) {
        that.pool.request().query(query).then(result => {
            process.send({
                data: result
            });
            process.signalCode = 0;
        }).catch(err => {
            process.signalCode = 0;
        })
    });
    // process.kill(this.pid);
    // this.interval = setInterval(this.sendMessageToMaster.bind(this), this.intervalDelay);
    // this.sendMessageToMaster();
};


var c = new Child();
c.start(config);

process.on('disconnect', function () {
    process.kill();
});