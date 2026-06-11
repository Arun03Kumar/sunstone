// console.log("Starting async example");

// function doSomethingAsync(callback) {
//   console.log("Doing something async");
//   setTimeout(() => {
//     console.log("Async operation complete");
//     callback();
//   }, 5000);
// }

// doSomethingAsync(() => {
//   console.log("Callback called after async operation");
// });
// console.log("Done with async example");

function f1(callback) {
  console.log("Doing something async");
  setTimeout(() => {
    console.log("Async operation complete");
    callback();
  }, 5000);
}

function f2() {
  console.log("Callback called after async operation");
}

f1(f2);
