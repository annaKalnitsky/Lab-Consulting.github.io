$(function () {

//Preloader	

	var $preloader = $('#page-preloader'),
	    $spinner   = $preloader.find('.spinner');
	$spinner.fadeOut();
	$preloader.delay(350).fadeOut('slow');

//Menu opener hamburger

	$('.menu-open').click(function () {
		$('.menu-collapse').toggleClass('d-none').css('order','1');
		$('.menu').toggleClass('menu-opened');
	});

//Всплывающее окно

	$('.call-btn').click(function (e) {
		e.preventDefault()
		$('#exampleModal').arcticmodal();
	});

	$('.footer-btn').click(function (e) {
		e.preventDefault()
		$('#exampleModal').arcticmodal();
	});



//Прокрутка 

	$(".go").click(function (e) {
		e.preventDefault();
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 2000);
	});

// //Slider

	  $('.slider').slick({
	  	dots:true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
	  });

});








