const express = require('express')

let app = express()
let port = 8080
// if we start our server from another directory and it is required to give path of views other wise express will not able to find views folder

let path = require('path')



app.set("view engine","ejs")

app.use(express.static(path.join(__dirname,"/public")))
app.set("views",path.join(__dirname,"/views"))

app.get("/home",(req,res)=>{
    res.render("home")
})

app.listen(port,()=>{
    console.log("server started");
    
})