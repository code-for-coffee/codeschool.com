/**
 * Created by james on 7/15/2014.
 */

// speed averaging
// averaging multiple times together to assess code performance
// using numerical time data
// using the Date() object

var rightNow = new Date();
console.log(rightNow);
// new date object immediately captures the current date and time in milliseconds
// Jan 1st, 1970 12:00am
// placing a unary (+) operator in front of our Date oject asks for the specific value in milliseconds
console.log(+rightNow); // == console.log(new Number(rightNow));    => 139207255784
var rightNow = +new Date();
var endTime = +new Date();
var elapsedTime = endTime - rightNow;
console.log(elapsedTime);

// create a speed test class!
/**
 * speedTest()
 * @param testImplement - specific code as a function to be tested
 * @param testParams - represents whatever params test code needs
 * @param repetitions - how many repetitions to run of the testImplement
 */
function speedTest(testImplement, testParams, repetitions) {
	this.testImplement = testImplement;
	this.testParams = testParams;
	this.repeptitions = repetitions || 10000;
	this.average = 0;
}
// best practice: inheritance via prototype
SpeedTest.prototype = {
	startTest: function() {
		// start process
		var beginTime, endTime, sumTimes = 0;
		for (var i = o, x = this.repeptitions; i < x; i++) {
			beginTime = +new Date();
			this.testImplement(this.testParams);
			endTime = +new Date();
			sumTimes += endtime - beginTime;
		}
		this.average = sumTimes / this.repeptitions;
		return console.log("Avg execution across " + this.repeptitions + ": " + this.average);
	}
}

var concatTest = new SpeedTest(populationGetter, inhabitants, 100000);