let express = require("express");
let path = require("path");
let app = express();
let port = 8080;
let Chat = require("./models/chat.js");
let mongoose = require("mongoose");
let methodOverride = require("method-override");
app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));

function asyncWrap(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((err) => next(err));
  };
}
app.get("/", (req, res) => {
  // console.log("root path");
  res.send("root path");
});
app.get("/chats", async (req, res, next) => {
  // console.log("root path");
  // res.send("root path")
  try {
    let chats = await Chat.find();
    res.render("index.ejs", { chats });
  } catch (err) {
    next(err);
  }
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
  res.redirect("/chats");
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

app.get(
  "/chats/:id/edit",
  asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let chat = await Chat.find({ _id: id });

    if (!chat) {
      const err = new Error("Chat not found");
      err.status = 404;
      throw err;
    }
    let chats = chat[0];
    res.render("edit.ejs", { chats });
  }),
);
app.delete("/chats/:id", async (req, res) => {
  let { id } = req.params;
  // let chat = await Chat.find({ _id: id });
  // let chats = chat[0];
  Chat.findByIdAndDelete(id)
    .then((res2) => {
      // console.log(res);
      res.redirect("/chats");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.put("/chats/:id", (req, res) => {
  let { id } = req.params;
  let { msg } = req.body;
  Chat.findByIdAndUpdate(id, { msg: msg })
    .then((res2) => {
      // console.log(res);
      res.redirect("/chats");
    })
    .catch((err) => {
      console.log(err);
    });
});
app.use((err, req, res, next) => {
  console.error(err.stack);

  const statusCode = err.status || 500;

  res
    .status(statusCode)
    .send(
      statusCode === 404 ? err.message : "Something went wrong on the server!",
    );
});
