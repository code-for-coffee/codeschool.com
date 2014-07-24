/**
 * Created by james on 7/15/2014.
 */
// Exception handling
// difference

/*
ReferenceError - object/type not defined or redefined
TypeError - not of the excepted type
 */

try {
	var someStuff = ["hi", "hello", "salut"];
	list.concat(someStuff);
} catch (error) {
	if (error instanceof ReferenceError) {
		alert(error + "\n" + "The someStuff array does not exist as a list");
	} else if (error instanceof TypeError) {
		alert(error + "\n" + "The someStuff array has no concat method.");
	}
}

//throw new ReferenceError();
//throw new TypeError();
/*
 A syntax error is detected by the JavaScript parser before the program is ever executed,
 whereas a run-time error can be the result of trying to execute perfectly valid javascript.
 */