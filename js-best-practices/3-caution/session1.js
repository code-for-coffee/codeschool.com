/**
 * Created by james on 7/15/2014.
 */

// careful comparisons
// not all equality comparisons are equal
// === comparator compares both type AND contents
// a === ensures comparison reliability in an environment where data may have multiple or unknown types

//'4' == 4  => true
//'4' === 4 => false
//true == 1 => true
//false == 0    => true
// true === 1   => false
// false === 0  => false
//"\n \n \t" == 0   => true
//"\n \n \t" === 0  => false

// what if we need to verify an object's class?
// sometimes we must make sure an object has been built by a specific constructor
// or has a specific prototype
// use instanceof operator
// use this to ensure your examining precisely the type of object your code expects

function assignKnightsArmor (knights, armorAvail) {
	var x = knights.length;
	var y = armorAvail.length;
	for (var i = 0; i<x; i++) {
		for (var j = 0; j <y; j++) {
			if (armorAvail[j] instanceof ChainMail) {
				// your code here, assuming that the item was created by ChainMail
			}
		}
	}
}

function SyntaxBird(){}
DatatypeBird.prototype = Object.create(Bird.prototype);
SyntaxBird.prototype   = Object.create(Bird.prototype);

var TryCatchTaster = function(){},
	SwitchSnagger  = function(){},
	TernaryTracker = function(){};

TryCatchTaster = Object.create(SyntaxBird.prototype);
SwitchSnagger  = Object.create(SyntaxBird.prototype);
TernaryTracker = Object.create(SyntaxBird.prototype);

var NumberNommer = function(){},
	StringSeeker = function(){},
	BooleanBiter = function(){};

NumberNommer = Object.create(DatatypeBird.prototype);
StringSeeker = Object.create(DatatypeBird.prototype);
BooleanBiter = Object.create(DatatypeBird.prototype);

var duneInhabitants = [NumberNommer, StringSeeker, TryCatchTaster, SwitchSnagger, TernaryTracker, BooleanBiter];

var count = 0;
for(var i = 0; i < duneInhabitants.length; i++){
	if (duneInhabitants[i] instanceof SyntaxBird) {
		count++;
	}
}