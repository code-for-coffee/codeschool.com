/**
 * Created by james on 7/15/2014.
 */

// namespacing basics
/*
key to creating a namespace is a global object; called a "wrapper" for the space
nested namespacing is frequent in a module pattern
 */
var CAVESOFCLARITY = {
	stalactites: 4235,
	stalagmites: 3924,
	bats: 345,
	SECRET: {
		treasureChests: 3,
		openChest: function() {
			this.treasureChests--;
			alert("DA DADADA DAAAAAAA!");
		}
	}
};
