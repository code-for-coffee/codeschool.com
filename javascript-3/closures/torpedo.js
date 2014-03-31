function assignTorpedo(name, passengerArray) {
    for (var i = 0; i < passengerArray.length; i++) {
        if (passengerArray[i] == name) {
            return function () {
                alert("Ahoy, " + name + "!\n" +
                      "Man your post at torpedo #" + (i+1) + "!");
            };
        }
    }
}

var subPassengers = ["Luke", "Chewie", "Han", "Leia", "Yoda", "Boba"];
var giveAssignment = assignTorpedo("Chewie", subPassengers);
giveAssignment();


function makeTorpedoAssigner(passengerArray) {
    return function(name) {
        for (var i = 0; i < passengerArray.length; i++) {
            if (passengerArray[i] == name) {
                alert("Ahoy, " + name + "!\n" +
                    "Man your post at torpedo #" + (i+1) + "!");
            }
        }
    };
}


var subPassengers = ["Luke", "Chewie", "Han", "Leia", "Yoda", "Boba"];
var getTorpedoFor = makeTorpedoAssigner(subPassengers);
getTorpedoFor("Yoda");
getTorpedoFor("Luke");