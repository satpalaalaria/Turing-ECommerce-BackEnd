const mysql = require("mysql");
require('dotenv').config()

var con = mysql.createConnection({
    host: process.env.db_host,
    user: process.env.db_user,
    password: process.env.db_pass
});

con.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("database connected....")
    }
})

var knex = require('knex')({
    client: "mysql",
    connection: {
        host: process.env.db_host,
        user: process.env.db_user,
        password: process.env.db_pass,
        database: process.env.db_base
    }
})

module.exports = knex;