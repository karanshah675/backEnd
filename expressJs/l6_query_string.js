const express = require('express')

let app = express()
let port =3000
app.listen(port,()=>{
    console.log("server started");
    
}) 
app.get("/search",(req,res)=>{
    let {qry} = req.query
    if(!qry){
        res.send("nothing is searched");
    }
    console.log(res.send(qry));
    // console.log(qry);
    
})