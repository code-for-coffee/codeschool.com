var fs = require('fs');
var timestamp = new Date().toString();
var contents;

//synchronous
fs.writeFileSync('date.txt', timestamp);
contents = fs.readFileSync('date.txt');
console.log('1: checking contents');
console.assert(contents == timestamp);
console.log('1: fin');

//notice the order of output

//asynchronous
var newTimestamp = new Date().toString();
// writeFile
fs.writeFile('newDate.txt', newTimestamp, function(err){
  if (err) throw err;
  // readFile inside of the writeFile callback
  fs.readFile('newDate.txt', function(err, contents){
    if (err) throw err;
    console.log('2: checking contents');
    console.assert(contents == newTimestamp);
  });
  console.log('2: last line in callback');
});
console.log('2: fin, again');

// do not expect synchronous results when writing async tasks
var fs = require('fs');
var finalTimestamp = new Date().toString();
var finalContents;

fs.writeFile('finalDate.txt', finalTimestamp);
fs.readFile('finalDate.txt', function(err, data) {
  if (err) throw err;
  finalContents = data;
});
console.log('3: Comparing contents');
console.assert(finalTimestamp == finalContents);
