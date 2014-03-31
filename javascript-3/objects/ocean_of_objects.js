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