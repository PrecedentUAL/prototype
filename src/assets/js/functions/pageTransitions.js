var pageTransitions = {

	elms: {
		globalMenu: $('#global-menu'),
		pageLink: $('.page-link'),
		globalMenuPageLink: $('#global-menu .page-link'),
		pageOverlays: $('.page-overlay')
	},

	goToLink: function( e ) {
		e.preventDefault();
		var linkLocation = $(e.target).attr('href');

		pageTransitions.elms.pageOverlays.show();
		pageTransitions.elms.globalMenu.fadeOut('400', function() {
			window.location.href = linkLocation;
			pageTransitions.elms.pageOverlays.fadeOut(2000);
		});
	},

	eventListeners: function() {
		pageTransitions.elms.globalMenuPageLink.on('click', function( e ) {
			pageTransitions.goToLink(e);
		});
	},

	pageLoads: function() {
		function pageOverlayHide() {
			pageTransitions.elms.pageOverlays.fadeOut(2000);
		}
		helpers.runWhenElementExsists( '.page-overlay', pageOverlayHide );
	},

	init: function() {
		pageTransitions.pageLoads();
		pageTransitions.eventListeners();
		pageTransitions.elms.pageOverlays.fadeOut(2000);
	}
};

