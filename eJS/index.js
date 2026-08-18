const express = require('express')

let app = express()
let port = 3000
let path = require('path')


app.set("view engine","ejs")

app.set("views",path.join(__dirname,"/views"))
app.get("/home",(req,res)=>{
    res.render("home.ejs")
})

app.listen(port,()=>{
    console.log("server started");
})
