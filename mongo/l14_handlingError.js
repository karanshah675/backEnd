// let booksSchema = require("./l12_schema_options")
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
    min: [0,"less then zero not allowed"],//pass error message while making option
  },
  discount: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    enum: ["fiction", "non-fiction"],
  },
});

const Books = mongoose.model("Book", booksSchema );
//run validators true checks schema while updating also
Books.findByIdAndUpdate("6aae9570304a3f71d8c14349", { price: -1 },{ runValidators: true })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.errors.price.properties.message);
  });
