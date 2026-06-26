// expense tracker app

const fs = require("fs");

const FILE = "expenses.json";

function loadExpenses() {
  if (!fs.existsSync(FILE)) {
    fs.writeFileSync(FILE, "[]");
  }

  const data = fs.readFileSync(FILE, "utf-8");
  return JSON.parse(data);
}

function saveExpenses(expenses) {
  fs.writeFileSync(FILE, JSON.stringify(expenses, null, 2));
}

function addExpense(expense) {
  const expenses = loadExpenses();
  const newExpense = {
    id: Date.now(),
    ...expense,
  };
  expenses.push(newExpense);
  saveExpenses(expenses);
}

function getExpenses() {
  return loadExpenses();
}

const command = process.argv[2];

switch (command) {
  case "add":
    const [description, amount] = process.argv.slice(3);
    addExpense({ description, amount: parseFloat(amount) });
    console.log("Expense added successfully.");
    break;
  case "list":
    const expenses = getExpenses();
    console.log("Expenses:");
    expenses.forEach((expense) => {
      console.log(
        `ID: ${expense.id}, Description: ${expense.description}, Amount: $${expense.amount}`,
      );
    });
    break;
  default:
    console.log(
      "Unknown command. Use 'add' to add an expense or 'list' to list expenses.",
    );
    break;
}
