var toggleSpecs = {

	elms: {
		triggerSpecs: $('#toggle-specs'),
		hiddenSpecs: $('.spec-list-hidden'),
		hiddenSpecsDesktop: $('.spec-titles-list-hidden')
	},

	showHideSpecs: function( e ) {
		e.preventDefault();

		// If hidden specs are showing
		if ( toggleSpecs.elms.hiddenSpecs.hasClass('showing') ) {

			toggleSpecs.elms.hiddenSpecs.removeClass('showing');

			if ( window.windowWidth >= window.tablet ) {
				toggleSpecs.elms.hiddenSpecsDesktop.fadeOut('slow');
			}

			toggleSpecs.elms.hiddenSpecs.fadeOut('slow', function() {
				toggleSpecs.elms.triggerSpecs.find('.less').hide();
				toggleSpecs.elms.triggerSpecs.find('.more').show();
			});

		} else {

			toggleSpecs.elms.hiddenSpecs.addClass('showing');

			if ( window.windowWidth >= window.tablet ) {
				toggleSpecs.elms.hiddenSpecsDesktop.fadeIn('slow');
			}

			toggleSpecs.elms.hiddenSpecs.fadeIn('slow', function() {
				toggleSpecs.elms.triggerSpecs.find('.more').hide();
				toggleSpecs.elms.triggerSpecs.find('.less').show();
			});
		}
	},

	onResize: function() {
		if ( toggleSpecs.elms.hiddenSpecs.hasClass('showing') ) {
			if ( window.windowWidth < window.tablet ) {
				toggleSpecs.elms.hiddenSpecsDesktop.hide();
			} else {
				toggleSpecs.elms.hiddenSpecsDesktop.show();
			}
		} else {
			toggleSpecs.elms.hiddenSpecsDesktop.hide();
		}
	},

	eventListeners: function() {
		toggleSpecs.elms.triggerSpecs.on('click', function( e ) {
			toggleSpecs.showHideSpecs(e);
		});

		$( window ).on('orientationchange', function() {
			toggleSpecs.onResize();
		});
	},

	init: function() {
		if ( toggleSpecs.elms.triggerSpecs.length > 0 ) {
			toggleSpecs.eventListeners();
		}
	}
};
