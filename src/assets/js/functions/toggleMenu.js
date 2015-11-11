var toggleMenu = {

	elms: {
		menuOpen: $('#trigger-menu-open'),
		menuClose: $('#trigger-menu-close'),
		globalMenu: $('#global-menu'),
		pageOverlays: $('.page-overlay'),
		body: $('body'),
		buyNav: $('#buy-nav')
	},

	openMenu: function( e ) {
		e.preventDefault();
		toggleMenu.elms.globalMenu.fadeIn(600);
		toggleMenu.elms.body.addClass('overflow-hide');
	},

	closeMenu: function( e ) {
		e.preventDefault();
		toggleMenu.elms.globalMenu.fadeOut(600);
		toggleMenu.elms.body.removeClass('overflow-hide');
	},

	eventListeners: function() {
		toggleMenu.elms.menuOpen.on('click touch', function( e ) {
			toggleMenu.openMenu(e);
		});
		toggleMenu.elms.menuClose.on('click touch', function( e ) {
			toggleMenu.closeMenu(e);
		});
		toggleMenu.elms.buyNav.on('click touch', function( e ) {
			toggleMenu.closeMenu(e);
		});
	},

	init: function() {
		toggleMenu.eventListeners();
	}
};
