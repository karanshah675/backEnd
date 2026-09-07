const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });

let userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});
let User = mongoose.model("User", userSchema);
//find all data
User.find().then((data) => {
  console.log(data);
});
//find with condition
User.find({name:'tom'}).then((data) => {
    console.log("=====================")
  console.log(data);
});
User.find({age:{$lt:15}}).then((data) => {
    console.log("=====================")
  console.log(data);
});
//find only one database from condition
User.findOne({age:{$lt:15}}).then((data) => {
    console.log("=====================")
  console.log(data);
});
