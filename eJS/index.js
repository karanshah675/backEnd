const { log } = require('console')
const express = require('express')

let app = express()
let port = 3000
// if we start our server from another directory and it is required to give path of views other wise express will not able to find views folder

let path = require('path')



app.set("view engine","ejs")

app.use(express.static(path.join(__dirname,"/public")))
app.set("views",path.join(__dirname,"/views"))

app.get("/home",(req,res)=>{
    res.render("l1_interpolation")
})

app.get("/diceroll",(req,res)=>{
    let diceVal = Math.floor(Math.random()*6+1)
    res.render("l2_passingData",{diceVal})
})
app.get("/dicegame",(req,res)=>{
    let diceVal = Math.floor(Math.random()*6+1)
    res.render("l4_conditional",{diceVal})
})

// app.get("/ig/:username",(req,res)=>{
//     // let diceVal = Math.floor(Math.random()*6+1)
//     let followers = ["karn","john","dany","shayar"]
//     let {username}  = req.params
//     res.render("l5_foorLoop",{username,followers})
// })


app.get("/ig/:username",(req,res)=>{
    // let diceVal = Math.floor(Math.random()*6+1)
    // let followers = ["karn","john","dany","shayar"]
    let {username}  = req.params
    let instaData = require("./data.json")
    let data = instaData[username]
    
    if(data){
        res.render("l6_instaPost",{data})
    }else{
        res.render("l6_error",{username})
    }
})

app.listen(port,()=>{
    console.log("server started");
})
