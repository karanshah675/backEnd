let mongoose = require("mongoose");
let { Schema } = mongoose;
mongoose
  .connect("mongodb://127.0.0.1:27017/user")
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });

const userSchema = new Schema({
  username: String,
  addresses: [
    {
      _id: false,//because mongodb will assume this as schema and always create new id for this
      location: String,
      city: String,
    },
  ],
});

const User = new mongoose.model("User", userSchema);

let user1 = new User({
  username: "karan",
  addresses: [{ location: "rajkot", city: "rajkot" }],
});
user1.addresses.push({ location: "ahm", city: "ahm" });

user1
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

