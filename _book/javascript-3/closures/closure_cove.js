function buildCoveTickerMaker(transport) {

    var passengerNumber = 0;
    return function (name) {
        passengerNumber++;
        alert("here is your ticket via " + transport + ".\nwelcome to the cold closure cove, " + name + ". You are passgenger #" + passengerNumber);
    }

}

var getSubmarineTicket = buildCoveTickerMaker("submarine");
var getBattleShipTicket = buildCoveTickerMaker("battleship");
var getPirateSeagullTicket = buildCoveTickerMaker("pirate giant seagull");

getSubmarineTicket("mario");
getBattleShipTicket("luigi");
getPirateSeagullTicket("bowser");

