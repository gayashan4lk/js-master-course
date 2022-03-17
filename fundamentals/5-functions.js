// prompt();
// alert();
// () means that calling and executing a function.

function run() {
  console.log("Rabbit is running");
}
run();
console.log(run);

function drive(speed) {
  console.log("Car is moving at " + speed + " km/h.");
}
drive(60);

function personalIntro(person) {
  console.log(`My name is : ${person.name}`);
  console.log(`My age is : ${person.age}`);
  console.log(`I like to : ${person.hobby}`);
}

const jenny = {
  name : "Janny Robinson",
  age : 25,
  hobby : "dancing",
  isMarried : false
}

personalIntro(jenny);

function getMaritalStatus(isMarried) {
  message = (isMarried) ? "Married." : "Not married Yet.";
  console.log(message);
}

getMaritalStatus(jenny.isMarried);

//  Function expression
// ***************************

let squre = function(y) {
  return y*y;
}

console.log(squre(3));

// The variable to which the function expression is assigned will have a name property.
console.log(squre.name);

//The name doesn't change if it's assigned to a different variable.
let foo  = squre;
console.log(foo.name);
console.log(typeof squre);

let bar = function baz() {
  console.log("This is the baz function");
}
bar();
console.log(bar.name); // baz
// console.log(baz.name); //Uncaught ReferenceError: baz is not defined


//###################################################################
// Anonymous functions
/* Anonymous Function is a function that does not have any name associated with it. Normally we use the function keyword before the function name to define a function in JavaScript, however, in anonymous functions in JavaScript, we use only the function keyword without the function name.

An anonymous function is not accessible after its initial creation, it can only be accessed by a variable it is stored in as a function as a value. An anonymous function can also have multiple arguments, but only one expression. 

    function() {
        // Function Body
    }
*/

let anonymous = function() {
  console.log("I am an anonymous function.");
}

anonymous();

//###################################################################
// Callback functions
/* A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action. */

/* function greeting(name) {
  alert("Hello " + name);
}

function userInfo(callback) {
  let name = prompt("Enter your name.");
  callback(name);
}

userInfo(greeting); */


//###################################################################
// Immediately Invoked Function Expression (IIFE)
// An anonymous function is created and called:
(function() {
  console.log("Code runs!");
})();

!function() {
  console.log("Code runs here too!");
}();


// Arrow functions
/* Does not have its own bindings to this or super, and should not be used as methods.
Does not have new.target keyword.
Not suitable for call, apply and bind methods, which generally rely on establishing a scope.
Can not be used as constructors.
Can not use yield, within its body. */

const sum = (a,b) => a + b;
console.log(sum(5,10));

const printName = name => `Your name is ${name}`;
console.log(printName("Harry Wilson"));

const printMessage = () => "Sri Lanka is fucked up";
console.log(printMessage());

const doMath = (number) => {
  number *= 2;
  number += 15;
  return number;
}
console.log(doMath(1));



// Asynchronous callback function