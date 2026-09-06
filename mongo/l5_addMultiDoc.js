const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}
main()
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
}
)
let User = mongoose.model("User",userSchema)
User.insertMany([
    {name:"tony",email:"tony@222",age:22},
    {name:"tom",email:"t@222",age:22},
]).then((data)=>{
    console.log(data);
    
})
