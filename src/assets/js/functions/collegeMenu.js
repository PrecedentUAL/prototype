var collegeMenu = {

	elms: {
		menuOpen: $('#trigger-menu-colleges'),
		menuClose: $('#trigger-menu-close'),
		actualMenu: $('#college-menu'),
		body: $('body')
	},

	openMenu: function( e ) {
		e.preventDefault();
		collegeMenu.elms.actualMenu.fadeIn(600);
		collegeMenu.elms.body.addClass('overflow-hide');
	},

	closeMenu: function( e ) {
		e.preventDefault();
		collegeMenu.elms.actualMenu.fadeOut(600);
		collegeMenu.elms.body.removeClass('overflow-hide');
	},

	eventListeners: function() {
		collegeMenu.elms.menuOpen.on('click touch', function( e ) {
			collegeMenu.openMenu(e);
		});
		collegeMenu.elms.menuClose.on('click touch', function( e ) {
			collegeMenu.closeMenu(e);
		}); 
	},

	init: function() {
		collegeMenu.eventListeners();
	}
};
