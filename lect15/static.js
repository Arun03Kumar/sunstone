class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static createUser(name, age) {
    return new User(name, age);
  }
}

const user1 = User.createUser("Arun", 25);
console.log(user1.name); // Arun
console.log(user1.age); // 25

class MathUtils {
  static PI = 3.14159;
  static add(a, b) {
    return a + b;
  }
}
console.log(MathUtils.PI); // 3.14159
console.log(MathUtils.add(5, 3)); // 8
