#section3 - conditions/operators

if age > 30
	alert "beer"

alert "no beer" if age < 21


if age > 18 then alert "Can do stuff" else alert "just a kid"
# there are no ternary operators in coffeescript

#operators
# == 	is 			(js) ===
# !- 	isnt		(js) !--
# not				(js) !
# and				(js) &&
# or 				(js) ||
# true	yes	on 		(js) true
# false no off 		(js) false

if paid() and coffee() is on then pour()

addCaffeine() if not Decaf()
addCaffeine() unless Decaf()

# switch statements
message = switch cupsOfCoffee
	when 0 then "asleep"
	when 1 then "eyes open"
	when 2 then "buzzed"
	else "dangerous"

#existential operators
#if (typoeOf cupsOfCoffee !== "undefined" && cupsOfCoffee !== null) {
#	alert('exists');
#}

if cupsOfCoffee?
	alert "it exists"

alert "it exists" if cupsOfcoffee?

#default values
if not cupsOfCoffee? 
	cupsOfcoffee = 0
#cupsOfwoffee ?= 0

if coffeePot?
	coffeePot.brew()

coffeePot?.brew()

vehicle.start_engine?().shift_gear?()

#ch1
if caffeineLevel > 5
  alert "High Caffeine Level"

#ch2
if caffeineLevel > 5
  alert "Too High"
else
  alert "OK"

#ch3
# if(!coffeeReady){
#   alert('Please wait 5 more minutes.')
# }
alert "Please wait 5 more minutes" unless coffeeReady

#ch4
if lowLevel < newLevel < highLevel
  alert 'ok'
else
  alert 'abnormal caffeine level'

#ch5
# if (newLevel === 1) {
#   message = 'Out of bed yet?';
# } else if (newLevel === 2) {
#   message = 'Good morning!';
# } else {
#   message = 'You should stop while you can';
# }

switch newLevel
  when 1 then message = "Out of bed yet?"
  when 2 then message = "Good morning!"
  else "You should stop while you can"

#ch6
# if (typeof newLevel !== "undefined" && newLevel !== null){
#   checkLevel(newLevel);
# } else {
#   resetLevel();
# }
if newLevel? 
  checkLevel(newLevel)
else
  resetLeveL()

#ch7
if level?
  checkLevel?(level)
else
  resetLevel?()
