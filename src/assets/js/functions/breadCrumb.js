var breadCrumb = {

	elms: {
		body: $('body'),
		bcToggle: $('#breadcrumb-toggle'),
		historyItems: $('.history-item'),
		bIcon: $('#breadcrumb-icon'),
		hasBorder: $('.lead')
	},

	eventListeners: function() {
	  
		breadCrumb.elms.bcToggle.on('click touch', function( e ) {
			e.preventDefault(); 
			breadCrumb.elms.historyItems.slideToggle(600);
			breadCrumb.elms.bIcon.toggleClass("active");
			breadCrumb.elms.hasBorder.toggleClass("border");
		}); 
	},

	init: function() {
		breadCrumb.eventListeners(); 
		breadCrumb.elms.historyItems.fadeOut();
		breadCrumb.elms.children('span').removeClass("active");
		breadCrumb.elms.historyItems.removeClass("last");
	}
};
