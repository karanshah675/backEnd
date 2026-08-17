const express = require('express')

let app = express()
let port =3000
app.listen(port,()=>{
    console.log("server started");
    
})
// app.get("/:username",(req,res)=>{
//     console.log(req.params);
// })
app.get("/search/:username/:id",(req,res)=>{
    let {username,id} = req.params
    console.log(res.send(`<h1>welcome ${username}!</h1>`));
})