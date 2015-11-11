var footerPopups = {

	elms: {
		footerLinks: $('.footer-social a')
	},

	eventListeners: function() {
		footerPopups.elms.footerLinks.click(function( e ) {
			e.preventDefault();
			var url = $(this).attr('href');
			window.open(url,'Share','width=560, height=270');
		});

	},

	init: function() { 
		footerPopups.eventListeners();
	}
};