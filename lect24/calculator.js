const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

async function main() {
  const num1 = Number(await ask("Enter the first number: "));
  const num2 = Number(await ask("Enter the second number: "));
  const operation = await ask("Enter the operation (+, -, *, /): ");

  let result;

  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        console.log("Error: Division by zero is not allowed.");
        rl.close();
        return;
      }
      result = num1 / num2;
      break;
    default:
      console.log("Invalid operation. Please use +, -, *, or /.");
      rl.close();
      return;
  }
  console.log(`Result: ${result}`);
  rl.close();
}

main();
