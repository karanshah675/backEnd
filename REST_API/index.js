const express = require('express')
const req = require('express/lib/request')
let app = express()
let port = 3000
const {v4:uuidv4} = require('uuid')
var methodOverride = require('method-override')
app.use(methodOverride('_method'))
// if we start our server from another directory and it is required to give path of views other wise express will not able to find views folder

let path = require('path')

let posts = [
    {
        id:uuidv4(),
        username : "karan",
        content : "hi this is karan shah"
    },
    {
        id:uuidv4(),
        username : "jaydeep",
        content : "hello i am jaydeep and this is my first post in this app"
    },
    {
        id:uuidv4(),
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
app.get("/posts/:id",(req,res)=>{
    let {id} = req.params
    let post  = posts.find((p)=> p.id===id);
   
        res.render("show.ejs",{post})
     
})
app.get("/posts/:id/edit",(req,res)=>{
    let {id} = req.params
     let post  = posts.find((p)=> p.id===id);
    //  if(post){
        res.render("edit.ejs",{post})
     
})

app.patch("/posts/:id",(req,res)=>{
     let {id} = req.params
    let post  = posts.find((p)=> p.id===id);
    let newContent = req.body.content
    if(post){
        post.content = newContent
    }
    // console.log("patching");
    // res.send("hi path")
})
app.post("/posts",(req,res)=>{
     let {username,content} = req.body
     let id = uuidv4()
    posts.push({id,username,content})
    // console.log(req.body);  
    res.redirect("/posts")
})


app.listen(port,()=>{
    console.log("server started");
    
})