// let and const

const name = "Leonado";
let age = 16;
console.log("Your age is : ", age);

if(age < 21) {
  let age = 22;
  console.log("Now your age is : ", age);
}
console.log("Again your age is : ", age);

const person = {
  name : "Pablo Neruda",
  age : 25,
  profession : "Poet"
}

console.log(person);

/* const person = {
  some : "some";
}

person = {
  data1 : "some",
  data2 : "data",
} */

person.name = "Picaso";
person.age = 55;
person.profession = "Painter";

console.log(person);