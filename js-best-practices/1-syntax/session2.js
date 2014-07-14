/**
 * Created by codeforcoffee on 7/11/14.
 */
// logical assignment
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
