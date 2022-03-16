document.addEventListener("DOMContentLoaded", function () {
  // $('body').hide()
  $(".nav-mobile").click(function () {
    $(".top_nav").toggleClass("show");
    $(".nav-mobile .sandwich").toggleClass("is-active");
  });

  // $('#afisha__slider').owlCarousel({
  // 	loop: true,
  // 	items: 4,
  // 	dots: false,
  // 	autoplay: true,
  // 	slideTransition: 'linear',
  // 	autoplayTimeout: 3000,
  // 	autoplaySpeed: 3000,
  // 	autoplayHoverPause: true,
  // 	nav: false,
  // 	responsive: {
  // 		0: {
  // 			items: 1
  // 		},
  // 		700: {
  // 			items: 2
  // 		},
  // 		900: {
  // 			items: 3
  // 		},
  // 		1400: {
  // 			items: 4
  // 		}
  // 	}
  // })

  function main_nav_mobile() {
    if ($(document).width() <= 768) {
      $(".main__nav .nav li:not(:first-child):not(.mobile-collapse)").each(
        function (index, el) {
          $(el).hide();
        }
      );
    }
    $(".mobile-collapse").click(function () {
      $(".main__nav .nav li:not(:first-child):not(.mobile-collapse)").each(
        function (index, el) {
          $(el).toggle();
        }
      );
    });
  }
  main_nav_mobile();
});
