var breadCrumb = {

	elms: {
		body: $('body'),
		bcToggle: $('#breadcrumb-toggle'),
		historyItems: $('.history-item'),
		bIcon: $('#breadcrumb-icon')
	},

	eventListeners: function() {
	  
		breadCrumb.elms.bcToggle.on('click touch', function( e ) {
			e.preventDefault(); 
			breadCrumb.elms.historyItems.slideToggle(600);
			breadCrumb.elms.bIcon.toggleClass("active");
		}); 
	},

	init: function() {
		breadCrumb.eventListeners(); 
		breadCrumb.elms.historyItems.fadeOut();
		breadCrumb.elms.children('span').removeClass("active");
		breadCrumb.elms.historyItems.removeClass("last");
	}
};
