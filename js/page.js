///Smooth Scrolling

/*
	Binds the smooth scroll to the click event. When the user clicks a link which uses the # to reference
	an element it should be scrolled to non-abruptly.
*/
$("a[href*='#']:not([href='#'])").click(function() {
	//if the two respective urls have the same hostname and normal path
	if(location.pathname.replace(/^.*\/([^/]*)/, '') == this.pathname.replace(/^.*\/([^/]*)/, '') && location.hostname == this.hostname) {
		var scrollTo =  $(this.hash);   //get the whole id value, e.g. #foo

		if(scrollTo.length) {
			scrollTo = scrollTo;
		}

		else {
			scrollTo = $('[name=' + this.hash.slice(1) + ']'); //element name
		}

		scroll(scrollTo);

	}
})

/*
	Actually performs the smooth scroll through an animation setting the page scroll.
*/
function scroll(scrollTo){
	if(scrollTo.length) {
		$('html, body').animate({
			scrollTop: scrollTo.offset().top
		}, 1000)
	}
	return false;
}

///Responsive code

/*
	Use the window resize event to see if the width is less than 600, if so add classes to change the buttons.
*/
$(window).on('resize', function() {
	if($(window).width() < 600) {
		$('.wrap-main .main-section .button-group a').removeClass('button-pill').addClass('button-square');
		$('.wrap-main .main-section #menu-button .button-dropdown button').removeClass('button-large').addClass('button-square')
	}

	else {
		$('.wrap-main .main-section .button-group a').removeClass('button-square').addClass('button-pill');
		$('.wrap-main .main-section #menu-button .button-dropdown button').removeClass('button-square').addClass('button-large')
	}
})