// section4.js
// varying views

// vanilla view
var TodoView = Backbone.View.extend({
    template: _.template("<%= description %>"),
    render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
    }
});
var todoView = new TodoView({
    model: todoItem
});
$('.todo').html(todoView.render().el);

// use existing DOM element
var todoView = new TodoView({
    model: todoItem,
    el: $('.todo')
});

// escaping the value (XSS safety)
var TodoView = Backbone.View.extend({
    template: _.template("<%= model.escape('description') %>"),
    render: function() {
        this.$el.html(this.template({
            model: this.model
        }));
        return this;
    }
});

// passing extra options to event handlers
var TodoView = Backbone.View.extend({
    template: _.template("<%= description %>"),
    initialize: function() {
        this.model.on('change:description', this.change, this);
    },
    render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
    },
    change: function(model, value, options) {
        this.$('span').html(value);
        if (options.highlight !== false) {
            this.$el.effect("highlight", {}, 1000);
        }
    }
});
// passing in extra options without triggering events
todoItem.set({
    description: "eat cereal"
}, {
    silent: true,
    highlight: false
});

// untie view from model
var TodoView = Backbone.View.extend({
    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
    }
});
todoView.stopListening();

//ch1
var appointmentsView = new AppointmentsView({
    collection: appointments,
    el: $("#app")
});
appointmentsView.render();
//ch2
var AppointmentsView = Backbone.View.extend({
    initialize: function(options) {
        this.doctor = options.doctor;
    }
});
//ch3
var AppointmentView = Backbone.View.extend({
    template: _.template("<span><%= model.escape('title') %></span>"),
    render: function() {
        this.$el.html(this.template({
            model: this.model
        }));
    }
});
//ch4
var AppointmentView = Backbone.View.extend({
    template: _.template("<span><%= title %></span>"),
    initialize: function() {
        this.model.on('change:title', this.changedTitle, this);
    },
    render: function() {
        this.$el.html(this.template(this.model.attributes));
    },
    changedTitle: function(model, value, options) {
        this.$('span').html(value);
        if (options.highlight !== false) {
            this.$el.effect('highlight', {}, 1000);
        }
    }
});
//ch4
var AppointmentView = Backbone.View.extend({
    template: _.template("<span><%= title %></span>"),
    initialize: function() {
        this.model.on('change:title', this.changedTitle, this);
        this.listenTo(this.model, 'change', this.render);
    },
    render: function() {
        this.$el.html(this.template(this.model.attributes));
    },
    changedTitle: function(model, value, options) {
        this.$('span').html(value);

        if (options.highlight !== false) {
            this.$el.effect('highlight', {}, 1000);
        }
    }
});