/**
 * Created by james on 7/15/2014.
 */
// Number nonsense?
/*

Javascript uses binary floating point values to handle all of its decimal based operations.
.toFixed() allows us to select the amount of decimal places to display; it also
rounds to the last indicated position
 */

function tax(price, percent) {
	return (price*percent/100).toFixed(2);
}

/*
parsefloat() turns strings with decimals into numbers
 */
function tax(price, percent) {
	return parseFloat((price*percent/100).toFixed(2));
}
/*
parseInt() also converts numerical strings
it can cause unexpected errors, though
it accepts octal, hexadecimal, and decial values.
use a radix value to ensure correct parsing

 parseInt() will accept any radix value between 2 & 36 upon which to base the numerical string it has received.

 */
var x = parseInt(021, 10); //   => 21, the 10 denotes the radix

/*
testing for number presence before operations with them
always use typeof AND isNaN()
 */
var birdFeeder = {
	totalFeed: 4,
	getFeed: function(feedRequested){
		var returnedFeed = 0;
		if(this.totalFeed >= feedRequested) {
			returnedFeed = feedRequested;
			this.totalFeed -= feedRequested;
		} else {
			returnedFeed = this.totalFeed;
			this.totalFeed = 0;
		}

		return parseFloat(returnedFeed.toFixed(1));
	},
	fillFeed: function(additionalFeed){
		this.totalFeed += additionalFeed;
	}
};
