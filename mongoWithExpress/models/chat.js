let mongoose = require("mongoose");

let chatSchema = new mongoose.Schema({
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  msg: {
    type: String,
    maxLength:50
  },
  date: {
    type: Date,
    required: true,
  },
});

const Chat = new mongoose.model("Chat",chatSchema)

module.exports = Chat