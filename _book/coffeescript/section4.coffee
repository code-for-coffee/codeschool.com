#section 4 - arrays, objects, iterations
#ranges

range = [1..4]
range = [1...4]

start = 5
end = 10
range = [start..end]
range[1..3]
range[1...range.length]
range[1..-1]

storeLocations = [myObj, myObj2]
storeLocationsTwo = [
	"Orlando"
	"Europa"
	"Mars"
]

storeLocationsTwo.forEach(location, index) ->
	alert "Location: #{location}"

for location in storeLocationsTwo
	alert "Location #{location}"

#list comprehension
alert "location #{location}" for location in storeLocationsTwo

#add ",FL" to each storeLocation
"#{loc}, FL" for loc in storeLocations

#overwrite original array
storeLocations = ("#{loc}, FL" for loc in storeLocations)

#filter
geoLocate(loc) for loc in storeLocations when loc isnt "Sanford"

newLocs = []
for loc in storeLocations
	newLocs.push loc if loc isnt "Sanford"

newLocs = (loc for loc in storeLocations when loc isnt "Sanford")

#splats
searchLocations = (brand, cities...) ->
	"Looking for #{brand} in #{cities.join(',')}"

searchLocations 'starbucks', 'orlando', 'woo'

params = ['starbucks', 'orlando', 'winter park']
searchLocations(params...)

#objects
cofee = {name: 'french', strength: 1}
#or
coffee = 
	name: 'french'
	strength: 1
	brew: -> alert("brewing #{@name}")
	pour: (amount=1) ->
		if amount is 1
			"Poured a cup"
		else
			"Poured #{amount} cups!"

coffees =
	french:
		strength: 1
		in_stock: 20
	italian: 
		strength: 4
		in_stock: 4
	decaf: 
		strength: 0
		in_stock: 99

coffees.italian.in_stock

"#{coffee} has #{attrs.in_stock}" for coffee, attrs of coffees

for coffee, attrs of coffees
	to_print = for coffee, attrs of coffees when attrs.in_stock > 0
		"#{coffee} has #{attrs.in_stock}"
	to_print.join ", "


#ch1
coffee = [1..10]

#ch2
coffee = [1...11]

#ch3
coffee: ->
  name: "Russian"
  level: 2
  isRussion: -> true

#ch4
for person in people
  if person.age > 18 then console.log(person.name)

#ch5
console.log(person.name) for person in people when person.age > 18

#ch6
addCoffee(coffee) for coffee in coffeeList when not coffee.isRussian?()

#ch7
displayTopPicks = (bestCoffee, suggested...) ->
  alert('Top #1 ' + bestCoffee)
  alert('Suggested: ' + suggested.join(","))