//if you want to use module in directory then you should create one index file which collects other files data of that directory
//then you call directory it will find index.js file only in directory

let fruits = require("./l3_moduleDir")

console.log(fruits);
