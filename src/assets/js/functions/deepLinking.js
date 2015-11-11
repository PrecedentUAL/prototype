var deepLinking = {

	elms: {
		deepLink: $('#design .deep-link'),
		headerBG: $('#header-bg'),
		buyDeepLink: $('#buy-deeplink')
	},

	linkTo: function() {
		function doScrolling() {
			var offsetAmount = deepLinking.elms.buyDeepLink.offset().top - deepLinking.elms.headerBG.outerHeight();

			$('html, body').animate({
				scrollTop: offsetAmount
			}, 1500);
		}

		helpers.runWhenEverythingLoaded( doScrolling );
	},

	eventListeners: function() {
		deepLinking.elms.deepLink.on('click touch', function( e ) {
			deepLinking.linkTo();
		});
		if ( window.location.hash.indexOf('buy') === 1 ) {
			deepLinking.linkTo();
		}
	},

	init: function() {
		deepLinking.eventListeners();
		deepLinking.linkTo();
	}
};

