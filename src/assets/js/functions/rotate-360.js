var rotate360 = {

	elms: {
		serif360Tv: $('.serif-360-tv'),
		transparentImg: $('.threesixty-wrap .transparent'),
		rotateButtons: $('#rotate-left, #rotate-right'),
		rotateLeft: $('#rotate-left'),
		rotateRight: $('#rotate-right'),
		serif360Caption: $('.serif-360-caption')
	},

	initThreeSixtyDesktop: function() {
		var serif360Tv;

		var imageWidth = rotate360.elms.transparentImg.width();
		var imageHeight = rotate360.elms.transparentImg.height();

		serif360Tv = $('.serif-360-tv').ThreeSixty({
			totalFrames: 72, // Total no. of image you have for 360 slider
			endFrame: 2, // end frame for the auto spin animation
			currentFrame: 1, // This the start frame for auto spin
			imgList: '.threesixty_images', // selector for image list
			progress: '.spinner', // selector to show the loading progress
			imagePath:'../assets/img/threesixty-imgs/', // path of the image assets
			filePrefix: 'UE32LS0002_', // file prefix if any
			ext: '.jpg', // extention for the assets
			height: imageHeight,
			width: imageWidth,
			responsive: true,
			navigation: false
			// dragging: true
		});

		function runOnLoad() {
			rotate360.eventListeners( serif360Tv );
			rotate360.scrolling( serif360Tv );
		}

		helpers.runWhenElementExsists( '.current-image', runOnLoad );
	},

	initThreeSixtyTouch: function() {
		var serif360Tv;

		var imageWidth = rotate360.elms.transparentImg.width();
		var imageHeight = rotate360.elms.transparentImg.height();

		serif360Tv = $('.serif-360-tv').ThreeSixty({
			totalFrames: 72, // Total no. of image you have for 360 slider
			endFrame: 39, // end frame for the auto spin animation
			currentFrame: 1, // This the start frame for auto spin
			imgList: '.threesixty_images', // selector for image list
			progress: '.spinner', // selector to show the loading progress
			imagePath:'../assets/img/threesixty-imgs/', // path of the image assets
			filePrefix: 'UE32LS0002_', // file prefix if any
			ext: '.jpg', // extention for the assets
			height: imageHeight,
			width: imageWidth,
			responsive: true,
			navigation: false
			// dragging: true
		});

		function runOnLoad() {
			rotate360.eventListeners( serif360Tv );
		}

		helpers.runWhenElementExsists( '.current-image', runOnLoad );
	},

	scrolling: function( serif360Tv ) {
		$(window).scroll(function( e ) {
			var page_percentage,
				frame_value,
				page_offset;

			page_offset = $(window)[0].pageYOffset;

			if ( page_offset ) {
				if ( page_offset > 700 ) {
					page_offset = 700;
				}
				page_percentage = page_offset / 700 * 100;
				frame_value = Math.abs(Math.floor(40 / 100 * page_percentage));
				serif360Tv.gotoAndPlay(frame_value);
			}
		});
	},

	checkCurrentImage: function() {
		setTimeout( function() {
			var $currentListItem = $('.threesixty_images').find('.current-image').closest('li');
			var fileNumber = $('li').index( $currentListItem );
			rotate360.changeText(fileNumber);
		}, 500);
	},

	changeText: function( fileNumber ) {
		var $serif360Caption = rotate360.elms.serif360Caption;
		var $captionText = $serif360Caption.find('.img-caption-text');

		var $backText = $serif360Caption.find('.img-caption-text.back');
		var $sideText = $serif360Caption.find('.img-caption-text.side');
		var $frontText = $serif360Caption.find('.img-caption-text.front');

		// Back
		if ( ( (fileNumber >= 1) && (fileNumber <= 26) ) || ( (fileNumber > 69) && (fileNumber <= 72) ) ) {
			// console.log(fileNumber + '= back');
			if ( !$backText.hasClass('show') ) {
				$captionText.hide();
				$captionText.removeClass('show');
				$backText.fadeIn('slow', function() {
					$backText.addClass('show');
				});
			}

		// Front
		} else if ( (fileNumber >= 35) && (fileNumber < 63) ) {
			// console.log(fileNumber + '= front');
			if ( !$frontText.hasClass('show') ) {
				$captionText.hide();
				$captionText.removeClass('show');
				$frontText.fadeIn('slow', function() {
					$frontText.addClass('show');
				});
			}

		// Sides
		} else {
			// console.log(fileNumber + '= sides');
			if ( !$sideText.hasClass('show') ) {
				$captionText.hide();
				$captionText.removeClass('show');
				$sideText.fadeIn('slow', function() {
					$sideText.addClass('show');
				});
			}
		}
	},

	eventListeners: function( serif360Tv ) {
		rotate360.elms.rotateLeft.on('click', function( e ) {
			e.preventDefault();
			serif360Tv.next();
			rotate360.checkCurrentImage();
		});
		rotate360.elms.rotateRight.on('click', function( e ) {
			e.preventDefault();
			serif360Tv.previous();
			rotate360.checkCurrentImage();
		});
		rotate360.elms.serif360Tv.on('mouseup touchend', function( e ) {
			rotate360.checkCurrentImage();
		});
	},

	init: function() {
		if ( rotate360.elms.serif360Tv.length > 0 ) {

			if (Modernizr.touch) {
				rotate360.initThreeSixtyTouch();
			} else {
				rotate360.initThreeSixtyDesktop();
			}
		}
	}
};
