let student = {
  name: "Alice",
  age: 20,
  isEnrolled: true,
  courses: ["Math", "Physics", "Chemistry"],
};

console.log(student.name);
console.log(student["name"]);

student.address = "123 Main St";

student.age = 21;

delete student.isEnrolled;

console.log(student);

for (let key in student) {
  console.log(key + ": " + student[key]);
}

// nested objects
let company = {
  name: "Tech Corp",
  employees: [
    {
      name: "Alice",
      age: 20,
      isEnrolled: true,
      courses: ["Math", "Physics", "Chemistry"],
    },
    {
      name: "Bob",
      age: 22,
      isEnrolled: false,
      courses: ["Biology", "Geology"],
    },
  ],
};

// Accessing nested objects
console.log(company.employees[0].name); // Alice

// methods in objects
let person = {
  name: "Alice",
  age: 20,
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};

person.greet(); // Hello, my name is Alice

// destructuring objects
let { name, age } = person;
console.log(name); // Alice
console.log(age); // 20

//
