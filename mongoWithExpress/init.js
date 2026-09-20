let mongoose = require("mongoose");
let Chat = require("./models/chat.js");
mongoose
  .connect("mongodb://127.0.0.1:27017/whatsapp")
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });
let manyChats = [
  {
    from: "karan",
    to: "anora",
    msg: "hi karan!",
    date: new Date(),
  },
  {
    from: "alex",
    to: "feni",
    msg: "hi feni!",
    date: new Date(),
  },
  {
    from: "jennifer",
    to: "john",
    msg: "hi jennifer!",
    date: new Date(),
  },
  {
    from: "naiomi",
    to: "andrew",
    msg: "hi andrew!",
    date: new Date(),
  },
];

Chat.insertMany(manyChats)