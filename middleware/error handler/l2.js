let express = require("express");
let app = express();

app.listen(8080, () => {
  console.log("server started");
});

let checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token == "11Ackj23") {
    res.send("data");
    next();
  }
//   res.send("access denied");
//user defiend error
throw new Error("access denied")
};
app.use("/err",(req,res)=>{
    abc=abc // this is undefined thing so middleware automatically adds error at last of stack

})
app.use((err,req,res,next)=>{
    console.log('error is handled from server side');
    next(err)
})

app.use("/api", checkToken, (req, res, next) => {
  let { token } = req.query;
  if (token == "11Ackj23") {
    res.send("data");
    next();
  }
  res.send("access denied");
});
app.use("/random", (req, res, next) => {
  console.log("this is random");
});

app.get("/", (req, res) => {
  res.send("root path");
});
app.get("/random", (req, res) => {
  res.send("random path");
});
