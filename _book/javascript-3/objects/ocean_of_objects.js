/**
 * Created by codeforcoffee on 3/31/14.
 */

var vehicle1 = {type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot"};
var vehicle2 = {type: "Jet Ski", capacity: 1, storedAt: "Reef Dock"};
var vehicle3 = {type: "Submarine", capacity: 8, storedAt: "Underwater Outpost"};
var vehicles = [vehicle1, vehicle2, vehicle3];
var findVehicle = function (name, list){
    for(var i = 0; i<list.length; i++){
        if(list[i].type == name){
            return list[i].storedAt;
        }
    }
};
findVehicle("Submarine", vehicles);

var vehicle1 = {type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot"};
var vehicle2 = {type: "Jet Ski", capacity: 1, storedAt: "Reef Dock"};
var vehicle3 = {type: "Submarine", capacity: 8, storedAt: "Underwater Outpost"};

vehicle1.capacity = vehicle1.capacity + 4;
vehicle1.submersible == false;
vehicle2.submsersible == false;
vehicle3.weapon = "Torpedoes";
vehicle2.weapon = "Lasers";
vehicle3.capacity = vehicle3.capacity * 2;
vehicle1.weapon = "Rear-Mounted Slingshot";
vehicle3.submersible == true;


var vehicle1 = {type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot"};
var vehicle2 = {type: "Jet Ski", capacity: 1, storedAt: "Reef Dock"};
var vehicle3 = {type: "Submarine", capacity: 8, storedAt: "Underwater Outpost"};
vehicle1.capacity += 4;
vehicle2.submersible = false;
vehicle3.weapon = "Torpedoes": 8;
vehicle1.submersible = false;
vehicle2.weapon = "Lasers": 4;
vehicle3.capacity *= 2;
vehicle1.weapon = "Rear-Mounted Slingshot": 1;
vehicle3.submersible = true;

var superBlinders = [ ["Firelight", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];
var lighthouseRock = {
    gateClosed: true,
    bulbs: [ 200, 500, 750 ],
    capacity: 30,
    secretPassageTo: "Underwater Outpost"
};
delete lighthouseRock.bulbs;
lighthouseRock.weaponBulbs = superBlinders;
console.log(lighthouseRock.weaponBulbs[2][0]);





var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];
var lighthouseRock = {
    gateClosed: true,
    weaponBulbs: superBlinders,
    capacity: 30,
    secretPassageTo: "Underwater Outpost",
    numRangers: 0
};
function addRanger(location, name, skillz, station){
    location.numRangers++;
    location["ranger" + location.numRangers] = {name: name, skillz: skillz, station: station};
}
addRanger(lighthouseRock, "Nick Walsh", "magnification burn", 2);
addRanger(lighthouseRock, "Drew Barontini", "uppercut launch", 3);
addRanger(lighthouseRock, "Christine Wong", "bomb defusing", 1);



//
var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];
var lighthouseRock = {
    gateClosed: true,
    weaponBulbs: superBlinders,
    capacity: 30,
    secretPassageTo: "Underwater Outpost",
    numRangers: 3,
    ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
    ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
    ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1}
};
function dontPanic (location){
    var list = "";
    for(var i = 1; i<=location.numRangers; i++){
        list = list + location["ranger" + i].name + ", man the " +
            location.weaponBulbs[location["ranger"+i].station-1][0] +
            "!\n";
    }
    alert("Avast, me hearties!\n" +
        "There be Pirates nearby! Stations!\n" + list);
}
dontPanic(lighthouseRock);
