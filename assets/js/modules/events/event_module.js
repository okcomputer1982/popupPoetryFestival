PopupPoetry.module("EventModule", function(AboutModule, PopupPoetry, Backbone, Marionette, $, _){
	EventModule.Router = Marionette.AppRouter.extend({
		appRoutes: {
			"about": 'showAbout',
		}
	});

	var API = {
		showAbout: function() {
			//AboutModule.Show.Controller.showContact(id);
		}
	};

	PopupPoetry.addInitializer(function(){
		new EventModule.Router({
			controller: API
		});
	});
});