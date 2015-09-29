$(document).ready(function() {

"use strict";

$("#typed").typed({

	strings: ["Front End Developer", "Aspiring Game Developer", "Toronto Maple Leafs Fan"],
	typeSpeed: 25,
	startDelay: 1000,
	backSpeed: 25,
	backDelay: 2000, 
	loop: true,
	loopCount: false,
	showCursor: true,
	attr: null,
	contentType: 'html',
	callback: function() {},
	preStringTyped: function() {},
	onStringTyped: function() {},
	resetCallBack: function() {}

});

var window_width = $(window).width();

$(window).scroll(function() {
	"use strict";
	var scroll = $(window).scrollTop();
	if(scroll > 60) {
		$(".navbar").addClass("scroll-fixed-navbar");
	} else {
		$(".navbar").removeClass("scroll-fixed-navbar");
	}
});

$(".scroll-info a[href^='#']").on('click', function(e) {
	e.preventDefault();
	$('html, body').animate({
		scrollTop: $(this.hash).offset().top-80

	}, 1000);
});

var wow = new WOW({
	animateClass: 'animated',
	offset:       100,
	mobile:       false
});
wow.init();

if(window_width	> 992) {
	$('.counter').parallax("50%", 0.1);
}

  // -------------- Jquery CountTo (Project Counter) -------------- 
$('.counter').appear(function() {
   $('.timer').each(count);
   function count(options) {
     var $this = $(this);
     options = $.extend({}, options || {}, $this.data('countToOptions') || {});
     $this.countTo(options);
   }
});

});