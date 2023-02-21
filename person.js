//classe p/ ligar o person ao index

class Person {
  constructor(name) {
    this.name = name;
  }

  sayMyName() {
    return `Hello, My name is ${this.name}`;
  }
}

module.exports = {
  Person,
};
