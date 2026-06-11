// setter functions

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  set userInfo(info) {
    const [name, age] = info.split(", ");
    this.name = name;
    this.age = age;
  }
}

const user = new User("Arun", 25);
user.userInfo = "Arun, 30";

console.log(user.name);
