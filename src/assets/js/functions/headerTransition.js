var headerTransition = {

	elms: {
		headerBg: $('#header-bg'),
		heroWrap: $('.hero-wrap'),
		logoSwap: $('.-logo'),
		buyPage: $('body#buy')
	},

	changeHeader: function() {
		var heroHeight = headerTransition.elms.heroWrap.height();

        if ( $(window).scrollTop() > heroHeight ) {
            headerTransition.elms.headerBg.addClass('white');
        } else {
            headerTransition.elms.headerBg.removeClass('white');
        }
	},

	eventListeners: function() {
        $(window).scroll(function() {
        	headerTransition.changeHeader();
        });
	},

	init: function() {
		if ( (window.windowWidth > 815) && (!Modernizr.touch) ) {
			headerTransition.elms.headerBg.show();

			if ( headerTransition.elms.buyPage.length > 0 ) {
				headerTransition.elms.headerBg.addClass('white');
			} else {
				headerTransition.eventListeners();
			}

		} else {
			headerTransition.elms.headerBg.hide();
		}
	}
};
