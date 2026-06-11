let p = {
  run: () => {
    console.log("run");
  },
};

p.run();

let a = {
  name: "Hello",
};

// a.run();

a.__proto__ = p;

a.run();
