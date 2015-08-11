# variables and functions
message = "coffee"
alert(message)

# no variable declaration
# no semicolons
# coffeescript only creates function expressions

coffee = ->
    confirm "Ready for coffeescript?"

coffee = (message) ->
    answer = confirm message
	#"your answer is " + answer;
	"Your answer is #{answer}"

# calling functions
coffee = ->
coffee = (param, other) ->

alert coffee("Ready for some coffee?")

# optional params
coffee = (message = "Ready for some java?") ->
	answer = confirm message
	"Your answer is #{answer}"

#testing compiler

#ch3
greet = (msg) ->
  alert "Hello CoffeeScript #{msg}"

#ch4
greet = (message, another) ->
  alert "#{message} #{another}"

#ch5
greet = (name='Stranger') -> alert name

#ch6
greet = (name='Stranger') ->
  "Hello, #{name}"

#ch7
sum = (num1, num2) ->
  num1+num2