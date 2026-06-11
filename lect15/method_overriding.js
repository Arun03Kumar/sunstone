// example of method overriding in JavaScript

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

class GoogleForm extends Form {
  fill() {
    console.log(
      `Filling Google Form for ${this.name} with email ${this.email}`,
    );
  }

  submit() {
    console.log(`Submitting Google Form for ${this.name} + super.submit()`);
    super.submit();
  }
}

const myForm = new GoogleForm("placement", "placement@example.com");
myForm.fill();
myForm.submit();
