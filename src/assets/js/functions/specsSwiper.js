var specsSwiper = {

	elms: {
		specWrap: $('.grid-wrap-specs'),
		specItem: $('[data-item]'),
		navItem: $('[data-nav]'),
		hotspot: $('[data-hotspot]')
	},

	changeSpec: function( e ) {
		var $currentSpec = $('[data-item].current');
		var $navItem = specsSwiper.elms.navItem;

		var numOfItems = 3;
		var navNum = parseInt($navItem.attr('data-nav'));
		var newNavNum;

		if ( navNum < numOfItems ) {
			newNavNum = navNum+1;
		} else {
			newNavNum = 1;
		}

		if ( $(e.target).hasClass('hotspot') ) {
			newNavNum = $(e.target).attr('data-hotspot');
		}

		// Make it a string
		var newNavNumString = newNavNum.toString();

		// Apply new nav number to nav
		$navItem.attr('data-nav', newNavNumString);

		// Get the next spec which will be shown
		var $newCurrentSpec = specsSwiper.elms.specWrap.find('[data-item="' + newNavNumString + '"]');

		$currentSpec.removeClass('current');
		$newCurrentSpec.addClass('current');
	},

	eventListeners: function() {
		// specsSwiper.elms.specItem.on('click touch', function( e ) {
		// 	specsSwiper.changeSpec(e);
		// });
		specsSwiper.elms.hotspot.on('click touch', function( e ) {
			specsSwiper.changeSpec(e);
		});
	},

	init: function() {
		if ( specsSwiper.elms.specItem.length > 0 ) {
			specsSwiper.eventListeners();
		}
	}
};
