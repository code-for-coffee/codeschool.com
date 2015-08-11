/**
 * Created by james on 7/15/2014.
 */
// Anonymous closures
// public methods and values trigger private methods/values

var ARMORY = {
	weaponList: ["sword", "shield", "bow", "Dagger"],
	armorList: ["mail", "leather", "plate"],

	makeWeaponRequest: function() {	return false },
	makeArmorRequest: function() { return true; },

	removeWeapon: function() {},
	replaceWeapon: function() {},
	removeArmor: function() {},
	replaceArmor: function() {}
}

// Javascript's closure feature will allow us to "privatize" properties
// immediately invoked function expression

var ARMORY = (function(){
	var weaponList = ["sword", "shield", "bow", "Dagger"];  // now is private
	var armorList = ["mail", "leather", "plate"];           // also private
	var removeWeapon = function() {};
	var replaceWeapon = function() {};
	var removeArmor = function() {};
	var replaceArmor = function() {};

	// in order to make some properties public, return an object
	// because this function expression is run immediately, the returned object
	// immediately becomes attributes of the ARMORY variable (namespace)
	return {
		makeWeaponRequest: function() { return false },
		makeArmorRequest: function() { return true; }
	}

})();

var CAVESOFCLARITY = {
	stalactites: 4235,
	stalagmites: 3924,
	bats: 345,
	SECRET: {
		treasureChests: 3,
		openChest: function(){
			this.treasureChests--;
			alert("DA DADADA DAAAAAAA!");
		}
	}
};

// to:
var CAVESOFCLARITY = function () {

	var treasureChests = 3;

	return {
		stalactites: 4235,
		stalagmites: 3924,
		bats: 345,
		SECRET: {
			openChest: function(){
				treasureChests--;
				alert("DA DADADA DAAAAAAA!");
			}
		}
	};
}();