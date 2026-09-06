let mongo = require('mongoose')

async function main() {
    await mongo.connect('mongodb://127.0.0.1:27017/test')
}

main()
.then(()=>{
    console.log("database connected");
})
.catch((err)=>{
    console.log(err);
    
})

const userSchema = new mongo.Schema({
    name:String,
    email:String,
    age:Number,
}
)

let User = mongo.model("User",userSchema)
let user1 = new User({
    name:"tom holland",
    email:"tom@222",
    age:11,
})
user1.save()