const express = require("express");
const bodyParser = require("body-parser");
const app = express();
let mysql = require('mysql');  
const { response } = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/test", (request, response) => {
  response.send("node server is still running")
});

// let connection = mysql.createConnection({  
//   host: process.env.HOST,  
//   user: 'root',  
//   password: process.env.PASSWORD,  
//   database: process.env.DATABASE  
// });  
  
// connection.connect((err) => {  
//     if (err) throw err;  
//   console.log('Connected to MySQL Server!');  
// });

app.use(router);

app.listen(process.env.PORT, function serverStart() {
  console.log("node server started on Port 8000")
})