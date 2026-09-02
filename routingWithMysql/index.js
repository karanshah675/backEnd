const express =  require('express')
const mysql = require('mysql2')
const app = express()
const path = require('path')
const {v4:uuidv4} = require('uuid')
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
app.use(express.urlencoded({extended : true}))
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
app.get("/user/:id/edit",(req,res)=>{
    let {id} = req.params
    let q = `SELECT * FROM user WHERE id='${id}'`

    try {
        connection.query(q,(err,result)=>{
            let data = result[0]
            if(err)throw err
            res.render("edit.ejs",{data})
            // console.log(result);
            
        })
    } catch (error) {
        console.log(error);
    }
})
app.patch("/user/:id/",(req,res)=>{
    let {id} = req.params
    let {user,pass} = req.body
        let q = `SELECT * FROM user WHERE id='${id}'`
    let q2 = `UPDATE user SET username='${user}' WHERE id='${id}'`
    try {
        connection.query(q,(err,result)=>{
            // let data = result[0]
            if(err)throw err
            // res.render("edit.ejs",{data})
            // if(result[0])
            if (result[0].password==pass){
                try {
                    connection.query(q2,(err,result)=>{
                        if(err) throw err
                        // res.send("profile updated")
                        res.redirect("/user")
                    })
                } catch (error) {
                    console.log(error);
                }
            }else{
                res.send("password is inccorect")
            }
        })
    } catch (error) {
        console.log(error);
    }
})

app.post("/user/addNew",(req,res)=>{
    let id = uuidv4()
    let {username,email,password} =req.body
    let q="insert into user (id,username,email,password) values (?,?,?,?)"
    let data = [id,username,email,password]

    connection.query(q,data,(err,result)=>{
        try {
            if(err) throw err
            res.redirect("/user")
        } catch (error) {
            // console.log(error);
            res.send(error.sqlMessage)
        }
    })
})
app.delete("/user/:id",(req,res)=>{
    let {id} = req.params
    let q = `delete from user where id='${id}'`
    connection.query(q,(err,result)=>{
        try {
            if(err)throw err
            res.redirect("/user")
        } catch (error) {
            console.log(error);
                        
        }
    })
})
app.get("/user/addNew",(req,res)=>{
    res.render("addNew.ejs")
})