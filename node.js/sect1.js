//	section 1
//	uses v8 javascript runtime
// 	node provides wrapper around engine
//	entirely written in c
//	it is not a web framework
//	not multi threaded

//	callbacks are a big deal in node

//	blocking code
var contents = fs.readFileSync('/etc/hosts');
console.log(contents);
console.log('doing other stuff');

//	non-blocking
fs.readFile('/etc/hosts', function(err, contents) {
    console.log(contents);
});
console.log('doin on stuff');

// hello world
var http = require('http');
http.createServer(function(request, response) {
    response.writeHead(200);
    response.write("Hello, this is dog");
    response.end();
}).listen(8080);
console.log('listening on port 8080');

// run server 
node hello.js
// curl http://localhost:8080

/*
"Javascript has certain characteristics that make it very
different than other dynamic languages, namely that it has
no concept of threads. Its model of concurrency is 
completely based around events." - Ryan Dahl
*/

var http = require('http');
http.createServer(function(request, response) {
    response.writeHead(200);
    response.write("Dog is running");
    setTimeout(function() {
        response.write("Dog is done");
        response.end();
    }, 5000);
}).listen(8080);

//ch1
var http = require('http');
http.createServer(function(request, response) {
    response.writeHead(200);
    response.write("Hello, this is James");
    response.end();
}).listen(8080);

//ch2
var fs = require('fs');

fs.readFile('index.html', function(err, contents) {
    console.log(contents);
});

//ch3
node app.js

//ch4
var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
    response.writeHead(200);
    fs.readFile('index.html', function(err, data) {
        response.write(data);
        response.end();
    });
    response.end();
}).listen(8080);

//ch5
curl http: //localhost:8080

//ch6
var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });

    fs.readFile('index.html', function(err, contents) {
        response.write(contents);
        response.end();
    });

}).listen(8080);

//ch7
var http = require('http');

http.createServer(function(request, response) {
    response.writeHead(200);
    response.end("Hello, this is dog");
}).listen(8080);