#section2
#applying jquery

$ ->
	changeTab = (e) ->
		e.preventDefault()
		$("#tabs li a.active").removeClass "active"
		$(@).addClass "active"
	$("#tabs ul li a").click changeTab

$("#tabs #error a").click (e) ->
	e.preventDefault()

$("#confirm").queue ->
	$(@).queue()

showNumberOfFlights = (e) ->
	num_flights = $(@).data 'flights'
	$(@).append "<span>#{num_flights}</span>"
	$("#tabs span.tooltip").show()


#ch1
# jQuery(function($) {
#   $('#newCoffee a').click(function() {
#     alert('New coffee added');
#   });
# });

$("#newCoffee a").click ->
  alert "New coffee added"

#ch2
# $('#newCoffee a').click(function() {
#   var name = prompt('Name of coffee:');
#   alert("New coffee added: " + name);
# });

$("#newCoffee a").click ->
  name = prompt "Name of coffee: "
  alert "#{name}"

#ch3
# $('#newCoffee a').click(function() {
#   var coffee, name;
#   name = prompt('Name of coffee:');
#   coffee = $("<li>" + name + "</li>");
#   $('ul.drink').append(coffee);
# });

$("#newCoffee a").click ->
  name = prompt "Name of coffee:"
  coffee = $("<li>#{name}</li>")
  $("ul.drink").append coffee

 #ch4
 # $('.drink li a').click(function(e) {
#   e.preventDefault();
#   alert($(this).text());
# });

$('.drink li a').click (e) ->
  e.preventDefault()
  alert $(@).text()

#ch5
# $('.drink li').mouseenter(function() {
#   $(this).find('span').show();
# });
# $('.drink li').mouseleave(function() {
#   $(this).find('span').hide();
# });

$('.drink li').mouseenter ->
  $(@).find('span').show()
$('.drink li').mouseleave ->
  $(@).find('span').hide()

#ch6
# $('.drink li').hover(function() {
#   $(this).find('span').show();
# }, function() {
#   $(this).find('span').hide();
# });

$('.drink li').hover(
  ->
    $(@).find('span').show()
  ->
    func2 = $(@).find('span').hide()
)