let mysql = require('mysql2');  

const config = mysql.createPool({
        connectionLimit:100,
        host: process.env.HOST,  
        user: process.env.USER,  
        password: process.env.PASSWORD,  
        database: process.env.DATABASE,
        port: process.env.PORT
})

console.log("mysql pool");

module.exports = config;