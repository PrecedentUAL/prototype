var lazyLoad = {

	loadImmediately: function() {
		$.lazyLoadXT.forceLoad = true;
	},

	lazyLoadEffects: function() {
		$.lazyLoadXT.onload = function() {
			var $el = $(this);
			$el.removeClass('lazy-hidden').addClass('lazy animated ' + $el.attr('data-effect'));
		};
	},

	init: function() {
		if (Modernizr.touch) {
			lazyLoad.loadImmediately();
		} else {
			lazyLoad.lazyLoadEffects();
		}
	}
};