const express =  require('express')
const mysql = require('mysql2')
const app = express()
const path = require('path')
const port = 8080
const methodOverride = require('method-override')
const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"newOne",
    password:"karan@675"
})

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"/views"))
app.use(methodOverride('_method'))

app.listen(port,()=>{
    console.log("server started");
    
})
app.get("/",(req,res)=>{
    let q = "SELECT COUNT(*) FROM user;"
    try {
        connection.query(q,(err,result)=>{
            if(err)throw err
            let count = result[0]["COUNT(*)"]
            // res.send("toatal user "+ result[0]["COUNT(*)"])
            res.render("home.ejs",{count})
        })
    } catch (error) {
        console.log(error);
    }
})
app.get("/user",(req,res)=>{
    let q = "SELECT * FROM user ORDER BY username ASC;"
    try {
        connection.query(q,(err,result)=>{
            if(err)throw err
            res.render("user.ejs",{result})
        })
    } catch (error) {
        console.log(error);
    }
})
app.get("/:id/edit",(req,res)=>{
    let {id} = req.params
    let q = `SELECT * FROM user WHERE id=${id}`
    try {
        connection.query(q,(err,result)=>{
            if(err)throw err
            res.render("edit.ejs",{result})
        })
    } catch (error) {
        console.log(error);
    }
})
