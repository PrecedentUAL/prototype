var buy = {


	elms: {
		buyMaster: $('#buy-master'),
		backTostep1: $('#step2-back'),
		triggerSerifModel: $('.trigger-serif-model'),
		productSize: $('.product-size'),
		serifOption: $('.serif-option'),
	},


	// Update the window hash to which product is selected
	updateUrlHash: function( size, color ) {
		// Change the size number to a readable word
		if ( size === '40' ) {
			size = 'large';
		} else if ( size === '32' ) {
			size = 'medium';
		} else if ( size === '24' ) {
			size = 'mini';
		}
		// Concat string and update the window hash
		var productHash = 'seriftv-' + size + '-' + color;
		window.location.hash = productHash;
	},


	// Switching models
	switchModels: function( size, color ) {
		var $serifOptions = buy.elms.serifOption;
		var $SerifOptionToShow = $('[data-size="' + size + '"][data-color="' + color + '"]');
		var $SerifOptionsToShow = $('[data-size="' + size + '"][data-both-colors]');
		// Hide all the options first
		$serifOptions.hide();
    // Highlight colours in spec table
    $('.serif-option span').removeClass('selected');
    $('.serif-option .'+color+'').addClass('selected');
		// Fade in the chosen options, and when faded in, add the class 'show'
		$SerifOptionToShow.fadeIn('slow');
		$SerifOptionsToShow.fadeIn('slow');

		// Give active states to the size buttons to show which size we are on
		buy.elms.productSize.find('[data-trigger-size]').removeClass('active');
		buy.elms.productSize.find('[data-trigger-size="' + size + '"]').addClass('active');

		buy.updateUrlHash( size, color );
	},
	whichModel: function( e ) {
		// Find which model we want, from the data attr of the button clicked
		var size = $(e.target).closest('.trigger-serif-model').attr('data-trigger-size');
		var color = $(e.target).closest('.trigger-serif-model').attr('data-trigger-color');
		buy.switchModels(size, color);
	},


	// Resizing step heights
	resizeHeightStep1: function() {
		function giveWrapHeight() {
			var stepHeight1 = $('#buy-step1').height();
			$('#buy-master').css('height', stepHeight1);
		}
		helpers.runWhenElementExsists( '#buy-step1', giveWrapHeight );
	},
	resizeHeightStep2: function() {
		function giveWrapHeight() {
			var stepHeight2 = $('#buy-step2').height();
			$('#buy-master').css('height', stepHeight2);
		}
		helpers.runWhenElementExsists( '#buy-step2', giveWrapHeight );
	},


	// Switching steps
	step1Reveal: function() {
		$('#buy-step1').removeClass('de-active');
		$('#buy-step2').removeClass('active');
		buy.resizeHeightStep1();

		buy.elms.backTostep1.removeClass('active');
	},
	step2Reveal: function() {
		$('#buy-step1').addClass('de-active');
		$('#buy-step2').addClass('active');
		buy.resizeHeightStep2();

		buy.elms.backTostep1.addClass('active');
	},


	// Event listeners
	eventListeners: function() {

		// Buttons
		buy.elms.triggerSerifModel.on('click touch', function( e ) {
			e.preventDefault();
			buy.step2Reveal();
			buy.whichModel(e);
		});

		buy.elms.backTostep1.on('click touch', function( e ) {
			e.preventDefault();
			buy.step1Reveal();
		});


		// Window hash's
 		if ( window.location.hash.indexOf('seriftv-large-white') === 1 ||
			window.location.hash.indexOf('UE40LS001AUXXU') === 1 ||
			window.location.hash.indexOf('ue40ls001auxxu') === 1 ) {
 			buy.step2Reveal();
 			buy.switchModels('40', 'white');
 		}
		else if ( window.location.hash.indexOf('seriftv-large-darkblue') === 1 ||
			window.location.hash.indexOf('UE40LS001CUXXU') === 1 ||
			window.location.hash.indexOf('ue40ls001cuxxu') === 1 ) {
 			buy.step2Reveal();
 			buy.switchModels('40', 'blue');
 		}
 		else if ( window.location.hash.indexOf('seriftv-medium-white') === 1 ||
			window.location.hash.indexOf('UE32LS001AUXXU') === 1 ||
			window.location.hash.indexOf('ue32ls001auxxu') === 1 ) {
 			buy.step2Reveal();
 			buy.switchModels('32', 'white');
 		}
 		else if ( window.location.hash.indexOf('seriftv-medium-darkblue') === 1 ||
			window.location.hash.indexOf('UE32LS001CUXXU') === 1 ||
			window.location.hash.indexOf('ue32ls001cuxxu') === 1 ) {
 			buy.step2Reveal();
 			buy.switchModels('32', 'blue');
 		}
 		else if ( window.location.hash.indexOf('seriftv-mini-white') === 1 ||
			window.location.hash.indexOf('UE24LS001AUXXU') === 1 ||
			window.location.hash.indexOf('ue24ls001auxxu') === 1 ) {
 			buy.step2Reveal();
 			buy.switchModels('24', 'white');
 		}
 		else if ( window.location.hash.indexOf('seriftv-mini-red') === 1 ||
			window.location.hash.indexOf('UE24LS001BUXXU') === 1 ||
			window.location.hash.indexOf('ue24ls001buxxu') === 1 ) {
 			buy.step2Reveal();
 			buy.switchModels('24', 'red');
 		}

 		// Changing window orientation
		$( window ).on('orientationchange', function() {
			buy.resizeHeightStep1();
		});
	},


	init: function() {
		if ( buy.elms.buyMaster.length > 0 ) {
			buy.resizeHeightStep1();
			buy.eventListeners();
		}
	}

};