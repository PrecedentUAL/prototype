var helpers = {

	runWhenElementExsists: function( element, functionToRun ) {
		var interval = setInterval( function() {

			if ( $(element).length > 0 ) {

				functionToRun();

				clearInterval(interval);
			}

		}, 500);
	},

	runWhenEverythingLoaded: function( functionToRun ) {
		var everythingLoaded = setInterval(function() {
			if (/loaded|complete/.test(document.readyState)) {
				clearInterval(everythingLoaded);
				functionToRun();
			}
		}, 10);
	}

};
