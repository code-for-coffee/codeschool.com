/**
 * Created by codeforcoffee on 4/29/14.
 */

var router = new Backbone.Router({
    routes: {
        "todos/:id": 'show'
    },

    show: function(id) {

    }
});

/*
	Ropute Matchers
	---------------
	search/:query			search/ruby				query = 'ruby'
	search/:query/p:page	search/ruby/p2			query = 'ruby', page = 2
	folder/:name-:mode 		folder/foo-r			name = 'foor', mode = 'r'
	file/*path 				file/hello/world.text	path = 'hello/world.txt'
 */

router.navigate("todos/1", {
    trigger: true;
});

Pushstate > Hashbangs

// using pushstate
Backbone.history.start({
    pushstate: true
});

var TodoRouter = Backbone.router.extend({
    routes: {
        "": "index",
        "todos/:id": "show"
    },
    index: function() {
        this.todoList.fetch();
    }
    show: function(id) {
        this.todoList.focusOnTodoItem(id);
    },
    initialize: function(options) {
        this.todoList = options.todoList;
    }
});

var todoList = new TodoList();
var TodoApp = new Todorouter({
    todoList: todoList
});

var TodoApp = new(Backbone.Router.extend({
    routes: {
        "": "index",
        "todos/:id": "show"
    },
    initialize: function() {
        this.todoList = new TodoList();
        this.todosView = new TodosListView({
            collection: this.todoList
        });
        $("#app").append(this.todosView.el);
    },
    start: function() {
        Backbone.history.start({
            pushState: true
        });
    },
    index: function() {
        this.todoList.fetch();
    },
    show: function(id) {
        this.todosList.focusOnTodoItem(id);
    }
}));

$(document).ready(function() {
    TodoApp.start();
});


//ch1
var AppRouter = Backbone.Router.extend({
    pushState: true
});

//ch2
var AppRouter = Backbone.Router.extend({
    routes: {
        'appointments/:id': 'show'
    },
    show: function(id) {
        console.log("heyo we're in show with id %d", id);
    }
});

//ch3
Backbone.history.start({
    pushState: true
});

//ch4
var router = new AppRouter();
router.navigate("appointments/1", {
    trigger: true
});

//ch5
var AppRouter = Backbone.Router.extend({
    routes: {
        "appointments/:id": "show"
    },
    show: function(id) {
        var appointment = new Appointment({
            id: id
        });
        var appointmentView = new AppointmentView({
            model: appointment
        });
        appointmentView.render();
        $("#app").html(appointmentView.el);
        appointment.fetch();
    }
});

//ch6
var AppRouter = Backbone.Router.extend({
    routes: {
        "": "index",
        "appointments/:id": "show"
    },

    initialize: function(options) {
        this.appointmentList = options.appointmentList;
    },

    index: function() {
        var appointmentsView = new AppointmentListView({
            collection: this.appointmentList
        });
        appointmentList.fetch();
        $('#app').html(appointmentsView.el);
    },

    show: function(id) {
        var appointment = new Appointment({
            id: id
        });
        var appointmentView = new AppointmentView({
            model: appointment
        });
        appointmentView.render();
        $('#app').html(appointmentView.el);
        appointment.fetch();
    }
});

//ch7
var AppRouter = new(Backbone.Router.extend({
    routes: {
        "appointments/:id": "show",
        "": "index"
    },

    initialize: function(options) {
        this.appointmentList = new AppointmentList();
    },

    start: function() {
        Backbone.history.start({
            pushState: true
        });
    },

    index: function() {
        var appointmentsView = new AppointmentListView({
            collection: this.appointmentList
        });
        appointmentsView.render();
        $('#app').html(appointmentsView.el);
        this.appointmentList.fetch();
    },

    show: function(id) {
        var appointment = new Appointment({
            id: id
        });
        var appointmentView = new AppointmentView({
            model: appointment
        });
        appointmentView.render();
        $('#app').html(appointmentView.el);
        appointment.fetch();
    }
}));

$(function() {
    AppRouter.start()
});