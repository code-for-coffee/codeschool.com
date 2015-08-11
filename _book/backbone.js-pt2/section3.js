//section3.js
// Real Routes

//optional routes
var TodoRouter = new(Backbone.Router.extend({
    routes: {
        'search/:query(/:page)(/)': 'search',
    },
    search: function(query, page) {
        page = page || 0;
        console.log(query);
        console.log(page);
    }
}));
// without options
TodoRouter.navigate('search/milk', {
    trigger: true
});
// with options
TodoRouter.navigate('search/milk/p2/', {
    trigger: true
});
// decoding words within query
var TodoRouter = new(Backbone.Router.extend({
    routes: {
        'search/:query(/:page)(/)': 'search',
    },
    search: function(query, page) {
        page = page || 0;
        query = decodeURIComponent(query);
        console.log(query);
        console.log(page);
    }
}));

// regex in routes
var TodoRouter = new(Backbone.Router.extend({

    //javascript objects cannot accept regex as a key
    initialize: function() {
        this.route(/^todos\/(\d+)$/, 'show');
    },
    show: function(id) {
        console.log("id = " + id);
    }
}));

// catch all
var TodoRouter = new(Backbone.Router.extend({
    routes: {
        '*path': 'notFound',
        'search/:query(/:page)(/)': 'search',
    },
    notFound: function(path) {
        alert("No content here.");
    },
    search: function(query, page) {
        page = page || 0;
        query = decodeURIComponent(query);
        console.log(query);
        console.log(page);
    }
}));

//ch1
var AppRouter = new(Backbone.Router.extend({
    routes: {
        "appointments/p:page(/pp:per_page)": "page",
    },
    page: function(page, per_page) {
        per_page = per_page || 10;

        this.appointments.fetch({
            data: {
                page: page,
                per_page: per_page
            }
        });
    }
}));
//ch2
var AppRouter = new(Backbone.Router.extend({
    routes: {
        "appointments/p:page(/pp:per_page/)": "page"
    },
    page: function(page, per_page) {
        per_page = per_page || 10;

        this.appointments.fetch({
            data: {
                page: page,
                per_page: per_page
            }
        });
    }
}));
//ch3
var AppRouter = new(Backbone.Router.extend({
    routes: {
        "appointments/p:page(/pp:per_page)(/)": "page"
    },
    page: function(page, per_page) {
        page = decodeURIComponent(page);
        per_page = decodeURIComponent(per_page);
        this.appointments.fetch({
            data: {
                page: page,
                per_page: per_page
            }
        });
    }
}));
//ch4
var AppRouter = new(Backbone.Router.extend({
    initialize: function() {
        this.route(/^appointments\/(\d+)$/, 'show');
    },
    show: function(id) {
        var appointment = new Appointment({
            id: id
        });
        console.log(appointment);
    }
}));
//ch5
var AppRouter = new(Backbone.Router.extend({
    routes: {

        "appointments/:id": "show",
        "*path": "catchAll",
    },
    show: function(id) {
        var appointment = new Appointment({
            id: id
        });
        console.log(appointment);
    },
    catchAll: function(path) {
        console.log(path);
    }
}));