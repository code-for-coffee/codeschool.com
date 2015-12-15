'use strict';

// let allows us to declare a variable for a block of code
// but only for that block of code

{
  let someVariable = 'This variable exist only in this block scope';
  console.log(someVariable);
}

if (typeof someVariable == 'undefined' || elem == null) {
  console.log('It isn\'t in scope now');
}

class Model {
  constructor(properties) {
    this.properties = properties;
  }

  toObject() {
    return this.properties;
  }
}

console.log(Model);
var m = new Model({ name: "test" });
console.log(m.toObject());