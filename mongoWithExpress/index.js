let express = require("express");
let path = require("path");
let app = express();
let port = 8080;
let Chat = require("./models/chat.js");
let mongoose = require("mongoose");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));
app.get("/", (req, res) => {
  // console.log("root path");
  res.send("root path");
});
app.get("/chats", async (req, res) => {
  // console.log("root path");
  // res.send("root path")
  let chats = await Chat.find();
  res.render("index.ejs", { chats });
});

app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});
app.post("/chats", (req, res) => {
  let { from, to, msg } = req.body;
  let newChat = new Chat({
    from: from,
    to: to,
    msg: msg,
    date: new Date(),
  });
  newChat
    .save()
    .then((res) => {
      console.log("chat added");
    })
    .catch((err) => {
      console.log(err);
    });
    res.redirect("/chats")
});

app.listen(port, () => {
  console.log("server start");
});

mongoose
  .connect("mongodb://127.0.0.1:27017/whatsapp")
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });
