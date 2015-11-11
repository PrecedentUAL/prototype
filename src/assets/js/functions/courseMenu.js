var courseMenu = {

	elms: {
		menuOpen: $('#trigger-menu-course'),
		menuClose: $('#course-menu-close'),
		actualMenu: $('#course-menu'),
		body: $('body')
	},

	openMenu: function( e ) {
		e.preventDefault();
		courseMenu.elms.actualMenu.fadeIn(600);
		courseMenu.elms.body.addClass('overflow-hide');
	},

	closeMenu: function( e ) {
		e.preventDefault();
		courseMenu.elms.actualMenu.fadeOut(600);
		courseMenu.elms.body.removeClass('overflow-hide');
	},

	eventListeners: function() {
		courseMenu.elms.menuOpen.on('click touch', function( e ) {
			courseMenu.openMenu(e);
		});
		courseMenu.elms.menuClose.on('click touch', function( e ) {
			courseMenu.closeMenu(e);
		}); 
	},

	init: function() {
		courseMenu.eventListeners();
	}
};
