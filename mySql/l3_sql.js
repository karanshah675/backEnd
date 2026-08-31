import mysql from 'mysql2'
import {randomUser} from './faker.js'
const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"newOne",
    password:"karan@675"
})
// let q =`insert into user values(${d},)`
let q ="insert into user (id,username,email,password) values ?"
let user = [["2","karan1","k@6751","k2221"],["3","karan13","k@67513","k22213"]]
try {
    connection.query(q,[user],(err,result)=>{
        if(err) throw err
        console.log(result);
        
    })
} catch (error) {
    console.log(error);
}
connection.end()

