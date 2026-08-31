import mysql from 'mysql2'
 
const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"newOne",
    password:"karan@675"
})
 
let q ="insert into user (id,username,email,password) values (?,?,?,?)"
let user = ["1","karan","k@675","k222"]
try {
    connection.query(q,user,(err,result)=>{
        if(err) throw err
        console.log(result);
        
    })
} catch (error) {
    console.log(error);
}
connection.end()