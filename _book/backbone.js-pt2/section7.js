//section7
//Customizing Backbone

// views don't care how you use templates

//underscore templates
_.template("<span><%= description %></span><em><%= assigned_to %></em>")

// mustache template
Mustache.compile("<span>{{ description }}</span><em>{{ assigned_to }}</em>")

// using mustache:
var TodoItem = Backbone.View.extend({
    template: Mustache.compile("<span>{{ description }}</span><em>{{ assigned_to }}</em>"),
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
    }
});

// iterating through collection in mustache:
{
    "names": ["James", "Mario", "Luigi"]
}
// template:
"{{#names}} 
	<li>{{.}}</li>
{{/names}}"

// iterating through an array of objects
// just specify the keys
"{{#people}}
	<li>{{name}} has {{hairColor}} hair</li>
{{/peoeple}}"

// more mustache conventions
// print if true
{
    "completed": false
}
"are you done? {{#completed}}<em>done</em>{{/completed}}"

// inverted
{
    "completed": false
}
"are you done? {{^completed}}<em>nope!</em>{{/completed}}"

//
//
//default RESTful persistence
var todoItem = new TodoItem({
    id: 1
});
// read
todoItem.fetch(); // GET /todos/1
// update
todoItem.save(); // PUT /todos/1
// delete
todoItem.destroy(); // DELETE /todos/1
// create
(new todoItem({
    description: "woo"
})).save() // POST /todos

// overriding default behaviour
// making a model read only
// by overriding sync function

var TodoItem = new Backbone.Model.extend({
    sync: function(method, model, options) {
        if (method === "read") {
            Backbone.sync(method, model, options);
        } else {
            console.error("You cannot " + method + " the TodoItem model");
        }
    }
});

//method parameters:
// read, create, update, or delete

// using localStorage
// localStorage.setItem(<key>, <value>)
// localStorage.getItem(<key>)
// localStorage.removeItem(<key>)
// localStorage[<key>] // option = to set

// implementing this with our model
var TodoItem = new Backbone.Model.extend({
    sync: function(method, model, options) {
        case 'create':
            var key = "TodoItem-" + model.id;
            localStorage.setItem(key, JSON.stringify(model));
            break;
        case 'read':
            var key = "TodoItem-" + model.id;
            var result = localStorage.getItem(key);
            if (result) {
                result = JSON.parse(result);
                options.success && options.success(result);
            } else if (options.error) {
                options.error("couldn't find item");
            }
            break;
    }
});


//ch2
App.Views.Appointment = Backbone.View.extend({
    template: Mustache.compile('<h2>{{ title }}</h2>' +
        'Possible Dates: <ul>{{#possibleDates}}' +
        '<li>{{.}}</li>' +
        '{{/possibleDates}}</ul>'),

    render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
    }
});

//ch3
App.Views.Appointment = Backbone.View.extend({
    template: Mustache.compile('<h2>{{ title }}</h2>' +
        'Possible Dates: <ul>{{#possibleDates}}' +
        '<li>{{day}} at {{time}}</li>' +
        '{{/possibleDates}}</ul>'),

    render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
    }
});

//ch4
App.Models.Appointment = Backbone.Model.extend({
    sync: function(method, model, options) {
        if (method === "read" || method === "create") {
            Backbone.sync(method, model, options);
        } else {
            console.log("Dr. Goodparts says no!");
        }
    }
});

//ch5
App.Models.Appointment = Backbone.Model.extend({
    sync: function(method, model, options) {
        options = options || {};

        switch (method) {
            case "delete":
                var key = "Appointment-" + model.id;
                localStorage.removeItem(key);
                break;
            case "update":
                break;
            case "create":
                var key = "Appointment-" + model.id;
                localStorage.setItem(key, JSON.stringify(model));
                break;
            case "read":
                var key = "Appointment-" + model.id;
                var result = localStorage.getItem(key);
                if (result) {
                    result = JSON.parse(result);
                    options.success && options.success(result);
                } else if (options.error) {
                    options.error("Couldn't find Appointment with id=" + model.id);
                }
                break;
        }
    }
});

//ch6
App.Models.Appointment = Backbone.Model.extend({
    sync: function(method, model, options) {
        options = options || {};

        switch (method) {
            case "delete":
                var key = "Appointment-" + model.id;
                localStorage.removeItem(key);
                break;
            case "update":
                var key = "Appointment-" + model.id;
                localStorage.setItem(key, JSON.stringify(model));
                break;
            case "create":
                var key = "Appointment-" + model.id;
                localStorage.setItem(key, JSON.stringify(model));
                break;
            case "read":
                var key = "Appointment-" + model.id;
                var result = localStorage.getItem(key);
                if (result) {
                    result = JSON.parse(result);
                    options.success && options.success(result);
                } else if (options.error) {
                    options.error("Couldn't find Appointment with id=" + model.id);
                }
                break;
        }
    }
});