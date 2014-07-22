/**
 * Created by james on 7/14/2014.
 */

// short performance tips
// Inheritance help with memory efficiency
// Protip: use prototype for shared stuff
// give all common methods that a "class" uses to the constructor's prototype
// protype should be used for shared properties and methods in order to increase memory efficiency.

function signalFire(id, startingLogs) {
	this.fireId = id;
	this.logsLeft = startingLogs;
}
signalFire.prototype = {
	addLogs: function() { },
	lightFire: function() {},
	someOtherfunction: function () {}
}

// adding dom elements ain't always speedy
// each new addition to the DOM causes document reflow (hinders user experience)
// you should bulk add via the DOM
// use a document fragment to insert additions all at once
var fragment = document.createDocumentFragment();   // staging area!

// declare variables as few times as possible
// Use a fragment to add conjunct elements, instead of touching the DOM over and over again.
var list = document.getElementById("kotwList"),
	kotw = ["knight1", "knight 2", "knight 3"],
	sleep = undefined,
	fragment = document.createDocumentFragment();

var knight = "Jenna",
	action = " strikes with a ",
	weapon = " wild phin";

// string concat
var turn = "";
turn += knight;
turn += action;
turn += weapon;

// performance boost when strings are inside of an array vs concat
// use the array.prototype.join() method

var jennaStrikes = ["Jenna", " strikes with a ", " wild phin"];
var string = jennaStrikes.join("\t");

var list = document.getElementById("population"),
	inhabitants = ["Nipping Global Variable", "Sneaky For-in", "Bulging Blocking Script"],
	fragment = document.createDocumentFragment();