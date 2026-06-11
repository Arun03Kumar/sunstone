// define a class and the getter functions of it
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get userInfo() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

const user = new User("Arun", 25);

console.log(user.name); // Name: Arun, Age: 25
