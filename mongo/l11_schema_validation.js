let mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/amazon")
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });

let booksSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
  },
});

const Books = mongoose.model("Book", booksSchema);

let newbook = new Books({
  title: "godan",
  author: "munshi premchand",
  price: 100,
});

newbook
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
