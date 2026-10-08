let express = require('express')
let app = express();


app.listen(8080,()=>{
    console.log('server started');    
    
})
// middleware for selected route path
app.use("/random",(req,res,next)=>{
    console.log("this is random");
    
})
app.use((req,res,next)=>{
    console.log(req.hostname,req.method,req.path);
    res.send("404 root not found")
    next()
})

app.get("/",(req,res)=>{
    res.send('root path')
})
app.get("/random",(req,res)=>{
    res.send("random path")
})