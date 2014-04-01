/**
 * Created by codeforcoffee on 3/31/14.
 */

// valueOf
// constructor
// toLocaleString
// toString
// isPrototypeOf
// propertyIsEnumerable
// hasOwnProperty

// an object's parent is its prototype
// passing down properties via prototype = inheritance

Array.prototype.countCattle = function ( kind ){
    var numKind = 0;
    for(var i = 0; i<this.length; i++){
        if(this[i].type == kind){
            numKind++;
        }
    }
    return numKind;
};



//
Object.prototype.noCalvesYet = function () {
    if(this.type == "cow" && this.hadCalf == null){
        return true;
    }
    return false;
};
Array.prototype.countForBreeding = function(){
    var numToBreed = 0;
    for(var i = 0; i< this.length; i++){
        if(this[i].noCalvesYet()){
            numToBreed++;
        }
    }
    return numToBreed;
};
var numPriorityCows = canyonCows.countForBreeding() +
    valleyCows.countForBreeding() +
    forestCows.countForBreeding() +
    badlandsCows.countForBreeding();
alert("Herd-merger has indicated " + numPriorityCows +
    " cows of top breeding priority.");
