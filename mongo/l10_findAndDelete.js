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

User.findOneAndDelete({name:"tom"}).then((res)=>{
    console.log(res);
    
})