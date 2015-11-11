//  ***********************
//  $$ Smart resize
//  ***********************
(function ($, sr) {
	var debounce = function (func, threshold, execAsap) {
		var timeout;
		return function debounced() {
			var obj = this,
				args = arguments;
			function delayed() {
				if (!execAsap) {
					func.apply(obj, args);
				}
				timeout = null;
			}
			if (timeout) {
				clearTimeout(timeout);
			} else if (execAsap) {
				func.apply(obj, args);
			}
			timeout = setTimeout(delayed, threshold || 500);
		};
	};
	jQuery.fn[sr] = function (fn) {
		return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr);
	};
})(jQuery, 'smartresize'); // End smartresize


$(window).smartresize(function () {
	window.newWindowWidth = window.innerWidth;
	window.newWindowHeight = window.innerHeight;

	var newWindowWidthResult = newWindowWidth * 0.66;
	 
	window.windowWidth = window.innerWidth;
	window.windowHeight = window.innerHeight;

	 


});