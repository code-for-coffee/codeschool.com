/**
 * Created by codeforcoffee on 4/1/14.
 */

var TodoItem = Backbone.Model.extend({
    toggleStatus: if (this.get('status') === 'incomplete') {
        this.set({
            'status': 'complete'
        });
    } else {
        this.set({
            'status': 'incomplete'
        });
    }
    this.save(),
});

var TodoView = Backbone.View.extend({
    events: {
        'change input': 'toggleStatus'
    },
    template: _.template('<h3 class="<%= status %>">' +
        '<input type="checkbox" <% if(status === "complete") ' +
        'print ("checked") %>/> + <%= description %> </h3>'),
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
    },
    toggleStatus: function() {
        this.model.toggleStatus();
    },
    initialize: function() {
        this.model.on('change', this.render, this);
        this.model.on('destroy', this.remove, this);
    }
});

var todoView = new TodoView({
    model: todoItem
});
todoView.render();
console.log(todoView.el);

//ch1
var AppointmentView = Backbone.View.extend({
    template: _.template('<span><%= title %></span> <a href="#">x</a>'),
    events: {
        'click a': 'cancel'
    },
    cancel: function() {
        this.model.set({
            cancelled: true
        })
    },
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
    }
});


//ch2
var AppointmentView = Backbone.View.extend({
    template: _.template('<span><%= title %></span> <a href="#">x</a>'),
    events: {
        "click a": "cancel"
    },
    cancel: function() {
        this.model.cancel();
    },
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
    }
});

var Appointment = Backbone.Model.extend({
    cancel: function() {
        this.set({
            cancelled: true
        });
    }
});

//ch3
var Appointment = Backbone.Model.extend({
    cancel: function() {
        this.set({
            cancelled: true
        });
        this.save();
    }
});

//ch4

var AppointmentView = Backbone.View.extend({
    template: _.template('<span class="<% if(cancelled) print("cancelled") %>">' +
        '<%= title %></span>' +
        '<a href="#">x</a>'),
    initialize: function() {
        this.model.on('change', this.render, this);
    },
    events: {
        "click a": "cancel"
    },
    cancel: function() {
        this.model.cancel();
    },
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
    }
});


//ch5
var AppointmentView = Backbone.View.extend({
    template: _.template('<span class="<% if(cancelled) print("cancelled") %>">' +
        '<%= title %></span>' +
        '<a href="#">x</a>'),

    initialize: function() {
        this.model.on('change', this.render, this);
        this.model.on('destroy', this.remove, this);
    },

    events: {
        "click a": "cancel"
    },
    cancel: function() {
        this.model.cancel();
    },
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
    }
});