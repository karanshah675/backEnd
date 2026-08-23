// const express = require("express");

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log("you name is ", this.name);
  }
}
class School extends Person {
  constructor(name, age, mark) {
    super(name, age);
    this.mark = mark;
  }
}
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
}

let s1 = new School("karan", 22, 100);
let t1 = new Teacher("nikita", 33, "maths");

s1.talk();

