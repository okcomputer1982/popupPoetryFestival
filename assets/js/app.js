var App = new Marionette.Application();

App.addRegions({
	mainRegion: "#main-region"
});

App.SplashView = Marionette.ItemView.extend({
	template: "#splash_view"
});

App.on("initialize:after", function() {
	var splashView = new App.SplashView();

	App.mainRegion.show(splashView);
});

App.start();