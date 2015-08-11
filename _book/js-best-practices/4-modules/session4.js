/**
 * Created by james on 7/15/2014.
 */

// augmenting existing properties/methods
// we add to the existing global namespace
// but none of these new variables and methods will have access to the prior ones
// augmented properties do not have access to prior private vars/meths
ARMORY = (function(oldNamespace) {
	// private code
	return oldNamespace;
})(ARMORY); // => import old namespace

CAVESOFCLARITY = function(caves){
	var sandScript = "";
	caves.setSandScript = function(message){
		sandScript = message;
	};
	return caves;
}(CAVESOFCLARITY);