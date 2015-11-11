var toggleTerms = {

	elms: {
		toggleTerms: $('#toggle-terms'),
		terms: $('#terms'),
		header: $('#header')
	},

	toggleTerms: function( e ) {
		e.preventDefault();
		toggleTerms.elms.terms.slideToggle(600);

		var offest = toggleTerms.elms.terms.offset().top - toggleTerms.elms.header.height() - 20;

		$('html, body').animate({
			scrollTop: offest
		}, 1000);
	},

	eventListeners: function() {
		toggleTerms.elms.toggleTerms.on('click', function( e ) {
			toggleTerms.toggleTerms(e);
		});
	},

	init: function() {
		if ( toggleTerms.elms.terms.length > 0 ) {
			toggleTerms.eventListeners();
		}
	}
};
