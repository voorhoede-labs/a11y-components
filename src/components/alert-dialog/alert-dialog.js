(function(app) {

	var SELECTOR_TRIGGER = '[data-modal-trigger]';
	var SELECTOR_TRIGGER_ATTR = 'data-modal-trigger';
	var SELECTOR_MODAL_OVERLAY_ATTR = 'data-modal-overlay';
	var SELECTOR_MODAL_WINDOW = '[data-modal-window]';
	var SELECTOR_CLOSE_BUTTON = '[data-modal-close]';

	app.alertDialog = {
		isSupported: 'querySelector' in document && 'classList' in document.documentElement,
		enhance: enhance
	};

	function enhance() {
		var triggers = document.querySelectorAll(SELECTOR_TRIGGER);

		[].forEach.call(triggers, function(trigger) {
			var triggerName = trigger.getAttribute(SELECTOR_TRIGGER_ATTR);
			var modalOverlay = document.querySelector('[' + SELECTOR_MODAL_OVERLAY_ATTR + '=' + triggerName + ']');
			var modalWindow = modalOverlay.querySelector(SELECTOR_MODAL_WINDOW);
			var closeButton = modalOverlay.querySelector(SELECTOR_CLOSE_BUTTON);

			trigger.addEventListener('click', function() {
				openModalWindow(modalOverlay, modalWindow, closeButton);
			});

			closeButton.addEventListener('click', function() {
				closeModalWindow(trigger, modalOverlay);
			});
		});
	}

	function openModalWindow(modalOverlay, modalWindow, closeButton) {
		modalWindow.addEventListener('keydown', function(e) {
			trapTabkey(e, this);
		});

		// Hide main content from screenreader
		var allContent = document.querySelectorAll('body > *:not(.modal)');
		[].forEach.call(allContent, function(element) {
			element.setAttribute('aria-hidden', 'true');
		});

		modalOverlay.classList.remove('hidden');
		modalOverlay.setAttribute('aria-hidden', 'false');
		closeButton.focus();
	}

	function closeModalWindow(trigger, modalOverlay) {
		// Show main content to screenreader again
		var allContent = document.querySelectorAll('body > *:not(.modal)');
		[].forEach.call(allContent, function(element) {
			element.removeAttribute('aria-hidden');
		});

		modalOverlay.classList.add('hidden');
		modalOverlay.setAttribute('aria-hidden', 'true');
		trigger.focus();
	}

	function trapTabkey(e, modalWindow) {
		var focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
		var focusableElementsList = modalWindow.querySelectorAll(focusableElementsString);
		var focusableElements = Array.prototype.slice.call(focusableElementsList);

		var firstTabStop = focusableElements[0];
		var lastTabStop = focusableElements[focusableElements.length - 1];

		// TAB key
		if (e.keyCode === 9) {
			if (e.shiftKey) {
				if (document.activeElement === firstTabStop) {
					e.preventDefault();
					lastTabStop.focus();
				}
			} else {
				if (document.activeElement === lastTabStop) {
					e.preventDefault();
					firstTabStop.focus();
				}
			}
		}
	}

}(window.app = window.app || {}));
