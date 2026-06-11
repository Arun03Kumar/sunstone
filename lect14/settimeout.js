// function fn() {
//   console.log("Hello");
// }

// setTimeout(fn, 5000);

// setTimeout(() => {
//   console.log("Hello from the arrow function");
// }, 5000);

// setTimeout(function () {
//   console.log("Hello from the anonymous function");
// }, 5000);

// function placeOrder(callback) {
//   console.log("Placing order...");

//   setTimeout(() => {
//     console.log("Order placed successfully!");
//   }, 1000);

//   setTimeout(() => {
//     console.log("Order is being prepared...");
//     callback();
//   }, 3000);
// }

// placeOrder(() => {
//   console.log("Thank you for your order!");
// });

// function login(callback) {
//   setTimeout(() => {
//     console.log("User logged in");
//     callback(101);
//   }, 2000);
// }

// function getUserData(userId, callback) {
//   setTimeout(() => {
//     console.log(`Fetching data for user ${userId}`);
//     callback({ name: "John Doe", age: 30 });
//   }, 3000);
// }

// login((userId) => {
//   getUserData(userId, (userData) => {
//     console.log("User Data:", userData);
//   });
// });

// downloading a file

function downloadFile(url, callback) {
  console.log(`Starting download from ${url}...`);
  setTimeout(() => {
    console.log(`Download complete from ${url}`);
    callback();
  }, 4000);
}

downloadFile("https://example.com/file.zip", () => {
  console.log("File has been downloaded and is ready to use.");
});
