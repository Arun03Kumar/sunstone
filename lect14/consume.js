const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello World");
  }, 1000);
});

function f1() {
  console.log("Promise resolved, executing f1");
}

function f2() {
  console.log("Promise rejected, executing f2");
}

pr.then(f1, f2);

pr.then(
  () => {
    console.log("Promise resolved, executing f1");
  },
  () => {
    console.log("Promise rejected, executing f2");
  },
);
