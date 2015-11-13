var desktopMenu = {

	elms: {
		menuOpen: $('#trigger-menu-desktop'),
		menuClose: $('#desktop-menu-close'),
		actualMenu: $('#desktop-menu'),
		body: $('body'),
		heroPosition: $('.hero-master')
	},

	openMenu: function( e ) {
		e.preventDefault();
		desktopMenu.elms.actualMenu.fadeIn(600);
		//desktopMenu.elms.body.addClass('overflow-hide');


		desktopMenu.elms.heroPosition.animate({
			 marginTop: '50px'
		});

	},

	closeMenu: function( e ) {
		e.preventDefault();
		desktopMenu.elms.actualMenu.fadeOut(600);
		//desktopMenu.elms.body.removeClass('overflow-hide');

		desktopMenu.elms.heroPosition.animate({
			 marginTop: '0px'
		});
	},

	eventListeners: function() {
		desktopMenu.elms.menuOpen.on('click touch', function( e ) {
			desktopMenu.openMenu(e);
		});
		desktopMenu.elms.menuClose.on('click touch', function( e ) {
			desktopMenu.closeMenu(e);
		}); 
	},

	init: function() {
		desktopMenu.eventListeners();
	}
};
