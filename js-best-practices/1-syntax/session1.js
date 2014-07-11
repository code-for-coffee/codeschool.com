/**
 * Created by codeforcoffee on 7/10/14.
 */
/**
 *  ternary conditionals
 */

// conditional
var isJames = false;
var weapon;

if (isJames) {
    weapon = "Dragonwrath";
} else {
    weapon = "shovel";
}

// ternary
someCondition ? pickThisIfTrue : pickThisIfFalse;
// ifThisConditionIsMet (? = then) { pickThisIfTrue } else { pickThisIfFalse }
isArthur ? "Dragonwrath" : "Shovel";    // -> Shovel
// ternary always return a result; we can assign it
var isArthur = false;
var weapon = isArthur ? "Dragonwrath" : "Shovel";    // -> Shovel

/*
    In Javascript, any value that is not "false", 0, undefined, NaN, "", or null
    will always evaluate as "truth"
 */

console.log("curr weapon: " + (isArthur ? "Excalibur" : "Longsword"));
var isArthur = true;
var isKing = false;
console.log("curr weapon: " + (isArthur && isKing ? "Excalibur" : "Longsword"));    // -> false

// Ternaries can take action; any executable statement can serve as a ternary's response choices
isArthur && isKing ? alert("Hail Arthur, King of Brittons") : alert("Charge on ye knight for the king!");

// build & choose functions on the fly (anon funcs)
!(isArthur && isKing) ? function () {
    console.log("Current weapon: shovel");
    alert("Ye be a commoner!");
}() : function () {
    console.log("Current weapon: Excalibur");
    alert("King be praised!");
}();

// multiple actions in ternaries
// they can be within a single ternary response if grouped by parantheses/commas
var weapon;
var helmet;
isArthur && isKing ? (weapon = "Excalibur", helmet = "goosewhite")
                    :
                    (weapon = "Sword", helmet = "hat");

// ternaries can be nested
var weapon;
var helmet;
var isArcher = true;
isArthur && isKing ? (weapon = "Excalibur", helmet = "goosewhite")
    :
    isArcher ? (weapon = "longbow", helmet = "mail") :
    (weapon = "Sword", helmet = "hat"); // -> longbow, mail