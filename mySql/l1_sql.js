import mysql from 'mysql2'

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"newOne",
    password:"karan@675"
})
 
try {
    connection.query("SHOW TABLES",(err,result)=>{
        if(err) throw err
        console.log(result);
        
    })
} catch (error) {
    console.log(error);
}
connection.end()