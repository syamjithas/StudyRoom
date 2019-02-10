const sql = require('mssql')
var config = {
    user: 'COBUAT',
    password: 'COBUAT$2016',
    server: '172.16.60.195',
    driver: 'tedious',
    database: 'PL_APP_UAT',
    options: {
        instanceName: 'SQL2014',
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000,
        encrypt: true
    }
};

var Master = require('./Master');
var threadStarter = new Master();
threadStarter.start(1)

module.exports = {
    runQuery: function (query, callback) {
        threadStarter.runQuery(query, callback)
    }
}


// module.exports = {
//     runQuery: function (query, callback) {
//         var connectPool = new sql.ConnectionPool(config).connect().then(pool => {
//             return pool.request().query(query)
//         }).then(result => {
//             callback.fn(result);
//         }).catch(err => {
//         })
//     }
// }