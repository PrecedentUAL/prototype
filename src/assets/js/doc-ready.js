
//  ***********************
//  $$ Document ready
//  ***********************
$(function() {
	window.windowWidth = window.innerWidth;
	window.windowHeight = window.innerHeight;

	window.isiPhone = navigator.userAgent.toLowerCase().indexOf('iphone');
	window.isiPad = navigator.userAgent.toLowerCase().indexOf('ipad');
	window.isiPod = navigator.userAgent.toLowerCase().indexOf('ipod');
  	window.isFirefox = (navigator.userAgent.toLowerCase().indexOf('firefox') > -1);

	window.tablet = 640;
	window.tabletWide = 800;
	window.desktop = 1024;

	// Add functions here
	
	collegeMenu.init(); // collegeMenu.js
	searchMenu.init(); // searchMenu.js
	courseMenu.init(); // courseMenu.js
	studyMenu.init(); // studyMenu.js
	mobileMenu.init(); // mobileMenu.js
	csmMenu.init(); // mobileMenu.js

	twitterCarousel.init(); // twitterCarousel.js


});

