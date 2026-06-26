const express = require("express");

const app = express();

let views = 0;

const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
];

app.get("/quote", (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.send(quotes[randomIndex]);
});

app.get("/", (req, res) => {
  res.send("this is home page");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Us</h1><p>This is the about page.</p>");
});

app.get("/user", (req, res) => {
  res.json({ name: "John Doe", age: 30 });
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

app.get("/random", (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100);
  res.send(`Random number: ${randomNumber}`);
});

app.get("/views", (req, res) => {
  views++;
  res.send(`This page has been viewed ${views} times.`);
});

app.get("/dice", (req, res) => {
  const diceRoll = Math.floor(Math.random() * 6) + 1;
  res.send(`You rolled a ${diceRoll}`);
});

app.get("/time", (req, res) => {
  const currentTime = new Date().toLocaleTimeString();
  res.send(`Current time: ${currentTime}`);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
