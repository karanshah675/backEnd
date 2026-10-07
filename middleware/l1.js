let express = require('express')
let app = express();


app.listen(8080,()=>{
    console.log('server started');    
    
})

//self created middleware where it will stop further, we required next keyword
app.use((req,res)=>{
    
    let {query} = req.query
    console.log(query);
    console.log('hi i am middleware');
    res.send('hi i am middleware')
})
app.get("/",(req,res)=>{
    res.send('root path')
})
app.get("/random",(req,res)=>{
    res.send("random path")
})