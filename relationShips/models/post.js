//connecting to databases through id of another collection using ref
let mongoose = require("mongoose");
let { Schema } = mongoose;
mongoose
  .connect("mongodb://127.0.0.1:27017/post")
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });

let userSchema = new Schema({
  username: String,
  email: String,
});

let postSchema = new Schema({
  content: String,
  likes: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

let User = new mongoose.model("User", userSchema);
let Post = new mongoose.model("post", postSchema);

let user1 = new User({
  username: "karan",
  email: "shahkaran0675@gmail.com",
});
let user2 = new User({
  username: "karan2",
  email: "shahkaran0675@gmail.com",
});

user1.save().catch((err) => {
  console.log(err);
});

Post.insertMany([
  {
    content: "hello world",
    likes: 12,
    user: user1,
  },
  {
    content: "nice!",
    likes: 122,
    user: user1,
  },
  {
    content: "no!",
    likes: 1,
    user: user2,
  },
]).catch((err) => {
  console.log(err);
});

Post.find({})
  .populate("user")
  .then((res) => {
    console.log(res);
  });
