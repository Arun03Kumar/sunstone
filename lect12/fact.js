// let a = 5;
// let b = 6;
// let c = 7;
// let d = 8;
// let e = 9;

// let fact_a = 1;
// for (let i = 1; i <= a; i++) {
//   fact_a *= i;
// }

// let fact_b = 1;
// for (let i = 1; i <= b; i++) {
//   fact_b *= i;
// }

// let fact_c = 1;
// for (let i = 1; i <= c; i++) {
//   fact_c *= i;
// }

// let fact_d = 1;
// for (let i = 1; i <= d; i++) {
//   fact_d *= i;
// }

// let fact_e = 1;
// for (let i = 1; i <= e; i++) {
//   fact_e *= i;
// }

// console.log(`Factorial of ${a} is ${fact_a}`);
// console.log(`Factorial of ${b} is ${fact_b}`);
// console.log(`Factorial of ${c} is ${fact_c}`);
// console.log(`Factorial of ${d} is ${fact_d}`);
// console.log(`Factorial of ${e} is ${fact_e}`);

function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}

// console.log(`Factorial of 5 is ${factorial(5)}`);

// storing the factorial of 5 in a variable
let ans = factorial(5);
console.log(ans);

// for a given number print the 2 times of the factorial of that number
// processing the factorial of 5
console.log(2 * ans);

factorial(6);
factorial(7);
factorial(8);
factorial(9);
factorial(10);
factorial(11);
factorial(12);
factorial(13);
factorial(14);
factorial(15);

function addition(x, y) {
  return x + y;
}

function subtraction(x, y) {
  return x - y;
}

function multiplication(x, y) {
  return x * y;
}

function division(x, y) {
  return x / y;
}

console.log(addition(5, 6, 7));
console.log(subtraction(5, 6));
console.log(multiplication(5, 6));
console.log(division(5, 6));

function add_three_numbers(x, y, z) {
  return x + y + z;
}
console.log(add_three_numbers(5, 6, 7));
