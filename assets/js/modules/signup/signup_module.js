PopupPoetry.module("SignupModule", function(SignupModule, PopupPoetry, Backbone, Marionette, $, _){
	SignupModule.Router = Marionette.AppRouter.extend({
		appRoutes: {
			"about": 'showAbout',
		}
	});

	var API = {
		showAbout: function() {
			//SignupModule.Show.Controller.showContact(id);
		}
	};

	PopupPoetry.addInitializer(function(){
		new SignupModule.Router({
			controller: API
		});
	});
});