var searchMenu = {

	elms: {
		menuOpen: $('#trigger-menu-search'),
		menuClose: $('#search-menu-close'),
		actualMenu: $('#search-menu'),
		body: $('body')
	},

	openMenu: function( e ) {
		e.preventDefault();
		searchMenu.elms.actualMenu.fadeIn(600);
		searchMenu.elms.body.addClass('overflow-hide');
	},

	closeMenu: function( e ) {
		e.preventDefault();
		searchMenu.elms.actualMenu.fadeOut(600);
		searchMenu.elms.body.removeClass('overflow-hide');
	},

	eventListeners: function() {
		searchMenu.elms.menuOpen.on('click touch', function( e ) {
			searchMenu.openMenu(e);
		});
		searchMenu.elms.menuClose.on('click touch', function( e ) {
			searchMenu.closeMenu(e);
		}); 
	},

	init: function() {
		searchMenu.eventListeners();
	}
};
