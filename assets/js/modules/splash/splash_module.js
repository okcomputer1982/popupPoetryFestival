PopupPoetry.module("SplashModule", function(SplashModule, PopupPoetry, Backbone, Marionette, $, _){
	SignupModule.Router = Marionette.AppRouter.extend({
		appRoutes: {
			"about": 'showAbout',
		}
	});

	var API = {
		showAbout: function() {
			//SplashModule.Show.Controller.showContact(id);
		}
	};

	PopupPoetry.addInitializer(function(){
		new SplashModule.Router({
			controller: API
		});
	});
});