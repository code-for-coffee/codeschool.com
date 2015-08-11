/*

	sample node.js server


*/

var http = require('http');
var fileSystem = require('fs');

http.createServer(function(request, response) {
    response.writeHead(200);
    fs.readFile('home.html', function(error, data) {
        response.write(data);
        response.end();
    });
    response.end();
}).listen(80);