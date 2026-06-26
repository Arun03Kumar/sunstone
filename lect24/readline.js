// process.stdin.on("data", (data) => {
//   console.log(`You typed: ${data}`);
// });

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question("What is your name? ", (name) => {
//   console.log(`Hello, ${name}!`);
//   //   rl.close();
// });

// rl.question("What is your favorite programming language? ", (language) => {
//   console.log(`Your favorite programming language is ${language}.`);
//   rl.close();
// });

// rl.question("What is your name? ", (name) => {
//   rl.question("What is your favorite programming language? ", (language) => {
//     console.log(
//       `Hello, ${name}! Your favorite programming language is ${language}.`,
//     );
//     rl.close();
//   });
// });

//name, age, city, college, branch, profession, animal, pet name

// rl.question("What is your name? ", (name) => {
//   rl.question("What is your age? ", (age) => {
//     rl.question("What is your city? ", (city) => {
//       rl.question("What is your college? ", (college) => {
//         rl.question("What is your branch? ", (branch) => {
//           rl.question("What is your profession? ", (profession) => {
//             rl.question("What is your favorite animal? ", (animal) => {
//               rl.question("What is your pet's name? ", (petName) => {
//                 console.log(
//                   `Hello, ${name}! You are ${age} years old and live in ${city}. You studied at ${college} in the ${branch} branch. Your profession is ${profession}. Your favorite animal is ${animal}, and your pet's name is ${petName}.`,
//                 );
//                 rl.close();
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// });

function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

async function main() {
  const name = await ask("What is your name? ");
  const age = await ask("What is your age? ");
  const city = await ask("What is your city? ");
  const college = await ask("What is your college? ");
  const branch = await ask("What is your branch? ");
  const profession = await ask("What is your profession? ");
  const animal = await ask("What is your favorite animal? ");
  const petName = await ask("What is your pet's name? ");

  console.log(
    `Hello, ${name}! You are ${age} years old and live in ${city}. You studied at ${college} in the ${branch} branch. Your profession is ${profession}. Your favorite animal is ${animal}, and your pet's name is ${petName}.`,
  );

  rl.close();
}

main();
