var touchScenario = {

	elms: {
		exploreBtn: $('#explore'),
		cm: $('#curtainmode-splash'),
		crossFade: $('#crossfade'),
		globalMenuBackground: $('#global-menu'),
		pageNameID: $('body')
	},

 	fades: function() {
		touchScenario.elms.cm.delay(3000).fadeOut(3000);
	},

	eventListeners: function() {
		touchScenario.elms.exploreBtn.on('click touch', function( e ) {
			e.preventDefault();
			$('body').find('.arrows-nav-mobile').fadeIn(1000);
			$('body').removeClass('accessibility-mode');
			toggleMenu.openMenu(e);
		});
	},

	init: function() {
		touchScenario.fades();
		touchScenario.eventListeners();
	}
};



