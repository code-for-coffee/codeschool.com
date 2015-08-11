/**
 * Created by codeforcoffee on 4/29/14.
 */

var TodoView = Backbone.View.extend({

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }

});

var todoItem = new TodoItem();
var todoView = new TodoView();

//
// collection view does not render any of its own HTML; delegates to model views
//

var TodoListView = Backbone.View.extend({
    initialize: function() {
        this.collection.on('add', this.addOne, this);
        this.collection.on('reset', this.adAll, this);
        this.on('remove', this.hideModel);
    },
    render: function() {
        this.addAll();
    },
    addOne: function(todoItem) {
        var todoView = new TodoView({
            model: todoItem
        });
        this.$el.append(todoView.render().el);
    },
    addAll: function() {
        this.collection.forEach(this.addOne, this);
    },
    hideModel: function(model) {
        model.trigger('hide');
        // in the TodoItem View...
        // initialize: function() { this.model.on('hide', this.remove, this); }
    }
});

var todoListView = new TodoListView({
    collection: todoList
});

//ch1
var appointments = new AppointmentList();
var AppointmentListView = Backbone.View.extend({});
var appointmentListView = new AppointmentListView({
    collection: appointments
});


//ch2
var AppointmentListView = Backbone.View.extend({
    render: function() {
        this.collection.forEach(this.addOne, this);
    },
    addOne: function(model) {
        var appointmentView = new AppointmentView({
            model: model
        });
        appointmentView.render();
        this.$el.append(appointmentView.el);
    }
});

//ch3
var appointmentsView = new AppointmentListView({
    collection: appointmentList
});
$("#app").html(appointmentsView.render().el);


//ch4
var AppointmentListView = Backbone.View.extend({
    initialize: function() {
        this.collection.on('add', this.addOne, this)
    },
    render: function() {
        this.collection.forEach(this.addOne, this);
    },
    addOne: function(model) {
        var appointmentView = new AppointmentView({
            model: model
        });
        appointmentView.render();
        this.$el.append(appointmentView.el);
    }
});

//ch5
var AppointmentListView = Backbone.View.extend({
    initialize: function() {
        this.collection.on('add', this.addOne, this);
        this.collection.on('reset', this.render, this);
    },
    render: function() {
        this.collection.forEach(this.addOne, this);
    },
    addOne: function(model) {
        var appointmentView = new AppointmentView({
            model: model
        });
        appointmentView.render();
        this.$el.append(appointmentView.el);
    }
});


//ch6
var AppointmentList = Backbone.Collection.extend({
    model: Appointment,
    initialize: function() {
        this.on('remove', this.hideModel);
    },
    hideModel: function(model) {
        model.trigger('hide');
    }
});
var AppointmentView = Backbone.View.extend({
    initialize: function() {
        this.model.on('hide', this.remove, this);
    },
    remove: function() {
        this.$el.remove();
    }
});