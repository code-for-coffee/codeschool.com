# Gulp :love: ES6 Boilerplate

Boilerplate Gulpfile for transpiling ES6 -> ES5

## How it Works

* `.js` Files in the `app/` directory are watched by Gulp.
* When a change has occured, Gulp will then transpile your ES6 code to ES6
* The results are stored in the `/dist` folder.

## Usage

1. Clone this repository.
2. Run `npm install` to install gulp and other dependencies.
3. Run `gulp` to continually watch for changes in your app directory.

#### Test Case

The following Javascript snippet uses the **Class** syntactic sugar from ES6. Feel free to use this as a test.

```javascript
'use strict'

class Model {
  constructor(properties) {
    this.properties = properties;
  }

  toObject() {
    return this.properties;
  }
}

console.log(Model);
var m = new Model({ name: "test"});
console.log(m.toObject());
```
