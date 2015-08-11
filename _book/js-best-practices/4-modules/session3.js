/**
 * Created by james on 7/15/2014.
 */
// global imports
var wartime = true;
var ARMORY = (function(war){
	var weaponList = ["sword", "shield", "bow", "Dagger"];  // now is private
	var armorList = ["mail", "leather", "plate"];           // also private
	var removeWeapon = function() {};
	var replaceWeapon = function() {};
	var removeArmor = function() {};
	var replaceArmor = function() {};
	return {
		makeWeaponRequest: function() {
			if (war) {
				// let civilians have weaponry
			}
		},
		makeArmorRequest: function() { return true; }

	}

})(wartime); // => import that variable as the parameter

var LexicalLake = function (answer) {

	var depth = 400;
	var fish = 1200;
	var unknownSleepers = 3;

	return {
		getFish: function(){ return fish; },
		getDepth: function(){ return depth; },
		getSleepers: function() {return unknownSleepers; },
		awakenSleeper: function(){
			alert("Far below, in the deep, something awakens. Row faster.");
		},
		summonBoat: function(){
			if(answer === "agnostic"){
				alert("The boat fades into view.");
			}
			else{
				alert("...the lake is silent.");
			}
		}
	};
}(explorerAnswer);

var LEXICALLAKE = function (answer, foundShore) {

	var depth = 400;
	var fish = 1200;
	var unknownSleepers = 3;

	return {
		getFish: function(){ return fish; },
		getDepth: function(){ return depth; },
		getSleepers: function(){ return unknownSleepers; },
		awakenSleeper: function(){
			alert("Far below, in the deep, something awakens. Row faster.");
		},
		summonBoat: function(){
			if(answer === "agnostic"){
				alert("The boat fades into view.");
			}
			else{
				alert("...the lake is silent.");
			}
		},
		stopSleeper: function() {
			if (foundShore) {
				alert('That which has awoken shall now return to slumber.');
			} else {
				alert('A Sleeper cometh. Abandon hope.');
			}
		}

	};
}(explorerAnswer, madeItAcross);
