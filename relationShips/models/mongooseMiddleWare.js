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

let customerSchema = new Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});
customerSchema.post("findOneAndDelete", async (customer) => {
  if (customer.orders.length) {
    let res = await order.deleteMany({ _id: { $in: customer.orders } });
    console.log(res);
  }
});
let custom = new mongoose.model("Customer", customerSchema);

let addCustom = async () => {
  let c1 = new custom({
    name: "karan",
  });
  let o1 = new order({
    item: "pizza",
    price: 222,
  });
  c1.orders.push(o1);

  await o1.save();
  await c1.save();

  console.log("cutomer added");
};
// addCustom();

custom
  .findByIdAndDelete("6ae0df2973dab2a29dee244e")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
