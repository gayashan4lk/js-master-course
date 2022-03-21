// Destructuring
const person = {
  firstName : "Benjamin",
  lastName : "Francline",
  email : "benjamin@gmail.com",
  birthDay : "1845-02-25"
}

const { firstName, lastName, email, birthDay} = person;

console.log(firstName);
console.log(lastName);
console.log(email);
console.log(birthDay);

const studentName = "flskdsld";
const studentId = "sdssfd";
const isStudent = true;

const student = {
  studentName,
  studentId,
  isStudent
};

console.log(student);

// Template Literals
const greetingMessage = `This is the greeting - Student ID : ${student.studentId} , Student Name ${student.studentId} , Is student ${student.isStudent} `;
console.log(greetingMessage);

// Default Arguments
function calculateSum (x = 1, y = 1, z = 1) {
  return x + y + z;
}
console.log(calculateSum());
console.log(calculateSum(5));
console.log(calculateSum(5,10));
console.log(calculateSum( 10, 20, 30 ));

// Symbol (Javascript Type)
let one = Symbol();
console.log(one);
let two = Symbol();
if (one === two) {
  console.log("Symbol one and Symbol two are equal");
} else {
  console.log("Symbol one and Symbole two are not equal!");
}

// Arrow function
let sum = (x, y) => x + y;
console.log(sum(2, 3));