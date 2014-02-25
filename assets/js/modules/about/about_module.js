PopupPoetry.module("AboutModule", function(AboutModule, PopupPoetry, Backbone, Marionette, $, _){
	AboutModule.Router = Marionette.AppRouter.extend({
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
		new AboutModule.Router({
			controller: API
		});
	});
});