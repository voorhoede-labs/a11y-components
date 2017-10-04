(function(app) {
	if(app.expandable.isSupported) {
		app.expandable.enhance();
	}

	if(app.alertDialog.isSupported) {
		app.alertDialog.enhance();
	}

	if(app.tabs.isSupported) {
		app.tabs.enhance();
	}
}(window.app));
