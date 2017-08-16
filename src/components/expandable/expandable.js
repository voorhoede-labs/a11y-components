(function(app) {

	var EXPANDABLE_TRIGGER = '[data-expandable-trigger]';
	var EXPANDABLE_TRIGGER_ATTR = 'data-expandable-trigger';
	var EXPANDABLE_CONTENT_ATTR = 'data-expandable-content';

	app.expandable = {
		isSupported: 'querySelector' in document && 'classList' in document.documentElement,
		enhance: enhance
	};

	function enhance() {
		var triggers = document.querySelectorAll(EXPANDABLE_TRIGGER);

		[].forEach.call(triggers, function(trigger) {
			var triggerName = trigger.getAttribute(EXPANDABLE_TRIGGER_ATTR);
			var content = document.querySelector('[' + EXPANDABLE_CONTENT_ATTR + '=' + triggerName + ']');

			trigger.setAttribute('aria-expanded', 'false');
			content.classList.add('hidden');
			content.setAttribute('aria-hidden', 'true');

			trigger.addEventListener('click', function() {
				var isExpanded = this.getAttribute('aria-expanded') === 'false' ? true : false;

				if(isExpanded) {
					content.classList.remove('hidden');
					content.setAttribute('aria-hidden', 'false');
					this.setAttribute('aria-expanded', 'true');
				} else {
					content.classList.add('hidden');
					content.setAttribute('aria-hidden', 'true');
					this.setAttribute('aria-expanded', 'false');
				}
			})
		});
	}

}(window.app = window.app || {}));
