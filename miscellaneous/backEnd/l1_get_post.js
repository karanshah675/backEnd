const express = require("express");
let app = express();
let port = 8080;

app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.get("/register", (req, res) => {
  let { user, pass } = req.query;
  res.send("welcome " + user);
});


app.post("/register", (req, res) => {
    let {user,pass} = req.body
    // console.log(req.body);
    res.send("welcome "+user);
});

app.listen(port, () => {
  console.log("server started");
});
