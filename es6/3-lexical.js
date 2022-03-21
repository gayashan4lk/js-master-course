// Closures
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}
let add5 = makeAdder(5);
let add10 = makeAdder(10);
// add5 and add10 are both closures.
/*
In add5's lexical environment x = 5.
In add10's  lexical environment x = 10.
 */

console.log(add5(2));
console.log(add10(20));

// Practical closures
console.log(document.body.style.fontSize);
function makeSizer(size) {
  console.log("makeSizer called");
  return function() {
    document.body.style.fontSize = size + "px";
  };
}

let size12 = makeSizer(12);
let size14 = makeSizer(14);
let size16 = makeSizer(16);


console.log(document.getElementById("size-12"));
document.getElementById("size-12").onclick = size12;
document.getElementById("size-14").onclick = size14;
document.getElementById("size-16").onclick = size16;

// Currying
function multiplication(a) {
  console.log("One called.");
  return(b) => {
    console.log("Two Called.");
    return(c) => {
      console.log("Three called.");
      return a * b * c;
    }
  }
}

let answer = multiplication(2)(3)(4);
console.log(answer);

const sum = (x) => (y) => x + y;
let sumResult = sum(6)(7);
console.log(sumResult);

// Compose Function
const composeFn = (para1, para2) => (para3) => para1(para2(para3));

const para1 = (num) => num * 2;
const para2 = (num) => num * 2;
const para3 = (num) => num;

let resultComposeFn = composeFn(para1, para2)(3);
console.log(resultComposeFn);
