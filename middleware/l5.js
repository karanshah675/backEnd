let express = require('express')
let app = express();


app.listen(8080,()=>{
    console.log('server started');    
    
})
// middleware for accessing api using correct token value
app.use("/api",(req,res,next)=>{
    let {token} = req.query
    if(token == '11Ackj23'){
        res.send("data")
        next()
    }
    res.send("access denied")
})
app.use("/random",(req,res,next)=>{
    console.log("this is random");
    
})
 

app.get("/",(req,res)=>{
    res.send('root path')
})
app.get("/random",(req,res)=>{
    res.send("random path")
})