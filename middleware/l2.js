let express = require('express')
let app = express();


app.listen(8080,()=>{
    console.log('server started');    
    
})

//next will pass the process to next middleware or route
app.use((req,res,next)=>{
    console.log('hi i am middleware 1');
    next()
})
app.use((req,res,next)=>{
    console.log('hi i am middleware 2');
    next()
})
app.get("/",(req,res)=>{
    res.send('root path')
})
app.get("/random",(req,res)=>{
    res.send("random path")
})