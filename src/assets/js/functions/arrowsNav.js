var arrowsNav = {

	elms: {
		heroWrap: $('#hero-wrap'),
		footerBottom: ('.footer-bottom')
	},

	arrowPositions: function( $arrowPrev, $arrowNext ) {
		var arrowPrevWidth = $arrowPrev.width() + 58;
		$arrowPrev.css('left', '-' + arrowPrevWidth + 'px');

		var arrowNextWidth = $arrowNext.width() + 58;
		$arrowNext.css('right', '-' + arrowNextWidth + 'px');
	},

	appendDesktopArrows: function( prevPage, nextPage, prevPageFile, nextPageFile ) {
		var $heroWrap = arrowsNav.elms.heroWrap;
		var pageCurrent = $('body').attr('id');

		// Append above hero
		$('<a href="" class="arrows-nav left page-link" data-category="" data-action="Click" data-label=""><span class="webfont-cheveron prev"></span><div class="arrow arrow-prev"><span></span></div></a><a href="" class="arrows-nav right page-link" data-category=" page" data-action="Click" data-label=""><span class="webfont-cheveron next"></span><div class="arrow arrow-next"><span></span></div></a>').insertBefore($heroWrap);

		// Add the page names and links to prev and next arrows
		var $arrowNavLeft = $('body').find('.arrows-nav.left');
		$arrowNavLeft.attr('href', prevPageFile + '.html');
		$arrowNavLeft.attr('data-category', pageCurrent + ' page'); //tracking
		$arrowNavLeft.attr('data-label', prevPage); //tracking
		$arrowNavLeft.attr('data-om', 'global:seriftv:uk:' + prevPage + ':arrow_left'); //tracking
		var $arrowPrev = $arrowNavLeft.find('.arrow-prev');
		$arrowPrev.find('span').text(prevPage);

		var $arrowNavRight = $('body').find('.arrows-nav.right');
		$arrowNavRight.attr('href', nextPageFile + '.html');
		$arrowNavRight.attr('data-category', pageCurrent + ' page');  //tracking
		$arrowNavRight.attr('data-label', nextPage); //tracking
		$arrowNavRight.attr('data-om', 'global:seriftv:uk:' + nextPage + ':arrow_right'); //tracking
		var $arrowNext = $arrowNavRight.find('.arrow-next');
		$arrowNext.find('span').text(nextPage);

		// Override for home page
		var pageName = $('body').attr('id');
		if ( pageName === 'home' ) {
			$arrowNavRight.attr('href', 'design.html');
			$arrowNext.find('span').text('design');
			$arrowNavLeft.css('display', 'none');

			$arrowNavRight.attr('data-category', 'Product navigation');  //tracking
			$arrowNavRight.attr('data-label', 'design'); //tracking
			$arrowNavRight.attr('data-om', 'global:seriftv:uk:home:arrow_right'); //tracking

			$arrowNavRight.css('display', 'none');
		}

		function doArrowPositions() {
			arrowsNav.arrowPositions($arrowPrev, $arrowNext);
		}
		helpers.runWhenElementExsists( $arrowPrev, doArrowPositions );
	},

	appendMobileArrows: function( prevPage, nextPage, prevPageFile, nextPageFile ) {

		// Override for home page
		var pageName = $('body').attr('id');
		if ( pageName === 'home' ) {
			nextPage = 'design';
		}

		// Elements to insert the arrows nav next to
		var $heroWrap = arrowsNav.elms.heroWrap;
		var $footerBottom = arrowsNav.elms.footerBottom;

		// Append top arrows nav
		$('<div class="arrows-nav-mobile"><a href="" class="webfont-cheveron prev page-link" data-category="" data-label="" data-action="Click"></a><a href="" class="webfont-cheveron next page-link" data-action="Click"></a></div').insertAfter($heroWrap);
		// Append bottom arrows nav
		$('<div class="arrows-nav-mobile bottom"><a href="" class="webfont-cheveron prev page-link" data-category="" data-label="" data-action="Click" ></a><a href="" class="webfont-cheveron next page-link" data-action="Click"></a></div').insertBefore($footerBottom);

		// Add the page names and links to prev and next arrows
		if ( pageName === 'home' ) {
			$('body').find('.arrows-nav-mobile .webfont-cheveron.prev').attr('href', './').text('Back');
			$('body').find('.arrows-nav-mobile .webfont-cheveron.next').attr('href', nextPage + '.html').text(nextPage);
		} else {
			$('body').find('.arrows-nav-mobile .webfont-cheveron.prev').attr('href', prevPageFile + '.html').text(prevPage);
			$('body').find('.arrows-nav-mobile .webfont-cheveron.prev').attr('data-label', prevPage); //tracking
			$('body').find('.arrows-nav-mobile .webfont-cheveron.prev').attr('data-category', pageName  + ' page'); //tracking
			$('body').find('.arrows-nav-mobile .webfont-cheveron.prev').attr('data-om', 'global:seriftv:uk:' + pageName + ':arrow_left'); //tracking

			$('body').find('.arrows-nav-mobile .webfont-cheveron.next').attr('href', nextPageFile + '.html').text(nextPage);
			$('body').find('.arrows-nav-mobile .webfont-cheveron.next').attr('data-label', nextPage); //tracking
			$('body').find('.arrows-nav-mobile .webfont-cheveron.next').attr('data-category', pageName  + ' page'); //tracking
			$('body').find('.arrows-nav-mobile .webfont-cheveron.next').attr('data-om', 'global:seriftv:uk:' + pageName + ':arrow_right');  //tracking
		}

	},

	getPageNames: function() {
		// Get page name
		var pageName = $('body').attr('id');
		// Make array of pages in order
		var pagesArray = ['craft', 'design', 'lifestyle'];
		// Get next and previous pages based on the above
		var prevPage = pagesArray[($.inArray(pageName, pagesArray) - 1 + pagesArray.length) % pagesArray.length];
		var nextPage = pagesArray[($.inArray(pageName, pagesArray) + 1) % pagesArray.length];
		var prevPageFile = prevPage;
		var nextPageFile = nextPage;

		if (typeof pageNames !== 'undefined') {
			prevPage = pageNames[prevPage];
			nextPage = pageNames[nextPage];
		}

		// Dependend on screen size, insert arrows navigation
		arrowsNav.appendMobileArrows( prevPage, nextPage, prevPageFile, nextPageFile );
		//arrowsNav.appendDesktopArrows( prevPage, nextPage, prevPageFile, nextPageFile );
	},

	init: function() {
		arrowsNav.getPageNames();
	}
};
