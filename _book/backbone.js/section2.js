/**
 * Created by codeforcoffee on 4/1/14.
 */
// models

var TodoItem = Backbone.Model.extend({});
var todoItem = new TodoItem(
    { description: 'pick up milk', status: 'incomplete' }
)

todoItem.get('description');
todoItem.set({status: 'complete'});

todoItem.url = '/todo';
todoItem.fetch();
todoItem.get('description');

var TodoItem = Backbone.Model.extend({urlRoot: '/todos'}); //restful
var todoItem = new TodoItem({id: 1});
todoItem.fetch(); // GET /todos/1

todoItem.set({description: 'pick up cookies'});
todoItem.save(); // PUT /todos/1 (JSON params)

//
var todoItem = new TodoItem();
todoItem.set({description: 'fill prescription'});
todoItem.save();    // POST /todos w/JSON params
todoItem.get('id'); // => 2
todoItem.destroy(); // DELETE /todos/2
todoItem.toJSON();  // obtain JSON

// default vals
var TodoItem = Backbone.Model.extend({
   defaults: {
       description: 'empty todo...',
       status: 'incomplete'
   }
});
var todoItem = new TodoItem();
todoItem.get('description');    // => 'empty todo'
todoItem.get('status');         // => 'incomplete

// models can have events
todoItem.on('event-name',  function(){
   alert('event-name happened!');
});
todoItem.trigger('event-name'); // run the event

// special events
// change - listen for changes to model
todoItem.on('change', doThing);     // calls doThing();
todoItem.set({description: 'fill prescription'},
             {silent: true});       // keeps event from triggering
todoItem.off('change', doThing);

// built-in events
/*

change  -- when attry is modified
change: <attr>  - when <attr> is modified
destroy -- when a model is destroyed
sync -- whenever successfully sync's
error-- when model save or validation fails
all -- any event triggered

 */

// c1
var Appointment = Backbone.Model.extend({
    defaults: {
        title: 'Checkup',
        date: new Date()
    }
});

// c2
var Appointment = Backbone.Model.extend({
    defaults: function() {
        return {
            title: 'Checkup',
            date: new Date()
        }
    }
});

// c3
var Appointment = Backbone.Model.extend({urlRoot: '/appointments'});
var appointment = new Appointment({id: 1});
appointment.fetch();

//c4
var appointment = new Appointment({id: 1});
appointment.set({cancelled: true});
appointment.save();

//c5
appointment.on('change:cancelled', function() {
    alert("...");
});

//c6
var appointment = new Appointment({id: 1});
console.log(appointment.toJSON());