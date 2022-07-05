const mysql = require("mysql");

const db = mysql.createConnection({
    host: process.env.DB_IP,
    user: process.env.DB_USER_ID,
    password: "1234",
    database: process.env.DB_NAME,
    insecureAuth: true,
})
db.connect();

module.exports = db;