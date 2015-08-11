//section1.js

var TodoItem = Backbone.Model.extend({
    urlroot: '/todos'
});
var todoItem = new TodoItem({
    id: 1
});
todoItem.fetch();

// the built-in parse function
var TodoItem = Backbone.Model.extend({
    parse: function(response) {
        return response;
    }
});
// handling nested JSON
var TodoItem = Backbone.Model.extend({
    parse: function(response) {
        return response.todo;
    }
});

var todoItem = new TodoItem({
    todo: {
        id: 1,
        description: "get to the choppa",
        status: "incomplete"
    }
}, {
    parse: true
});

// Changing attribute names
// This allows you to not use the Class designations from server in Backbone! yay
var TodoItem = Backbone.Model.extend({
    parse: function(response) {
        response = response.todo;
        response.description = response.desc;
        delete response.desc;
        return response;
    }
});

// Overriding the JSON function
var TodoItem = Backbone.Model.extend({
    toJSON: function() {
        var attrs = _.clone(this.attributes);
        attr.desc = attrs.description;
        attrs = _.pick(attrs, 'desc', 'status');
        return {
            _.clone(this.attributes)
        };
    }
});

// unconvnentials IDs 
var TodoItem = Backbone.Model.extend({
    idAttribute: "_id";
});

//ch1
var Appointment = Backbone.Model.extend({
    parse: function(response) {
        return response.appointment;
    }
});

//ch2
var Appointment = Backbone.Model.extend({
    parse: function(response) {
        response = response.appointment;
        response.cancelled = response.cankelled;
        delete response.cankelled;
        return response;
    }
});

//ch3
var Appointment = Backbone.Model.extend({
    idAttribute: "identifier",
    parse: function(response) {
        var appointment = response.appointment;
        appointment.cancelled = appointment.cankelled;
        delete appointment.cankelled;
        return appointment;
    }
});

//ch4
var appointment = new Appointment(data, {
    parse: true
});

//ch5
var Appointment = Backbone.Model.extend({
    toJSON: function() {
        var attributes = _.clone(this.attributes);
        attributes.cankelled = attributes.cancelled;
        delete attributes.cancelled;
        return {
            appointment: attributes
        };
    }
});

//ch6
var AppointmentView = Backbone.View.extend({
    template: _.template('<span>' +
        '<%= title %></span>' +
        '<a href="#">x</a>'),

    render: function() {
        this.$el.html(this.template(this.model.attributes));
    }
});