// var x = 10;

// function foo() {
//   console.log(x);
// }

// foo(); // 10

// function outer() {
//   let name = "Alice";

//   function inner() {
//     console.log(name); // Accesses the 'name' variable from the outer scope
//   }

//   return inner;
// }

// const closureFunction = outer();
// closureFunction(); // Output: "Alice"

// function makeCounter() {
//   let count = 0;

//   return function () {
//     count++;
//     console.log(count);
//   };
// }

// const counter = makeCounter();
// counter();
// counter();
// counter();

// function factory

function createAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = createAdder(5);
console.log(add5(10)); // Output: 15

const add10 = createAdder(10);
console.log(add10(20)); // Output: 30
