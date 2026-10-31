const express = require("express");
let app = express();
let cookieParser = require("cookie-parser");
app.use(cookieParser("secretcode"));
app.listen("3000", () => {
  console.log("server start");
});
app.get("/getcoockies", (req, res) => {
  res.cookie("name", "karan");
  res.send("we sent you cookies");
});

app.get("/newcookie", (req, res) => {
  res.cookie("surname", "shah");
  res.send(req.cookies);
});

app.get("/signedcookie", (req, res) => {
  res.cookie("hobby", "read", { signed: true });
  res.send("done");
});

app.get("/verify",(req,res)=>{
    res.send(req.signedCookies)
})
