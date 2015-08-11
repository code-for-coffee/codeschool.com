/**
 * Created by james on 7/14/2014.
 */
// Loop optimization

/*
	using cached values will curtail lengthy, repetitive access to the same data
 */

var x = treasureChest.necklaces.length;
for (var i = 0; i < x; i++) {
	console.log(treasureChest.necklaces[i]);
}

// =>
// declare all variables at init of loop
var list = treasureChest.necklaces;
for (var i = 0, x = treasureChest.necklaces.length; i < x; i++) {
	console.log(list[i]);
}

// choosing the best kind of loop
// methods added to the prototype become enumerable just like indices

function populationGetter( location ){
	var list = "";
	var numCritters = location.critters.length;
	for(var i = 0; i < numCritters; i++){
		list += location.critters[i];
	}
	return list.trim();
}

function populationGetter( location ){
	var list = "";
	for(var i = 0, numCritters = location.critters.length; i < numCritters; i++){
		list += location.critters[i];
	}
	return list.trim();
}

for(var i = 0, inhabitantsLength = invertedPeninsula.inhabitants.length;i < inhabitantsLength; i++){
	console.log(invertedPeninsula.inhabitants[i].name);
}