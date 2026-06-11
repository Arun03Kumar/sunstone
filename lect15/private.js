class User {
  _name;
  _age;
  #address;

  constructor(name, age, address) {
    this._name = name;
    this._age = age;
    this.#address = address;
  }

  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }

  get address() {
    return this.#address;
  }

  set name(name) {
    this._name = name;
  }

  set age(age) {
    this._age = age;
  }
}

const user = new User("Arun", 25, "123 Main St");
console.log(user.name);
console.log(user._age, user._name, user.#address);
