/**
 * Created by codeforcoffee on 4/29/14.
 */

var TodoList = Backbone.Collection.extend({
    model: TodoItem
});

var todoList = new TodoList();
todoList.length;
todoList.add(todoItem1);
todoList.at(0); // todoItem1
todoList.get(1); // todoItem1
todoList.remove(todoItem1);

// bulk population
var todos = [{
    description: "Pick up stuff",
    status: "incomplete"
}, {
    description: "Sleep",
    status: "incomplete"
}, {
    description: "Drink coffee",
    status: "incomplete"
}];
todoList.reset(todos);

// fetch data from server
var TodoList = Backbone.Collection.extend({
    url: '/todos'
});
var todoList = new TodoList();
todoList.fetch() //GET /todos

// Events on a collection
todoList.on('event-name', function() {
    alert('event-name happened!');
});
todoList.trigger('event-name');

//special events
todoList.on('reset', doThing);
todoList.fetch();
todoList.reset();

todoList.fetch({
    silent: true
});
todoList.off('reset', doThing);

//todoList.on(<event>, <function>);
// built in events for collections:
//	add - when model is added
// remove - whena  model is removed
// reset - when a model is reset or fetched

todoList.on('add', function(todoItem) {

});

// can also listen to model events such 
// change, change:<attr>, destroy, sync, error, all

//iteration
todoList.reset([{
    description: "Pick up stuff",
    status: "incomplete"
}, {
    description: "Sleep",
    status: "incomplete"
}, {
    description: "Drink coffee",
    status: "incomplete"
}]);
todoList.forEach(function(todoItem) {
    alert(todoItem.get('description'));
});
todoList.map(function(todoItem) {
    return todoItem.get('description');
});
todoList.filter(function(todoItem) {
    return todoItem.get('status') === 'incomplete';
});

// all iteration functions
/*
	foreach
	find
	every
	include
	min
	sortedIndex
	size
	rest
	indexOf
	chain
	reduce
	filter
	all
	invoke
	sortBy
	shuffle
	first
	last
	lastIndexOf
	reduceRight
	reject
	some
	max
	groupBy
	toArray
	initial
	without
	isEmpty
/**/

//ch1
var AppointmentList = Backbone.Collection.extend({
    model: Appointment
});

//ch2
var appointments = new AppointmentList();
var json = [{
    title: 'Back pain'
}, {
    title: 'Dry mouth'
}, {
    title: 'Headache'
}];
appointments.reset(json);

//ch3
var AppointmentList = Backbone.Collection.extend({
    model: Appointment,
    url: "/appointments"
});
var appointments = new AppointmentList();
appointments.fetch();

//ch4
var appointments = new AppointmentList();
appointments.on('reset', function() {
    alert(this.length);
});
appointments.fetch();

//ch5
appointments.fetch({
    silent: true
});

//ch6
var appointments = new AppointmentList();
appointments.on('add', function(appointment) {
    console.log(appointment.get('title'));
});

//ch7
var titles = appointments.map(function(appointment) {
    return appointment.get('title');
});