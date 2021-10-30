document.addEventListener('DOMContentLoaded', function () {

	// $('body').hide()
	$('.nav-mobile').click(function () {
		$('.top_nav').toggleClass('show');
	})

	$('#afisha__slider').owlCarousel({
		loop: true,
		items: 4,
		dots: false,
		autoplay: true,
		slideTransition: 'linear',
		autoplayTimeout: 3000,
		autoplaySpeed: 3000,
		autoplayHoverPause: true,
		nav: false,
		responsive: {
			0: {
				items: 1
			},
			700: {
				items: 2
			},
			900: {
				items: 3
			},
			1400: {
				items: 4
			}
		}
	})
})
