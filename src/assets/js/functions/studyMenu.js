var studyMenu = {

	elms: {
		menuOpen: $('#trigger-menu-study'),
		menuClose: $('#study-menu-close'),
		actualMenu: $('#study-menu'),
		body: $('body')
	},

	openMenu: function( e ) {
		e.preventDefault();
		studyMenu.elms.actualMenu.fadeIn(600);
		studyMenu.elms.body.addClass('overflow-hide');
	},

	closeMenu: function( e ) {
		e.preventDefault();
		studyMenu.elms.actualMenu.fadeOut(600);
		studyMenu.elms.body.removeClass('overflow-hide');
	},

	eventListeners: function() {
		studyMenu.elms.menuOpen.on('click touch', function( e ) {
			studyMenu.openMenu(e);
		});
		studyMenu.elms.menuClose.on('click touch', function( e ) {
			studyMenu.closeMenu(e);
		}); 
	},

	init: function() {
		studyMenu.eventListeners();
	}
};
