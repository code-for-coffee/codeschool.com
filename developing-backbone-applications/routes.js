/**
 * Created by codeforcoffee on 7/25/2014.
 */

var App = App || {};
App.Models = App.Models || {},
	App.Collections = App.Collections || {},
	App.Templates = App.Templates || {},
	App.Views = App.Views || {},
	App.Routes = App.Routes || {};

App.Views.Body = Backbone.View.extend({
	el: "#body-content",
	events: {
		"click" : "clicked"
	},
	initialize: function() {
		this.$el.click(this.jqueryClicked);
	},
	clicked: function(event) {
		console.log("event: " + this.el.outerHTML);
	}
});
App.Routes.BaseRouter = Backbone.Router.extend({
	routes: {
		"about": "showAbout",
		"todo/:id": "getTodo",
		"search/:query" : "searchTodos"
	},
	showAbout: function() {
		$("#body-content").html("About Content");
	},
	getTodo: function(id) {
		console.log("you're trying tor reach: " + id);
	},
	searchTodos: function(query, page) {
		var page_number = page || 1;
		console.log("Page number: " + page_number);
	}
});
