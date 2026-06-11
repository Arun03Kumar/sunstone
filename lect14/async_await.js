// async function greet() {
//   console.log("Hello");
// }

// console.log(greet());

// async function greet() {
//   return "Hello";
// }

// console.log(greet());

// async function greet() {
//   return Promise.resolve("Hello");
// }

// console.log(greet());

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hello World");
//   }, 5000);
// });

// async function greet() {
//   console.log("Before awaiting the promise");
//   const value = await p;
//   console.log("After awaiting the promise");
//   console.log("Value from the promise:", value);
// }

// greet();

// console.log("This will log before the promise is resolved");

// function getData() {
//   return Promise.resolve("Data received");
// }

// async function processData() {
//   const data = await getData();
//   console.log("Processing:", data);
// }

// processData();

// create a delay function that returns a promise that resolves after a specified time

// function delay(ms) {
//   return new Promise((res) => setTimeout(res, ms));
// }

// async function main() {
//   console.log("Start");
//   await delay(2000);
//   console.log("After 2 seconds");
// }

// main();

// sequential execution of promises

// function task(name, ms) {
//   return new Promise((res) => {
//     setTimeout(() => {
//       console.log(`Task ${name} completed`);
//       res();
//     }, ms);
//   });
// }

// async function runTasks() {
//   await task("A", 1000);
//   await task("B", 2000);
//   await task("C", 1500);
// }

// runTasks();

// fetch user data then fetch posts for that user

// function getUser() {
//   return Promise.resolve({ id: 1, name: "Alice" });
// }

// function getPosts(userId) {
//   return Promise.resolve([
//     { id: 1, title: "Post 1", userId },
//     { id: 2, title: "Post 2", userId },
//   ]);
// }

// async function dashboard() {
//   const user = await getUser();
//   console.log("User:", user);
//   const posts = await getPosts(user.id);
//   console.log("Posts for user:", posts);
// }

// dashboard();

// tea making example
// function boilWater() {
//   return new Promise((res) => {
//     setTimeout(() => {
//       console.log("Water boiled");
//       res();
//     }, 5000);
//   });
// }

// function addTea() {
//   return new Promise((res) => {
//     setTimeout(() => {
//       console.log("Tea added");
//       res();
//     }, 500);
//   });
// }

// async function serveTea() {
//   return new Promise((res) => {
//     setTimeout(() => {
//       console.log("Tea served");
//       res();
//     }, 1500);
//   });
// }

// async function makeTea() {
//   await boilWater();
//   await addTea();
//   await serveTea();
//   console.log("Tea is ready to be enjoyed!");
// }

// makeTea();

console.log("start");

setTimeout(() => {
  console.log("hello ");
}, 0);

(async function () {
  console.log("Inside async function");
  Promise.resolve();
  console.log("After awaiting the promise");
})();

console.log("end");
