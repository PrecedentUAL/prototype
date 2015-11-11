var eventTagging = {

	dataCategory: function( $target ) {

		var value = parseInt($target.attr('data-value'), 10);
		if (value !== value) { value = null; } // More reliable than isNaN

		ga('send', 'event', $target.attr('data-category'), $target.attr('data-action'), $target.attr('data-label'), value);
	},

	dataOm: function( $target ) {
		s.linkTrackVars ='eVar33,events';
		s.linkTrackEvents ='event45';
		s.eVar33 = $target.attr('data-om'); // See below
		//s.eVar33Span = $eVar33.find('span');
		s.events ='event45';

		var linkType = ( $target.attr('href').indexOf("//") > -1 ) ? 'e' : 'o';
		var linkName = s.eVar33.replace(/^global:seriftv:(global|..):/i, '');

		s.tl( $target, linkType, linkName);

	},

	eventListeners: function() {
		$('[data-category]').click(function( e ) {
			var hasData = $(e.target).attr('data-category');
			var dataEl;

			if (hasData) {
				dataEl = $(e.target);
			} else {
				dataEl = $(e.target).closest('[data-category]');
			}
			eventTagging.dataCategory( dataEl );
		});

		$('[data-om]').click(function( e ) {
			var hasData = $(e.target).attr('data-om');
			var dataEl;

			if (hasData) {
				dataEl = $(e.target);
			} else {
				dataEl = $(e.target).closest('[data-om]');
			}
			eventTagging.dataOm( dataEl );
		});
	},

	init: function() {
		eventTagging.eventListeners();
	}
};