var toggleMenu = {

	elms: {
		menuOpen: $('#trigger-menu-colleges'),
		menuClose: $('#trigger-menu-close'),
		collegeMenu: $('#college-menu'),
		body: $('body')
	},

	openMenu: function( e ) {
		e.preventDefault();
		toggleMenu.elms.collegeMenu.fadeIn(600);
		toggleMenu.elms.body.addClass('overflow-hide');
	},

	closeMenu: function( e ) {
		e.preventDefault();
		toggleMenu.elms.collegeMenu.fadeOut(600);
		toggleMenu.elms.body.removeClass('overflow-hide');
	},

	eventListeners: function() {
		toggleMenu.elms.menuOpen.on('click touch', function( e ) {
			toggleMenu.openMenu(e);
		});
		toggleMenu.elms.menuClose.on('click touch', function( e ) {
			toggleMenu.closeMenu(e);
		}); 
	},

	init: function() {
		toggleMenu.eventListeners();
	}
};
