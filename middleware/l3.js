let express = require('express')
let app = express();


app.listen(8080,()=>{
    console.log('server started');    
    
})

//next will pass the process to next middleware or route
app.use((req,res,next)=>{
    console.log(req.hostname,req.method,req.path);
    next()
})

app.get("/",(req,res)=>{
    res.send('root path')
})
app.get("/random",(req,res)=>{
    res.send("random path")
})