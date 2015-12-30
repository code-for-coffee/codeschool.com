var http = require('http');
http.get('http://www.google.com', function(response) {
  console.log('response received');
});
