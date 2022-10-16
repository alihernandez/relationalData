const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = require("./routes/route");
const db  = require("./database/config");
let mysql = require('mysql2');  
// const { response } = require("express");
const bcrypt = require("bcrypt");
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

app.post("/createUser", async (req, res) => {

  const user = req.body.userName;
  const hashedPassword = await bcrypt.hash(req.body.password,10);

  db.query( async (err, connection) => {

    if (err) throw (err)
    console.log(err)
    console.log("DB connected " + connection.threadId)

    const sqlSearch = "SELECT * FROM user WHERE user = ?"
    const search_query = mysql.format(sqlSearch, [user])

    const sqlInsert = "INSERT INTO user VALUES (0,?,?)"
    const insert_query = mysql.format(sqlInsert,[user, hashedPassword])

    await connection.query (search_query, async (err, result) => {

      console.log(err)
      console.log("-->Search Results");
      console.log(result.length);

      if (result.length !=0) {
        connection.release()

        console.log("--->user already exists")

        res.sendStatus(409)

      }

      else {
        await connection.query (insert_query, (err, result) => {
          connection.release()
          if(err) throw(err)
          console.log("----> Created new user!")
          console.log(result.insertId)
          res.sendStatus(201)
        }
      )}
    })
  })
})

app.use(router);

app.listen(process.env.PORT, function serverStart() {
  console.log("node server started on Port ")
})