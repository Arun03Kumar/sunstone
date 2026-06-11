const user = {
  name: "John",
  greet() {
    console.log(`Hello, my name is ${this}`);
  },
};

user.greet(); // Hello, my name is [object Object]
