const oracledb = require("oracledb");
oracledb.poolMax = 100;
oracledb.poolMin = 2;
oracledb.poolPingInterval = 60;

const config = {
  user: "SYSTEM", // Update me
  password: "oracle$", // Update me
  connectString: "localhost:1521/xe" // Update me
};
module.exports = async function(query, callback) {
  let conn;
  try {
    conn = await oracledb.getConnection(config);
    const result = await conn.execute(query);
    callback(result);
  } catch (err) {
    console.log("Ouch!", err);
  } finally {
    if (conn) {
      await conn.close();
    }
  }
};
