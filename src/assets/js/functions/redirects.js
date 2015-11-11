var redirects = {

	// Event listeners
	eventListeners: function() {

		var countryCode = $('html').attr('lang');

		if ( countryCode === 'da' ) {
			countryCode = 'dk';
		} else if ( countryCode === 'en-GB' ) {
			countryCode = 'uk';
		} else if ( countryCode === 'sv' ) {
			countryCode = 'se';
		}

		if ( window.location.pathname === '/' + countryCode + '/pre-order.html' ) {
			console.log(window.location.pathname);
			// window.location.pathname = '/' + countryCode + '/buy.html';
		}
	},


	init: function() {
		redirects.eventListeners();
	}

};