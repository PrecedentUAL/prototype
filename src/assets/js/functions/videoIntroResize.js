var videoIntroResize = {

    elms: {
        videoTrigger: $("#explore"),
        videoTriggerBack: $("#explore-back"),
        videoSplash:  $(".video-splash"),
        heroWrap: $('#hero-wrap'),
        navHome: $("#home-menu"),
        hero: $(".hero"),
        watchFilm: $('.watch-film')
    },

    menuShift: function( amount ) {
        videoIntroResize.elms.navHome.css({
            'right' : amount,
            '-webkit-transform' : 'translateX(0%)',
            '-moz-transform'    : 'translateX(0%)',
            '-ms-transform'     : 'translateX(0%)',
            '-o-transform'      : 'translateX(0%)',
            'transform'         : 'translateX(0%)'
        });
    },

    pauseAndShift: function( $target ) {
        var $arrowRight = $('body').find('.arrows-nav.right');
        var $video = videoIntroResize.elms.videoSplash.find('#video');

        videoIntroResize.elms.videoSplash.addClass('bg-out');

        //pause video
        var video =  $video.get(0);
        if (video.paused === false) {
            video.pause();
        } else {
            video.play();
        }

        videoIntroResize.elms.hero.fadeOut(500);
        videoIntroResize.elms.watchFilm.fadeOut(500);

        videoIntroResize.elms.navHome.addClass('home-menu-shift');
        $arrowRight.addClass('show-arrow');

        // Shift menu off 66% on screen and video off 33%
        $video.addClass('shift');
        videoIntroResize.menuShift('0');

        // Fade in back button
        videoIntroResize.elms.videoTriggerBack.addClass('show');
        setTimeout( function() {
            videoIntroResize.elms.videoTriggerBack.addClass('fadeIn');
        }, 600);

        return false;
    },

    playAndShiftBack: function( $target ) {
        var $arrowRight = $('body').find('.arrows-nav.right');
        var $video = videoIntroResize.elms.videoSplash.find('#video');

        videoIntroResize.elms.videoSplash.addClass('bg-out');

        //play video
        var video = $video.get(0);
        if (video.paused === true) {
            video.play();
        } else {
            video.pause();
        }

        videoIntroResize.elms.hero.fadeIn(500);
        videoIntroResize.elms.watchFilm.fadeIn(500);

        videoIntroResize.elms.navHome.removeClass('home-menu-shift');
        $arrowRight.removeClass('show-arrow');

        // Shift menu off screen and video back full screen
        $video.removeClass('shift');
        videoIntroResize.menuShift('-66%');

        // FadeOut back button
        $target.removeClass('fadeIn');
        setTimeout( function() {
            $target.removeClass('show');
        }, 600);

        return false;
    },

    eventListeners: function() {
        videoIntroResize.elms.videoTrigger.on('click', function( e ) {
            e.preventDefault();
            videoIntroResize.pauseAndShift( $(e.target) );
        });
         videoIntroResize.elms.videoTriggerBack.on('click', function( e ) {
            e.preventDefault();
            videoIntroResize.playAndShiftBack( $(e.target) );
        });
    },

	init: function() {
		videoIntroResize.eventListeners();
	}
};
