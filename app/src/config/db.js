const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "vovo",
    password: "1234",
    database: "login_lecture",
})
db.connect();

module.exports = db;