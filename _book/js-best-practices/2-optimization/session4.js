/**
 * Created by james on 7/14/2014.
 */

// Test speed of your code
// for the best user experience

var firstRegimentNewbs = ["Grimby", "Jark", "Bunder"],
	firstRegimentKnights = ["Kyp", "Mara", "Luke"];
function Knight (name, regiment) {
	this.name = name;
	this.regiment = regiment;
	switch (regiment) {
		case 1:
			this.weapon = "Broadsword";
			break;
		case 2:
			this.weapon = "Claymore";
			break;
		case 3:
			this.weapon = "Longsword";
			break;
		default:
			alert(name + " has an incorrect regiment!");
	}
}

// console.time & console.timeEnd - automatically prefaces the time measurement with
// the string we passed in as a paramter
console.time("Time to add " + firstRegimentNewbs.length + " knights");
for (var i = 0, x = firstRegimentNewbs.lenth; i < x; i++) {
	var newGuy = new Knight(firstRegimentNewbs[i], 1);
	firstRegimentKnights.push(newGuy);
}
console.timeEnd("Time to add " + firstRegimentNewbs.length + " knights");

console.time("Time to add " + firstRegimentNewbs.length + " knights");
for (var i = 0, x = firstRegimentNewbs.lenth; i < x; i++) {
	firstRegimentKnights.push(new Knight(firstRegimentNewbs[i], 1););
}
console.timeEnd("Time to add " + firstRegimentNewbs.length + " knights");

// multiple timers can run at one time
// In the timing of one particular process, the messages must match exactly for the opening .time() and the closing .timeEnd()

var array = ["Inverted Peninsula", ",", "Inverted Peninsula", ", ", "I", "—", "P", "...", "hmmm", "."];
var internalThoughts = "";
console.time("Test how log it will take the join to run");
internalThoughts = array.join(" ");
console.timeEnd("Test how log it will take the join to run");
console.log(internalThoughts);