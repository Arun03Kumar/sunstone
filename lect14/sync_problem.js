console.log("starting sync problem");

function doSomething() {
  console.log("doing something");
  for (let i = 0; i < 10000000000; i++) {
    // do nothing
  }
}

doSomething();
console.log("done with sync problem");
