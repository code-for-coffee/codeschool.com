/**
 * Created by codeforcoffee on 4/1/14.
 */
var SimpleView = Backbone.View.Extend({});
var simpleView = new SimpleView();
console.log(simpleView.el); // => <div></div>

var SimpleView = Backbone.View.Extend({
    tagname: 'li'
});
var simpleView = new SimpleView();
console.log(simpleView.el); // => <li></li>

//
var TodoView = Backbone.View.Extend({
    tagname: 'article',
    id: 'todo-view',
    className: 'todo'
});
var todoView = new TodoItem();
console.log(todoView.el); // => <article id="todo-view" class="todo"></article>

// use jQuery to get HTML of this
// .el is a DOM element
$("#todo-view").html(); == $(todoView.el).html(); == todoView.$el.html(); // last is backbone native

todoView.$el.html(); // winnar!

//
var TodoView = new Backbone.View.Extend({
    tagName: 'article',
    id: 'todo-view',
    className: 'todo',
    render: function() {
        var html = '<h3>' + this.model.get('description') + '</h3';
        this.$el.html(html);
    }
});
var todoView = new TodoView({
    model: todoItem
});
todoView.render();
console.log(todoView.el); // => <article id="todo-view" class="todo"><h3>Pick up milk</h3></article>

// using templates
var TodoView = new Backbone.View.extend({

    template: _.template('<h3><%= description %></h3>'),

    render: function() {
        var attributes = this.model.toJSON();
        this.$el.html(this.template(attributes));
    }
});
var todoView = new TodoView({
    model: todoItem
});
todoView.render();
console.log(todoView.el); // => <article id="todo-view" class="todo"><h3>Pick up milk</h3></article>

// template engines
// Underscore.js
//<h3><%= description %></h3>

// Mustache.js
//<h3>{{description}}</h3>

// haml-js
//%h3= description

// eco
//<h3><%= @description %>

// View Events
var TodoView = new Backbone.View.Extend({

    events: {
        "click h3": "alertStatus"
    },
    alertStatus: function(e) {
        alert("you clicked me");
    }
});
// the above scopes the selector via the jQuery delegate method
// ex: this.$el.delegate('h3, 'click', alertStatus);

var DocumentView = Backbone.View.extend({
    events: {
        'dbClick': 'open',
        'click .icon.doc': 'select',
        'click .show_notes': 'toggleNotes',
        'click .title .lock': 'editAccessLevel',
        'mouseover .title .date': 'showTooltip'
    }
});

// events: { "<event> <selector>": "<method>" }
/*

    jQuery events:

    change
    click
    dblClick
    focus
    focusin
    focusout
    jover
    keydown
    keypress
    load
    mousedown
    mouseenter
    mosueleave
    mousemove
    mouseout
    mouseover
    mouseup
    reddy
    resize
    scroll
    select
    unload

 */

//c1
var AppointmentView = Backbone.View.extend({
    tagName: 'li'
});

//c2
var AppointmentView = Backbone.View.extend({
    tagName: 'li',
    className: 'appointment'
});

// c3
var AppointmentView = Backbone.View.extend({
    render: function() {
        var html = '<li>' + this.model.get('title') + '</li>';
        this.$el.html(html);
    }
});


//c4
var AppointmentView = Backbone.View.extend({
    template: _.template('<span><%= title %></span>'),
    render: function() {
        var title = this.model.toJSON();
        this.$el.html(this.template(title));
    }
});

//c5
var AppointmentView = Backbone.View.extend({
    template: _.template('<span><%= title %></span>'),
    events: {
        'click': function() {
            alert(this.model.get('title'))
        }
    },
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
    }
});

//c6
var AppointmentView = Backbone.View.extend({
    template: _.template('<span><%= title %></span>'),

    events: {
        "dblclick span": "alertTitle"
    },
    alertTitle: function() {
        alert(this.model.get('title'));
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
    }
});