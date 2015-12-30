// all XMLHttprequests are synchronous by default
var ajax = new XMLHttprequest();
ajax.open('get', 'blob.json');
ajax.send();

// make async http request
var async = true;

var xhr = new XMLHttpRequest();
xhr.open('get', 'data.json', async);
xhr.send();

// 3 second delay (never really do this plz)
var timestamp = Date.now() + 3000;
while (Date.now() < timestamp);

// add listeners...
function listener() {
  console.log('hello, i am listening');
}
