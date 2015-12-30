// sometimes we have events that trigger at variable times
// so in effect they are either synchronous or asynchronous
// however, we have no control over them!
// this can occasionally lead to problems

// using jQuery
$(document).ready(function(evt) {
  // jQuery calls this function when the DOM is ready to use
  console.log('DOM is here to partayyyyyy');
});
console.log('fin');

// depending on when the DOM is ready, this event fires
// https://api.jquery.com/ready/
// While JavaScript provides the load event for executing code when a page is rendered, this event does not get triggered until all assets such as images have been completely received. In most cases, the script can be run as soon as the DOM hierarchy has been fully constructed. The handler passed to .ready() is guaranteed to be executed after the DOM is ready, so this is usually the best place to attach all other event handlers and run other jQuery code. When using scripts that rely on the value of CSS style properties, it's important to reference external stylesheets or embed style elements before referencing the scripts.

// this creates a fork in the path
// the execution path of your code
// imagine if an event weren't attached when you needed it?
