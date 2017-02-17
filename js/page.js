/**

A responsive CV template made using a variety of front-end technologies.
    Copyright (C) 2017  James Du Plessis

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

    If you have any issues please contact james.duplessis@protonmail.com.

**/

////////////////Smooth Scrolling////////////////


/*
	Binds the smooth scroll to the click event. When the user clicks a link which uses the # to reference
	an element it should be scrolled to non-abruptly.
*/
$("a[href*='#']:not([href='#'])").click(function() {
	if(location.pathname.replace(/^.*\/([^/]*)/, '') == this.pathname.replace(/^.*\/([^/]*)/, '') && location.hostname == this.hostname) { //if the two respective urls have the same hostname and normal path
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

	@param: the target to scroll to
	@return: false if scrollTo does not have a length
*/
function scroll(scrollTo){
	if(scrollTo.length) {
		$('html, body').animate({
			scrollTop: scrollTo.offset().top
		}, 1000)
	}
	return false;
}

$(document).scroll(function() {
	if($(window).scrollTop() === 0) {
		$('.container.wrap #scroller').fadeOut();
	}

	else {
		$('.container.wrap #scroller').fadeIn();
	}
})

////////////////Responsive code////////////////


/*
	Needs to be checked if page is reloaded for responsive buttons. Snippet for slow top scroll.
*/
$(document).ready(function() {
	changeButton(600);

	$("a[href='#']").click(function() {
        $('html, body').animate({scrollTop:0}, 'slow');
        return false;
    });
})

/*
	Use the window resize event to see if the width is less than 600, if so change the buttons.
*/
$(window).on('resize', function() {
	changeButton(600);
})

/*
	Does the actual legwork in checking and managing the button classes.

	@param: the width where the buttons should change
*/
function changeButton(width){
	if($(window).width() < width) {
		$('.wrap-main .main-section .button-group a').removeClass('button-pill').addClass('button-square');
		$('.wrap-main .main-section #menu-button .button-dropdown button').removeClass('button-large').addClass('button-square')
	}

	else {
		$('.wrap-main .main-section .button-group a').removeClass('button-square').addClass('button-pill');
		$('.wrap-main .main-section #menu-button .button-dropdown button').removeClass('button-square').addClass('button-large')
	}
}

////////////////Animation on contact icons////////////////

/*
	On mouseenter shake
*/
$('.wrap-sidebar #contact .contact-methods p i').mouseenter(function() {
	$(this).addClass('animated shake');
})

/*
	On mouseleave cease the shake
*/
$('.wrap-sidebar #contact .contact-methods p i').mouseleave(function() {
	$(this).removeClass('animated shake');
})