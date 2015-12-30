// !!! this should be ran in a browser's dev tools !!!

// asynchronous callbacks in js
// the window.requestAnimationFrame
// https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
// The Window.requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the browser call a specified function to update an animation before the next repaint. The method takes as an argument a callback to be invoked before the repaint.

function logger(msg) {
  console.log(msg);
}

window.requestAnimationFrame(logger);
console.log('fin');
