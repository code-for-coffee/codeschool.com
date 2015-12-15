'use strict';

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