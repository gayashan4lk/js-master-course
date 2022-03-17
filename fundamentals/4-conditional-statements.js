// javascript conditinal statements
/* if
else
else if
switch
ternary operators
*/

if(5 < 6) {
  console.log("5 is less than 6!");
}

const num1 = 25;
const num2 = 15;
if(num1 > num2) {
  console.log("Num1 is greater than Num2");
} else {
  console.log("Num1 is not greater than Num2")
}

const today = new Date().getDay();
console.log(today);

let day;
switch(today) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednsday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
      day = "Friday";
      break;
  case 6:
    day = "Saturday";
    break;
  default:
    day = "Invalid";
}

console.log("Today is : " + day );

// Ternary Operator
// condition ? expressionIfTrue : experessionIfFalse
/* 
Besides false, possible falsy expressions are: null, NaN, 0, the empty string (""), and undefined. If condition is any of these, the result of the conditional expression will be the result of executing the expression exprIfFalse. 
*/
let age = 25;
const drink = (age > 21) ? "Wiskey" : "Coke";
console.log(drink);

let greeting = person => {
  let name = person ? person.name : "stranger";
  return ("Howdy, " + name);
}
console.log(greeting({name: "Leonado"}));
console.log(greeting(null));