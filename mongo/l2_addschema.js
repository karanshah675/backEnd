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