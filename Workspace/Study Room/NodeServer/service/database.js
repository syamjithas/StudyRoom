const oracledb = require("oracledb");
const config = {
  user: "default", // Update me
  password: "oracle$", // Update me
  connectString: "localhost:1521/xe" // Update me
};

async function getEmployee(empId) {
  let conn;

  try {
    conn = await oracledb.getConnection(config);

    const result = await conn.execute(
      "select * from employees where employee_id = :id",
      [empId]
    );

    console.log(result.rows[0]);
  } catch (err) {
    console.log("Ouch!", err);
  } finally {
    if (conn) {
      // conn assignment worked, need to close
      await conn.close();
    }
  }
}

getEmployee(101);
// var Master = require("./Master");
// var threadStarter = new Master();
// threadStarter.start(1);

// module.exports = {
//   runQuery: function(query, callback) {
//     threadStarter.runQuery(query, callback);
//   }
// };

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
