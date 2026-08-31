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
let user = []
for(let i=0;i<=10;i++){
    user.push(randomUser())
}
console.log(user);

try {
    connection.query(q,[user],(err,result)=>{
        if(err) throw err
        console.log(result);
        
    })
} catch (error) {
    console.log(error);
}
connection.end()

