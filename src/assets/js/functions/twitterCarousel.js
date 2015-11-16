var twitterCarousel = {

	triggerCarousel: function( e ) {
		 
		$('.twitter-content').slick({
			dots: false,
			infinite: true,
			speed: 600,
			slidesToShow: 3,
			slidesToScroll: 1,
			swipe: true,
			nextArrow:"<img class='a-right control-c next slick-next' src='assets/img/arrow-next.jpg'>",
			responsive: [
			{
			  breakpoint: 1280,
			  settings: {
			    slidesToShow: 3,
			    slidesToScroll: 1,
			    infinite: true,
			    dots: false
			  }
			},
			{
			  breakpoint: 960,
			  settings: {
			    slidesToShow: 2,
			    slidesToScroll: 2
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
			    slidesToShow: 1,
			    slidesToScroll: 1
			  }
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
			]
		});
		 
	},

	eventListeners: function() {
		 twitterCarousel.triggerCarousel();
		
	
	},

	init: function() {
		twitterCarousel.eventListeners(); 
	}
};
