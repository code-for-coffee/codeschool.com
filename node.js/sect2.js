// sect2.js
// Events
// many objects i node emit events
// .netServer -> request
// EventEmitter

// custom event EventEmitter
var EventEmitter = require('events').EventEmitter;
var logger = new EventEmitter();
logger.on('error', function(message) {
	console.log("Err" + message);
});
// trigger 
logger.emit('error', 'spilled milk');

var server = http.createServer();
server.on('request', fucntion(request, response) { ... });
server.on('close', function() { ... });

//ch1
var events = require('events');
var EventEmitter = events.EventEmitter;
var chat = new EventEmitter();
chat.on('message', function(message) {
  console.log(message);
});

//ch2
var events = require('events');
var EventEmitter = events.EventEmitter;

var chat = new EventEmitter();
var users = [], chatlog = [];

chat.on('message', function(message) {
  chatlog.push(message);
});

chat.on('join', function(nickname) {
  users.push(nickname);

});

// Emit events here
  
chat.emit("join", "ney");
chat.emit("message", "sup");

//ch3
var http = require('http');

var server = http.createServer();

server.on('request', function(request, response) {
  response.writeHead(200);
  response.write("Hello, this is dog");
  response.end();
});

server.listen(8080)


//ch4
var http = require('http');

var server = http.createServer();
server.on('request', function(request, response) {
  response.writeHead(200);
  response.write("Hello, this is dog");
  response.end();
});
server.on('request', function(request, response) {
  console.log("New request coming in...");
});
server.listen(8080);


//ch5
var http = require('http');
var server = http.createServer();

server.on('request', function(request, response) {
  response.writeHead(200);
  response.write("Hello, this is dog");
  response.end();
});

server.on('request', function(request, response) {
  console.log("New request coming in...");
});

server.on('close', function() {
  console.log("Closing down the server...");
});

server.listen(8080);
