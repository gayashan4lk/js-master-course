let person = {
  name : "Django",
  age : 45,
  occupation : "ex-slave",
  hobbies : ["fighting", "acting", "shooting", "running"],
  action : function() {
    console.log("I am a function inside object");
  }
}

console.log(person);
console.log(person.name);
person.action();

person.id = 1;
console.log(person);

person.age = 55;
console.log(person.age);
console.log(person.hobbies[0]);

let dataStore = [
  {
    _id : 1255,
    name : "Donald",
  },
  {
    _id : 254,
    name : "Biden"
  },
  {
    _id : 2665,
    name : "Obama"
  },
  {
    _id : 65584,
    name : "Bill"
  }
]

console.log(dataStore);
console.log(dataStore[2].name);

let emptyArray = [];
let emptyObject = {};
console.log(emptyArray);
console.log(emptyObject);

function fillArrayAndObject() {
  emptyArray.push("Diesel");
  emptyObject.fuel = "Diesel";
}

fillArrayAndObject();
console.log(emptyArray);
console.log(emptyObject);

let obj = null;
console.log(obj);
obj = {
  value : "Somevalue",
  number : 5
}
console.log(obj);

let nothing = null;
console.log(nothing);
nothing.value = 25; // doesn't work. Uncaught TypeError: Cannot set properties of null.
console.log(nothing);

