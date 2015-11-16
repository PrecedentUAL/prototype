var mobileMenu = {

	elms: {
		menuOpen: $('#trigger-menu-mobile'),
		menuClose: $('#mobile-menu-close'),
		actualMenu: $('#mobile-menu'),
		body: $('body'),
		openSubmenu: $('.trigger-subnav'),
		menuExpanded: $('.menu-expanded'),
		menuExpandedDefault: $('.expanded'),
		subMenuItem: $('.menu-expanded li a'),
		subMenuStatus: $('.menu-expanded li a span')
	},
 

	openMenu: function( e ) {
		e.preventDefault();
		mobileMenu.elms.actualMenu.fadeIn(600);
		mobileMenu.elms.body.addClass('overflow-hide');
	},

	closeMenu: function( e ) {
		e.preventDefault();
		
		mobileMenu.elms.actualMenu.fadeOut(600);
		mobileMenu.elms.menuExpanded.fadeOut(600);
		mobileMenu.elms.openSubmenu.children('span').removeClass('active');
		mobileMenu.elms.body.removeClass('overflow-hide');
	},

	eventListeners: function() {
		mobileMenu.elms.menuOpen.on('click touch', function( e ) {
			mobileMenu.openMenu(e);
		});
		mobileMenu.elms.menuClose.on('click touch', function( e ) {
			mobileMenu.closeMenu(e);
		}); 
		mobileMenu.elms.openSubmenu.on('click touch', function( e ) {
			e.preventDefault();
			var $el = $(this);
			$el.parent().next(".menu-expanded").first().slideToggle(600);
			$el.children('span').toggleClass("active");
		});
		mobileMenu.elms.subMenuItem.on('click touch', function( e ) {
			return false(e);
		});
	 
			
	 
	},

	init: function() {
		mobileMenu.eventListeners();
		mobileMenu.elms.menuExpanded.fadeOut(600);
		mobileMenu.elms.menuExpandedDefault.slideDown(600);
		mobileMenu.elms.menuExpandedDefault.prev().children('.trigger-subnav').children('span').addClass('active');
	}
};
