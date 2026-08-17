let express = require('express')

const app = express()
const port = 3000

app.listen(port,()=>{
    console.log("listing from sever side");
    
})
app.use((req,res)=>{
    console.log("requset get");    
})
// app.use is used to fetch each and every request wether it is get or post or anything
// this code basically means when you fetch localhost:3000 then requset get will print in terminal