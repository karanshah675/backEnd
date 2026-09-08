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
//update and find
User.findOneAndUpdate({ name: "tom" }, { age: 10 }, { new: true })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
