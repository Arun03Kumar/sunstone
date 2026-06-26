// console.log(process.argv);

// function greet(name) {
//   console.log(`Hello, ${name}!`);
// }

// greet(process.argv[2]);

// function add(a, b) {
//   return a + b;
// }

// let x = add(parseInt(process.argv[2]), parseInt(process.argv[3]));
// console.log(`The sum of ${process.argv[2]} and ${process.argv[3]} is: ${x}`);

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("what is your name? ", (name) => {
  console.log(`Hello, ${name}!`);
  rl.close();
});
