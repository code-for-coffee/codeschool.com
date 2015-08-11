$.getJSON('/todo', function(data) { stuff })
//Client side app structure
//models to represent data
//Views to hook up models to the DOM
//Syncs data to/from server

var TodoItem = Backbone.Model.extend({});
var todoItem = new TodoItem(
	{ description: 'pick up milk', status: 'incomplete', id: 1}
)

// model
todoItem.get('description')
todoItem.set({status: 'complete'})
todoItem.save()

// view
var TodoView = Backbone.View.extend({
	
	render: function(){
		var html = '<h3>' + this.model.get('description') + '</h3>';
		$(this.el).html(html);
	}

});
var todoView = new TodoView({model: todoItem});
todoView.render();



//
var Appointment = Backbone.Model.extend({});
var appointment = new Appointment();
appointment.set('title', 'My knee hurts');
var AppointmentView = Backbone.View.extend({
  render: function(){
    $(this.el).html('<li>' + this.model.get('title') + '</li>');
  }
});
var appointmentView = new AppointmentView({model: appointment});
appointmentView.render();
$('#app').html(appointmentView.el);

