// section6
// app organization

// class naming
// using global object for Namespace
var App = {
    Models: {},
    Views: {},
    Collections: {}
}

App.Models.TodoItem = Backbone.Model.Extend({});
app.Views.TodoItem = Backbone.View.extend({});
App.Collections.TodoItems = Backbone.Collection.extend({});

// instantiating
var todoItem = new App.Models.TodoItem({});

// Handle links outside of Backbone Views
// instantiate app as a view and assign the $el to document.body
var App = Backbone.View.extend({
    Models: {},
    Views: {},
    Collections: {},
    events: {
        'click a': function(e) {
            e.preventDefault();
            Backbone.history.navigate(e.target.pathname, {
                trigger: true
            });
        }
    },
    start: function() {
        Backbone.history.start({
            pushState: true
        });
    }
})
var app = new App({
    el: document.body
});

// instantiate immediately
// Handle links outside of Backbone Views
// instantiate app as a view and assign the $el to document.body
var App = new(Backbone.View.extend({
    Models: {},
    Views: {},
    Collections: {},
    events: {
        'click a': function(e) {
            e.preventDefault();
            Backbone.history.navigate(e.target.pathname, {
                trigger: true
            });
        }
    },
    start: function() {
        Backbone.history.start({
            pushState: true
        });
    }
}))({
    el: document.body
});
$(function() {
    App.start();
});

// skipping links now
// for non Backbone content
// can use data-attribute (such as data-internal="true")
< a href = "/completed"
data - internal = "false" > testing < /a>

events: {
	'click a[data-internal]': function (e){
		e.preventDefault();
		Backbone.history.navigate(e.target.pathname, {trigger: true});
	}
};

/ / ch1
var AppointmentApp = Backbone.View.extend({
    Models: {},
    Views: {},
    Collections: {}
});

//ch2
AppointmentApp.Models.Appointment = Backbone.Model.extend({});
AppointmentApp.Collections.Appointments = Backbone.Collection.extend({});
AppointmentApp.Views.Appointment = Backbone.View.extend({});
AppointmentApp.Views.Appointments = Backbone.View.extend({});
AppointmentApp.AppRouter = new(Backbone.Router.extend({}))();

//ch3
var AppointmentApp = new(Backbone.View.extend({
    Collections: {},
    Models: {},
    Views: {}
}))();

//ch4
var AppointmentApp = new(Backbone.View.extend({
    Collections: {},
    Models: {},
    Views: {}
}))({
    el: document.body
});

//ch5
var AppointmentApp = new(Backbone.View.extend({
    Collections: {},
    Models: {},
    Views: {},
    events: {
        'click a[data-backbone]': function(e) {
            e.preventDefault();
            Backbone.history.navigate(e.target.pathname, {
                trigger: true
            });
        }
    }
}))({
    el: document.body
});

//ch6
var AppointmentApp = new(Backbone.View.extend({
    Collections: {},
    Models: {},
    Views: {},
    events: {
        'click a[data-backbone]': function(e) {
            e.preventDefault();
            Backbone.history.navigate(e.target.pathname, {
                trigger: true
            });
        }
    },
    start: function(data) {
        this.appointments = new AppointmentApp.Collections.Appointments(data.appointments);
        var appointmentsView = new AppointmentApp.Views.Appointments({
            collection: this.appointments
        });
        $('#app').html(appointmentsView.render().el);
    }
}))({
    el: document.body
});