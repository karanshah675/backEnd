//connecting to databases through id of another collection using ref
let mongoose = require("mongoose");
let { Schema } = mongoose;
mongoose
  .connect("mongodb://127.0.0.1:27017/customer")
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });

let orderSchema = new Schema({
  item: String,
  price: Number,
});

let order = new mongoose.model("Order", orderSchema);

let addItem = async () => {
  let result = await order.insertMany([
    { item: "samosa", price: 222 },
    { item: "vadapav", price: 100 },
    { item: "idli", price: 10 },
  ]);
  console.log(result);
};

// addItem();

let customerSchema = new Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

let custom = new mongoose.model("Customer", customerSchema);

let addCustom = async () => {
  let cus1 = new custom({
    name: "karan shah",
  });

  let ord1 = await order.findOne({ item: "samosa" });
  let ord2 = await order.findOne({ item: "idli" });

  cus1.orders.push(ord1);
  cus1.orders.push(ord2);

  let result = cus1.save();
  console.log(result);
};

// addCustom();
custom
  .find()
  .populate("orders") //used to get reference data
  .then((res) => {
    console.log(res[0]);
  });

module.exports = {custom,order,customerSchema};
 