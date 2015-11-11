var videoServing = {

	elms: {
		heroWrap: $('#hero-wrap'),
        globalNav: $('#global-menu'),
        signUpVideo: $('#video-container')
	},

	appendVideo: function( videoType ) {
		var pageName = $('body').attr('id');
		var videoPath = 'https://b60c24b9e4911ddffcf7-1d6d66f234f09ae70e621320e1432d9c.ssl.cf3.rackcdn.com/stage2a/video-qa/serif-';
		var videoName;
		var fullVideoPath =  videoPath + pageName + '.' + videoType;

		videoServing.elms.heroWrap.append($("<video loop muted autoplay id='video' class='video-"+ pageName +"' style='display: none;'></video>"));
        videoServing.elms.heroWrap.find('#video').attr('src', fullVideoPath);
        videoServing.elms.heroWrap.find('#video').attr('type', 'video/' + videoType);
        videoServing.elms.heroWrap.find('#video').fadeIn(2000);

        videoServing.elms.heroWrap.addClass('bg-out');
        videoServing.elms.heroWrap.find('#video').prop('muted', true);

        var videoColor;

        if (pageName === "design") { videoColor = "blue"; }
        else if (pageName === "craft") { videoColor = "green"; }
        else if (pageName === "lifestyle") { videoColor = "red"; }
        else if (pageName === "buy") { videoColor = "blue"; }
        else if (pageName === "partners") { videoColor = "blue"; }
        else if (pageName === "index") { videoColor = "blue"; }
        else if (pageName === "home") { videoColor = "blue"; }
        else if (pageName === "country-selector") { videoColor = "blue"; }


        var videoCMPath = videoPath + videoColor + '.' + videoType;

       
        videoServing.elms.globalNav.append($("<video loop muted autoplay id='video-curtainmode' class='video-nav'></video>"));
        videoServing.elms.globalNav.find('#video-curtainmode').attr('src', videoCMPath);
        videoServing.elms.globalNav.find('#video-curtainmode').attr('type', 'video/' + videoType);
        videoServing.elms.globalNav.find('#video-curtainmode').fadeIn(2000);
   

        //videoServing.elms.globalNav.addClass('bg-out');
        touchScenario.elms.crossFade.hide();

        //sign up
        videoServing.elms.signUpVideo.append($("<video loop muted autoplay id='video' class='video-"+ pageName +"' style='display: none;'></video>"));
        videoServing.elms.signUpVideo.find('#video').attr('src', videoPath + 'blue.' + videoType); //temporary?
        videoServing.elms.signUpVideo.find('#video').attr('type', 'video/' + videoType);
        videoServing.elms.signUpVideo.find('#video').fadeIn(2000);

        //mute video sound for IE9
        if (pageName !== "buy") {
            var video = document.getElementById("video");
            video.volume = 0.0;
            video.muted = "muted";
        }

    },

	checkVideoType: function() {
        var videoType;

        // detect Firefox
        if (window.isFirefox > -1) {
            videoType = 'ogv';
        }
        // detect mp4
        if (Modernizr.video.h264 === 'probably') {
            videoType = 'mp4';
        }
        // detect webm
        else if (Modernizr.video.webm === 'probably') {
            videoType = 'webm';
        }
        // detect ogg
        else if (Modernizr.video.ogg === 'probably') {
            videoType = 'ogv';
        }

        videoServing.appendVideo( videoType );
    },

	init: function() {
		videoServing.checkVideoType();
	}
};
