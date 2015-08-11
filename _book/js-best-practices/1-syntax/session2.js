/**
 * Created by codeforcoffee on 7/11/14.
 */

// logical assignment with OR
var armory = {
	addSword: function(sword) {
		this.swords = this.swords ? this.swords : [];
		// does swords exist? if so use otherwise create empty array
		this.swords.push(sword);
	}
}

// turn into logical
this.swords = this.swords ? this.swords : [];
// when used in assignment, the OR operator will select the first value that is "truth"ish.
this.swords = this.swords || [];
// swords = swords OR empty array
// OR will stop circuiting (short-circuit) once it finds something that has value
// so order matters! left to right in importance

var armory = {
	addSword: function(sword) {
		this.swords = this.swords || [];
		// does swords exist? if so use otherwise create empty array
		this.swords.push(sword);
	}
}
armory.addSword("Broadsword");
armory.addSword("Katana");
armory.addSword("Claymore");

var pocketStuff = ["Dragon Tooth", "Adventure Diary", "Silver Tiger Coin"];
var cluesToThePast = pocketStuff || [] ;
getMyIdentity(cluesToThePast);

function getMyIdentity( memories ){
	var identity = ( memories.indexOf("Adventure Diary") >= 0 ) ? "The One Who Learns" : undefined;
	return identity || "unknown";
}

// "AND" (&&) - find the rightmost truthy value or the first falsy value
var result1 = undefined && 42;
console.log(result1); //    => undefined
var result2 = 0 && ["Sweet", "Salty"];
console.log(result2); //    => 0
var result3 = "" && {type: "ring", stone: "diamond"};
console.log(result3); //    => ""
var result4 = "King" && "arthur";
console.log(result4); //    => "arthur"

armory.retrieveSword = function(request) {
	return (this.swords.indexOf(request) >= 0) ?
		this.swords.splice(this.swords.indexOf(request), 1)[0] :
		alert("No " + request + " here");
}

var isKnight = true;
var weapon = isKnight && armory.retrieveSword("Katana");

var strength = true;
var fear = false;
var pack = {
	food: [ "carrot",
		"mystery meat",
		"apple",
		"crust of bread",
		"spicy dried sausage",
		"carrot",
		"wedge of sharp cheese",
		"jug of milk",
		"mystery meat",
		"carrot"
	],
	addFood: function(foodItem){
		this.food = this.food || [];
		this.food.push(foodItem);
	},
	enoughFood:function(amount){
		return(this.food.length >= amount);
	}
};

var surviveThisTrial = strength && !fear && pack.enoughFood(10);
console.log(surviveThisTrial);

function sansTemple(direction){
	var happensNext;
	switch(direction){
		case "right hallway" : happensNext = "You find a door, it is locked. You head back from where you came.";
			break;
		case "left hallway" : happensNext = "You find a door, it is locked. You head back from where you came.";
			break;
		case "forward hallway" : happensNext = "You find a door, it is locked. You head back from where you came.";
			break;
		case "lower tunnel" : happensNext = "You find a door, it is locked. You head back from where you came.";
			break;
		case "hidden door" : happensNext = "You go through the door into a room. A small, very dark room, that smells of dust and sulfur...";
			break;
		default: happensNext = "You stand there, gaping, not moving. Aiedra wonders, are you alive?";
			break;
	}
	return happensNext;
}
sansTemple();function sansTemple(direction){
	var happensNext;  return happensNext;
}
sansTemple();

function sansTemple(direction){
	var happensNext;
	switch(direction){
		case "right hallway" :
		case "left hallway" :
		case "forward hallway" :
		case "lower tunnel" : happensNext =  "You find a door, it is locked. You head back from where you came.";
			break;
		case "hidden door" : happensNext =  "You go through the door into a room. A small, very dark room, that smells of dust and sulfer...";
			break;
		default: happensNext =  "You stand there, gaping, not moving. Aiedra wonders, are you alive?";
	}
	return happensNext;
}
sansTemple();

function CaretakerMedallion (caretaker){
	switch(caretaker) {
		case "ElementElder": this.goldenEdge = "Consilium autem liberabit vos";
		case "ColorCardinal": this.silverStamp = "Non video colorem, colore videt me";
		case "PixelPriest": this.bronzeBanner = "Omne initium est a pixel";
		case "FontFriar": this.circumscribedSquare = "Venit Comic Sans";
		case "StyleSensei": this.innerRing = "Ars autem est in aeternum";
	}
}