const express = require('express')
const req = require('express/lib/request')
let app = express()
let port = 8080
// if we start our server from another directory and it is required to give path of views other wise express will not able to find views folder

let path = require('path')

let posts = [
    {
        username : "karan",
        content : "hi this is karan shah"
    },
    {
        username : "jaydeep",
        content : "hello i am jaydeep and this is my first post in this app"
    },
    {
        username : "noimi",
        content : "hi this is noimi"
    }
]

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"/views"))

app.use(express.static(path.join(__dirname,"/public")))
app.use(express.urlencoded({extended : true}))

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts})
})
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs")
})


app.post("/posts",(req,res)=>{
     let {username,content} = req.body
    posts.push({username,content})
    // console.log(req.body);  
    res.redirect("/posts")
})



app.listen(port,()=>{
    console.log("server started");
    
})