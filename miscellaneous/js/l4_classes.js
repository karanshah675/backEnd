class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
    talk() { console.log("blah blah blah!");   }
}
p1 = new Person("karan", 22);
p2 = new Person("jay", 25);
console.log(p1.talk() == p2.talk()); // true because refering to same object