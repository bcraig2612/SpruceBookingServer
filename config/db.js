const mysql = require("mysql");

// Create connection
const db = mysql.createConnection({
  host: "us-cdbr-east-05.cleardb.net",
  user: "b30ac96e83e703",
  password: "e21f7e08",
  database: "heroku_9c56d0e4aa9ad4b",
});

module.exports = db;