arr = [1,23,45,5]
// arr.__proto__.push = (n) => { console.log("pushing number ",n) }
// Array.__proto__.push= (n)=>{console.log("pushing number");
// }
Array.prototype.push=(n)=>{
    console.log("number added");
}
arr.push(3)