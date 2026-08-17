app.get("/",(req,res)=>{
    res.send("this is root path")
})
app.get("/home",(req,res)=>{
    res.send("this is home path")
})
app.get("/about",(req,res)=>{
    res.send("this is about path")
})
app.get("*",(req,res)=>{
    res.send("path not found")
})
app.post("/feedback",(req,res)=>{
    res.send("this is feedback path")
})
