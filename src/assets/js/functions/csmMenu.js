var csmMenu = {

	elms: {
		menuOpen: $('#trigger-menu-csm'),
		menuClose: $('#csm-menu-close'),
		actualMenu: $('#csm-menu'),
		body: $('body')
	},

	openMenu: function( e ) {
		e.preventDefault();
		csmMenu.elms.actualMenu.fadeIn(600);
		csmMenu.elms.body.addClass('overflow-hide');
	},

	closeMenu: function( e ) {
		e.preventDefault();
		csmMenu.elms.actualMenu.fadeOut(600);
		csmMenu.elms.body.removeClass('overflow-hide');
	},

	eventListeners: function() {
		csmMenu.elms.menuOpen.on('click touch', function( e ) {
			csmMenu.openMenu(e);
		});
		csmMenu.elms.menuClose.on('click touch', function( e ) {
			csmMenu.closeMenu(e);
		}); 
	},

	init: function() {
		csmMenu.eventListeners();
	}
};
