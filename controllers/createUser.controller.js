// const createUser = async (req, res) => {
//     console.log(req.body.userName)
//     const user = req.body.userName;
//     const hashedPassword = await bcrypt.hash(req.body.password,10);
  
//     db.getConnection( async (err, connection) => {
  
//       if (err) throw (err)
//       console.log("DB connected " + connection.threadId)
  
//       const sqlSearch = "SELECT * FROM user WHERE user = ?"
//       const search_query = mysql.format(sqlSearch, [user])
  
//       const sqlInsert = "INSERT INTO user VALUES (0,?,?)"
//       const insert_query = mysql.format(sqlInsert,[user, hashedPassword])
  
//       await connection.query (search_query, async (err, result) => {
  
//         console.log(err)
//         console.log("-->Search Results");
//         console.log(result.length);
  
//         if (result.length !=0) {
//           connection.release()
  
//           console.log("--->user already exists")
  
//           res.sendStatus(409)
  
//         }
  
//         else {
//           await connection.query (insert_query, (err, result) => {
//             connection.release()
//             if(err) throw(err)
//             console.log("----> Created new user!")
//             console.log(result.insertId)
//             res.sendStatus(201)
//           }
//         )}
//       })
//     })
//   })