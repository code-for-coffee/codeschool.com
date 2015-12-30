// we use callbacks every day!
// for example...

var jsonArray = [
  {"SomeKey":"Some Value"},
  {"SomeKey":"A different value"},
  {"SomeKey":"By golly, another value!"}
];

// for each item in jsonArray
jsonArray.forEach(function(item) {
  console.log(item);
});

// we could also write this with a defined function
// vs the anonymous above
function logger(val) {
  console.log('logger:')
  console.log(val);
};

jsonArray.forEach(logger);
