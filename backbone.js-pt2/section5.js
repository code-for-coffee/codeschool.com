//section5.js
//working with forms

// Traditional form
< form action = "/todos"
method = "POST" > < input name = 'description'
value = 'What do you need?' / > < button > Save < /button>
</form >

$('button').click(function(e) {
    e.preventDefault();
    var uri = $('form').attr('action');
    var description = $('input[name=description]').val();
    $post(uri, {
        description: description
    });
});

// how to have Backbone handle this
var TodoItem = Backbone.Model.extend({
    urlRoot: "/todos"
});
var todoItem = new TodoItem({
    description: "What do you need to do?"
});
// .save() handles the ajax POST for us
todoItem.save({
    description: "Get redbull"
});

// -----------------------------
// Build form with Backbone View
var TodoForm = Backbone.View.extend({
    template: _.template('<form' +
        'input name=description value="<%= description %>" />' +
        '<button>Save</button></form>'),
    // listen for click on button
    events: {
        //'click button': 'save' -- outdated! use the native "submit" in backbone
        submit: 'save' // works on click or when user hits enter/return! woo
    },
    save: function(e) {
        e.preventDefault();
        var newDesc = this.$('input[name=description]').val();
        this.model.save({
            description: newDesc
        }, {
            success: function(model, response, options) {
                // return to INDEX via history
                Backbone.history.navigate('', {
                    trigger: true
                });
            },
            error: function(model, xhr, options) {
                var errors = JSON.parse(xhr.responseText).errors;
                alert(errors);
            }
        });

    },
    render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
    }
});

var todoItem = new TodoItem({
    description: "What do you need to do?"
});
var todoForm = new TodoForm({
    model: todoItem
});
$("#app").html(todoForm.render().el);

//adding route to edit existing item
var TodoApp = new(Backbone.Router.extend({
    routes: {
        "": "index",
        "todos/:id/edit": "edit",
        "todos/new": "newTodo"
    },
    initialize: function() {
        this.todoItems = new TodoItems();
        this.todosView = new TodosView({
            collection: this.todoItems
        });
    },
    index: function() {
        this.todoItems.fetch();
        $("#app").html(this.todosView.render().el);
    },
    newTodo: function() {
        var todoItem = new TodoItem({
            description: "Stuff"
        });
        var todoForm = new TodoForm({
            model: todoItem
        });
        $("#app").append(todoForm.render().el);
    },
    edit: function(id) {
        var todoForm = new TodoForm({
            model: this.todoItems.get(id)
        });
        $("#app").html(todoForm.render().el);
    }
}));

//ch1
var AppointmentForm = Backbone.View.extend({
    template: _.template('<form><input name="title" type="text" /><input name="name" type="text" /></form>')
});

//ch2
var AppointmentForm = Backbone.View.extend({
    template: _.template('<form><input name="title" type="text" value="<%= title %>" /><input name="name" type="text" value="<%= name %>" /></form>'),
    render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
    }
});

//ch3
var AppointmentForm = Backbone.View.extend({
    template: _.template('<form><input name="title" type="text" value="<%= title %>" /><input name="name" type="text" value="<%= name %>" /></form>'),
    render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
    }
});

//ch4
var AppointmentForm = Backbone.View.extend({
    events: {
        submit: 'save'
    },
    template: _.template('<form><input name="title" type="text" value="<%= title %>" /><input name="name" type="text" value="<%= name %>" /></form>'),
    render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
    },
    save: function(e) {
        e.preventDefault();
        var title = this.$('input[name=title]').val();
        var name = this.$('input[name=name]').val();
        this.model.save({
            title: title,
            name: name
        });
    }
});

//ch5
var AppointmentForm = Backbone.View.extend({
    template: _.template('<form><input name="title" type="text" value="<%= title %>" /><input name="name" type="text" value="<%= name %>" /></form>'),
    render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
    },
    events: {
        submit: "save"
    },
    save: function(e) {
        e.preventDefault();
        var newTitle = this.$('input[name=title]').val();
        var newName = this.$('input[name=name]').val();
        this.model.save({
            title: newTitle,
            name: newName
        }, {
            success: function() {
                Backbone.history.navigate('', {
                    trigger: true
                });
            }
        });
    }
});