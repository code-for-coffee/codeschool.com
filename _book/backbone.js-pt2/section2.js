//section2.js
// Customized Collections

todoItems.fetch() = >

{
    "total": 25,
    "per_page": 10,
    "page": 20,
    "todos": [{
        "id": 1,
        ...
    } {
        "id": 2,
        ...
    }]
}

// vanilla 
var TodoItems = Backbone.Collection.extend({
    parse: function(response) {
        return response;
    }
});

// Customized
var TodoItems = Backbone.Collection.extend({
    parse: function(response) {
        this.perPage = response.per_page;
        this.page = response.page;
        this.total = response.total;
        return response.todos;
    }
});

todoItems.fetch({
    data: {
        page: 6
    }
});

// adding pagination
var TodosView = Backbone.View.extend({
    template: _.template("<a href="
        # / todos / p <%= page %> ">next page</a>"),
    initialize: function() {
        this.collection.on('reset', this.render, this);
    },
    render: function() {
        this.addAll();
        this.$el.append(this.template({
            page: this.collection.page + 1
        }));
        return this;
    },
    addAll: function() {
        this.$el.empty();
        this.collection.forEach(this.addOne);
    },
    addOne: function() {
        var todoView = new TodoView({
            model: todoItem
        });
        this.$el.append(todoView.render().el);
    }
});

var TodoApp = new(Backbone.Router.extend({
    routes: {
        "": "index",
        "totos/p:page": "page"
    },
    ,
    page: function(page) {
        this.todoItems.fetch({
            data: {
                page: page
            }
        })
    }
}));

// sorting via comparator
var TodoItems = Backbone.Collection.extend({
    comparator: 'status'
});
todoItems.fetch(); = > sorts by status

// passing function is as comparator:
comparator: function(todo1, todo2) {
    return todo1.get('status') < todo2.get('status');
}


// aggregate values
completedCount: function() {
    return this.where({
        status: 'complete'
    }).length;
}

//ch1
var Appointments = Backbone.Collection.extend({
    parse: function(response) {
        this.per_page = response.per_page;
        this.page = response.page;
        this.total = response.total;
        return response.appointments;
    }
});
//ch2
var Appointments = Backbone.Collection.extend({
    parse: function(response) {
        this.perPage = response.per_page;
        this.page = response.page;
        this.total = response.total;

        return response.appointments;
    }
});
//ch3 
var appointments = new Appointments();
appointments.fetch({
    data: {
        since: "2013-01-01"
    }
});
//ch4
var appointments = new Appointments();
appointments.fetch({
    data: {
        since: "2013-01-01",
        per_page: 10
    }
});
//ch5
var AppointmentListView = Backbone.View.extend({
    template: _.template('<a href="#/appointments/p<%= page %>/pp<%= per_page %>">View Next</a>'),
    initialize: function() {
        this.collection.on('reset', this.render, this);
    },
    render: function() {
        this.$el.empty();
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
var AppointmentListView = Backbone.View.extend({
    template: _.template('<a href="#/appointments/p<%= page %>/pp<%= per_page %>">View Next</a>'),
    initialize: function() {
        this.collection.on('reset', this.render, this);
    },
    render: function() {
        this.$el.empty();
        this.collection.forEach(this.addOne, this);
        this.$el.append(this.template({
            page: this.collection.page + 1,
            per_page: this.collection.per_page
        }));
    },
    addOne: function(model) {
        var appointmentView = new AppointmentView({
            model: model
        });
        appointmentView.render();
        this.$el.append(appointmentView.el);
    }
});
//ch7
var AppRouter = new(Backbone.Router.extend({
    routes: {
        "": "index",
        "appointments/p:page/pp:per_page": "page",
    },
    initialize: function(options) {
        this.appointmentList = new AppointmentList();
    },
    index: function() {
        var appointmentsView = new AppointmentListView({
            collection: this.appointmentList
        });
        appointmentsView.render();
        $('#app').html(appointmentsView.el);
        this.appointmentList.fetch();
    },
    page: function(page, per_page) {
        this.appointmentList.fetch({
            data: {
                page: page,
                per_page: per_page
            }
        });
    }
}));
//ch8
var Appointments = Backbone.Collection.extend({
    comparator: 'date'
});

//ch9
var Appointments = Backbone.Collection.extend({
    comparator: function(model1, model2) {
        return model1.get('date') < model2.get('date');
    }
});

//ch10
var Appointments = Backbone.Collection.extend({
    cancelledCount: function() {
        return this.where({
            cancelled: true
        }).length;
    }
});