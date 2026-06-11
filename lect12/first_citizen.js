// 1. A function can be assigned to a variable
function greet() {
  console.log("Hello, World!");
}

let greet2 = greet;
greet2(); // Output: Hello, World!

// 2. A function can be passed as an argument to another function
function sayHello(name) {
  console.log(`Hello, ${name}!`);
}
function greetPerson(greetFunction, name) {
  greetFunction(name);
}
greetPerson(sayHello, "Alice"); // Output: Hello, Alice!

// 3. A function can be returned from another function
function createGreeter(greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}!`);
  };
}
let greeter = createGreeter("Hi");
greeter("Bob"); // Output: Hi, Bob!

// 4. A function can be stored in an object
function sayGoodbye(name) {
  console.log(`Goodbye, ${name}!`);
}
let arr = [1, 2, 3, sayGoodbye];
arr[3]("name");
