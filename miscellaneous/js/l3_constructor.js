//factory function
// function Person(name,age){
//     return {
//         name:name,
//         age:age,
//         talk(){
//             console.log("blah blah blah!");
            
//         }
//     }
// }

// let p1 = Person("karan",12)
// let p2 = Person("jay",20)
// p1.talk()
// p2.talk()
// console.log(p1.talk == p2.talk)
//false because both refering diffrent object
// this means we don't create a object for same keys but for diffrent value so we crated factory function
// but this fuction make copy every time we call it so it's not recommanded

// so we use constructor using new keyword
function Person(name,age){
    this.name = name
    this.age = age
}
Person.prototype.talk=()=>{console.log("blah blah blah!");}

let cp1 = new Person("karan",22)
let cp2 = new Person("jay",25)
console.log(cp1.talk()==cp2.talk()); // true because refering to same object
 
