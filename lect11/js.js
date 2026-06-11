// hello world in JavaScript
console.log("Hello, World!");
console.log("Welcome to JavaScript programming.");

// variables in JavaScript
var name = "Alice";
let age = 10;
const PI = 3.14;

// data types in JavaScript
// Number
let num1 = 5;
let num2 = 3.14;

console.log("Number:", num1, num2);
console.log(1 + 2);
console.log(1 - 2);
console.log(1 / 2);
console.log(1 * 2);
console.log(1 % 2);

// string data type
let greeting = "Hello";
let name2 = "Bob";
console.log(greeting + ", " + name2 + "!");
console.log(`Hello, ${name2}!`);

// boolean data type
let isStudent = true;
let isTeacher = false;
console.log("Is student?", isStudent);
console.log("Is teacher?", isTeacher);

// short circuit evaluation
let a = 0;
let b = 5;
let c = 0;
console.log("Short circuit OR:", a || b);
console.log("Short circuit AND:", a && b);

console.log(a || c || b); // returns the first truthy value
console.log(a && c && b); // returns the first falsy value

if (1) console.log("This will always execute because 1 is truthy.");
if (0) console.log("This will never execute because 0 is falsy.");
if (-1) console.log("This will execute because -1 is truthy.");
if (-20000) console.log("This will execute because -20000 is truthy.");

// null and undefined
let x;
console.log("Undefined variable:", x); // undefined
let y = null;
console.log("Null variable:", y); // null

// type of operator
console.log("Type of num1:", typeof num1);
console.log("Type of greeting:", typeof greeting);
console.log("Type of isStudent:", typeof isStudent);
console.log("Type of x:", typeof x);
console.log("Type of y:", typeof y);

// two ways to use type of
// console.log("Type of num1:", typeof(num1));

console.log(typeof NaN);

// integer division
console.log("Integer division:", Math.floor(5 / 2));
console.log("Integer division:", parseInt(10 / 3));

// control flow
let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

// nested if statements
let age2 = 25;
let hasLicense = true;

if (age2 >= 18) {
  if (hasLicense) {
    console.log("You can drive.");
  } else {
    console.log("You need a license to drive.");
  }
} else {
  console.log("You are too young to drive.");
}

// switch statement
let day = 10;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}

// loops
// for loop
for (let i = 0; i < 5; i++) {
  console.log("For loop iteration:", i);
}
// while loop
let j = 0;
while (j < 5) {
  console.log("While loop iteration:", j);
  j++;
}
// do-while loop
let k = 0;
do {
  console.log("Do-while loop iteration:", k);
  k++;
} while (k < 5);

// break and continue
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // exit the loop when i is 5
  }
  console.log("Break example:", i);
}
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // skip even numbers
  }
  console.log("Continue example:", i);
}

// give me some problems on control flow and loops in JavaScript
// 1. Write a program that prints all the even numbers from 1 to 20.
// 2. Write a program that calculates the factorial of a given number using a for loop.
// 3. Write a program that checks if a given number is prime or not using a while loop.

// get a input from user
// let num = Number(prompt("Enter a number: "));
// console.log("You entered:", num, "and its type is", typeof num);

let num = parseInt(prompt("Enter a number: "));
console.log("You entered:", num, "and its type is", typeof num);
