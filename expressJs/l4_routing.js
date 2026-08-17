let express =  require('express')

let app = express()
let port = 3000
app.listen(port,()=>{
    console.log("server started");
    
})
app.get("/",(req,res)=>{
    res.send("this is root path")
})
app.get("/home",(req,res)=>{
    res.send("welcome to home path")
})
app.get("/about",(req,res)=>{
    res.send("this is about path")
})
app.get("/*splat",(req,res)=>{
    res.send("could not find path")
})
 

