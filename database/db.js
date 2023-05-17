const mysql = require('mysql2')

const dotenv = require('dotenv')
dotenv.config({path:'./env/.env'})

const pool = mysql.createPool({
    host:process.env.host,
    user:process.env.user,
    password:process.env.password,
    database:process.env.database
})


module.exports = pool