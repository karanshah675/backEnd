let express= require('express')

let app = express()
let port = 3000

app.listen(port,()=>{
    console.log("listing from sever side");
    
})
app.use((req,res)=>{
    // console.log("requset get");    
    // res.send("response is fetched")
    // res.send({
    //     name:"karan",
    //     id:23
    // })
    res.send("<h1>this is response</h1>")
})