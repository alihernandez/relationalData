require("dotenv").config();

let mysql = require('mysql');  
let connection = mysql.createConnection({  
  host: process.env.HOST,  
  user: 'root',  
  password: process.env.PASSWORD,  
  database: process.env.DATABASE  
});  
  
connection.connect((err) => {  
    if (err) throw err;  
  console.log('Connected to MySQL Server!');  
});