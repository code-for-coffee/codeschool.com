//
// define a model
Person = Backbone.Model.extend({
    initialize: function() {
        alert("Welcome to the world");
    }
});

//
//model.set()
//var person = new Person({name: "James", age: 30});
var person = new Person();
person.set({
    name: 'James',
    age: 30,
    child: "Zelda"
});

//
//model.get()
var age = person.get("age");
var name = person.get("name");
var child = person.get("child");

//
//defaults in a model
Person = Backbone.Model.extend({
    defaults: {
        name: 'Fetus',
        age: 0,
        child: ''
    },
    initialize: function() {
        alert("Welcome to the world");
    }
});

//
// Model attribute manipulation
Person = Backbone.Model.extend({
    defaults: {
        name: 'Fetus',
        age: 0,
        child: ''
    },
    initialize: function() {
        alert("Welcome to the world");
    },
    // manipulate the child value
    adopt: function(newChildsName) {
        this.set({
            child: newChildsName
        });
    }
});
var person = new Person({
    name: "James",
    age: 60,
    child: "Meowth"
});
person.adopt("Meowington");
var child = person.get("child");

//
//event listeners
Person = Backbone.Model.extend({
    defaults: {
        name: 'fetus',
        age: 0
    },
    initialize: function() {
        alert("welcome");
        // listen to the change of "name"
        this.on("change:name", function(model) {
            var name = model.get("name");
            alert("Changed name to: " + name);
        });
    }
});

var person = new Person({
    name: "James",
    age: 42
});
person.set({
    name: "yoloswagdawg"
}); // triggers event

// interacting with the server
var UserModel = Backbone.Model.extend({
    urlRoot: '/user',
    defaults: {
        name: '',
        email: ''
    }
});

var user = new UserModel();
// no id set yet
var userDetails = {
    name: "James",
    email: "james@codeforcoffee.org"
};

//because no ID is set, server will POST /user/ without an id
user.save(userDetails, {
    success: function(user) {
        alert(user.toJSON());
    }
});