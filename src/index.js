(function(app) {
	if(app.alert.isSupported) {
		app.alert.enhance();
	}

	if(app.alertDialog.isSupported) {
		app.alertDialog.enhance();
	}

	if(app.expandable.isSupported) {
		app.expandable.enhance();
	}

	if(app.modal.isSupported) {
		app.modal.enhance();
	}

	if(app.tabs.isSupported) {
		app.tabs.enhance();
	}
}(window.app));
