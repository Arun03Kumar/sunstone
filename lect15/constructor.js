class Form {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  fill() {
    console.log(`Filling form for ${this.name} with email ${this.email}`);
  }

  submit() {
    console.log(`Submitting form for ${this.name}`);
  }
}

const myForm = new Form("placement", "placement@example.com");
myForm.fill();
myForm.submit();

const anotherForm = new Form("registration", "registration@example.com");
anotherForm.fill();
anotherForm.submit();
