#section6
#object orientation

class Coffee
	constructor: (name, strength=1) ->
		@name = name
		@strength = strength

class Coffee
	constructor: (@name, @strength=1) ->
	brew: -> alert "Brewing #{@name}"
	pour: (amount=1) ->
		if amount is 1
			"poured a single cup"
		else
			"poured #{amount} cups"

french = new Coffee("french", 2)
french.brew()

#inheritance
class Maxgoodhouse extends Coffee
	constructor: (@name, @strength=0) ->
		@brand = "Maxgoodhouse"

boring = new Maxgoodhouse()
boring.brew()

#ch1
class Coffee
  constructor: (name, level) ->
    @name = name
    @level = level

  isRussian: -> @name is 'Russian'

#ch2
coffee = new Coffee('Cuban', 3)

#ch3
class Coffee
  constructor: (@name, @level=0) ->
  isRussian: -> @name is 'Russian'

#ch4
class Coffee extends Drink
  constructor: (@name, @level=0) ->
  serve: ->
    return false if @sleeve is not on
    super()

#ch5
class DrinkLink
  watchClick: ->
    $('a').click ->
      $(@).css('color', '#F00')

#ch6
class DrinkLink
  constructor: (@linkClicked=false) ->
  watchClick: ->
    $('.drink a').click (event) =>
      $(event.target).css('color', '#F00')
      @linkClicked = true