$(function(){
    /* ====================
        typed js start 
    ==================== */
    $(".typed").typed({
		strings: ["Learners |", "Web Designer |", "Frontend |"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 100,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: Infinity,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
    /* ====================
        typed js end 
    ==================== */
    /* ====================
        preloader js start 
    ==================== */
    $(window).on('load',function(){
        setTimeout(function(){ // allowing 3 secs to fade out loader
        $('.page-loader').fadeOut('10');
        },700);
    });
    /* ====================
        preloader js start 
    ==================== */
    /* ====================
        lightbox js start 
    ==================== */
    lightbox.option({
		'resizeDuration': 200,
		'wrapAround': true
	  })
    /* ====================
        lightbox js end 
    ==================== */
    /* ====================
        venubox js end 
    ==================== */
	new VenoBox({
		selector: '.playit',
	});
    /* ====================
        venubox js end 
    ==================== */
    /* ====================
        mixitup js start 
    ==================== */
	var mixer = mixitup('.mixit');
    /* ====================
        mixitup js end 
    ==================== */
    /* ====================
        slider js start 
    ==================== */
	$('.test-main').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
		dots: true,
		autoplaySpeed: 2000,
	});
    /* ====================
        slider js end 
    ==================== */
    /* ====================
        counter js start 
    ==================== */
	jQuery(document).ready(function($) {
		$('.counter').counterUp({
			delay: 10,
			time: 1000
		});
	});
    /* ====================
        counnter js end 
    ==================== */
    /* ====================
        counnter js end 
    ==================== */
	$('.brand-main').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
		autoplaySpeed: 2000,
		  responsive: [
			{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '0',
			  }
			},
		  
		  ],
		  responsive: [
			{
			  breakpoint: 992,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '0',
			  }
			},
		  
		  ],
    });

    /* ====================
        counnter js end 
    ==================== */
	 /* ==================
    bottom2top start
    ===================== */
    $(window).on('scroll',function(){

		var scrolling = $(this).scrollTop()
		if(scrolling > 50){
		  $(".bottom2top").fadeIn(500)
		}else {
		  $(".bottom2top").fadeOut(500)
		}

		if(scrolling > 20){
			$(".menu-bg").addClass("nav-bg")
		  }else {
			$(".menu-bg").removeClass("nav-bg")
		  }
	  
	  })
	  $(".bottom2top").on('click',function(){
		$("html,body").animate({
		  scrollTop: 0
		},1000)
	  })
	  /* ==================
	  bottom2top end 
	  ===================== */
	  /* ==================
	  wow js start 
	  ===================== */
	  new WOW().init();
	  /* ==================
	  wow js end 
	  ===================== */
});
/* ==================
	progress js start 
	===================== */
$('.chomolok').rProgressbar({
	percentage: 65
  });
  $('.chom2').rProgressbar({
	percentage: 95
  });
  $('.chom3').rProgressbar({
	percentage: 85
  });
  $('.chom4').rProgressbar({
	percentage: 70
  });
  $('.chom5').rProgressbar({
	percentage: 60
  });
  $('.chom6').rProgressbar({
	percentage: 99
  });

$(this).waypoint(lineProgressBarInit, { offset: '100%', triggerOnce: true });

lineProgressBarInit();
// $('.chomolok').rProgressbar({
// 	percentage: 99,
// 	fillBackgroundColor: '#ed1c24',
// 	backgroundColor: '#EEEEEE',
// 	borderRadius: '0px',
// 	height: '10px',
// 	width: '100%'
//   });
//   $('.chomolok').rProgressbar({
// 	percentage: 99,
// 	ShowProgressCount: false
//   });
//   $('.chomolok').rProgressbar({
// 	percentage: 99,
// 	duration: 2000
//   });

  /* ==================
	progress js end 
	===================== */