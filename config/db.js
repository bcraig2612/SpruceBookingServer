const mysql = require("mysql");

// Create connection
const db = mysql.createConnection({
  host: "remotemysql.com",
  user: "aFcAXZ9CCM",
  password: "Tpe2cPUHk0",
  database: "aFcAXZ9CCM",
});

module.exports = db;