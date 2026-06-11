// const p = new Promise((resolver, rejector) => {
//   setTimeout(() => {
//     const val = Math.random();
//     if (val < 0.5) {
//       resolver(val);
//     } else {
//       rejector(val);
//     }
//   }, 10000);
// });

console.log("start");

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello World");
  }, 1000);
});

p.then(
  (value) => {
    console.log("Promise resolved with value:", value);
  },
  (error) => {
    console.log("Promise rejected with error:", error);
  },
);

setTimeout(() => {
  console.log("hello ");
}, 1000);

for (let i = 0; i < 10000000000; i++) {}

console.log("end");
