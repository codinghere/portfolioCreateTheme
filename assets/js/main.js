// Vanilla JavaScript Code Implement
( function() { 
  /*============ Sticky Header ============*/ 
  const body = document.body;
   let lastScroll = 0;
   window.addEventListener("scroll", () => {
     const currentScroll = window.pageYOffset;
     if (currentScroll <= 0) {
       body.classList.remove("scroll-up");
       return;
     }
     if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
       body.classList.remove("scroll-up");
       body.classList.add("scroll-down");
     } else if (
       currentScroll < lastScroll &&
       body.classList.contains("scroll-down")
     ) {
       body.classList.remove("scroll-down");
       body.classList.add("scroll-up");
     }
     lastScroll = currentScroll;
   });
 } )();


 // Jquery Javascript Code implement
 (function ($) {
	$(document).ready(function () {
    
  /*============ Testimonial ============*/ 
  var owl = $('.slide-one-item');
  $('.slide-one-item').owlCarousel({
    center: false,
    items: 1,
    loop: true,
    stagePadding: 0,
    margin: 0,
    smartSpeed: 1500,
    autoplay: true,
    dots: false,
    nav: false,
    navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
  });
  $('.thumbnail li').each(function (slide_index) {
    $(this).click(function (e) {
      owl.trigger('to.owl.carousel', [slide_index, 1500]);
      e.preventDefault();
    })
  })
  owl.on('changed.owl.carousel', function (event) {
    $('.thumbnail li').removeClass('active');
    $('.thumbnail li').eq(event.item.index - 2).addClass('active');
  })
  
	}); 
})(jQuery);


// progressbar
(function ($) {
	$(document).ready(function () {
    'use strict';
    $.fn.rProgressbar = function(options) {
        options = $.extend({ percentage: null, ShowProgressCount: true, duration: 1000, fillBackgroundColor: '#ed1c24', backgroundColor: '#EEEEEE', borderRadius: '0px', height: '10px', width: '100%' }, options);
        $.options = options;
        return this.each(function(index, el) {
            $(el).html('<div class="progressbar"><div class="proggress"></div><div class="percentCount"></div></div>');
            var lineProgressBarInit = function() {
                var progressFill = $(el).find('.proggress');
                var progressBar = $(el).find('.progressbar');
                progressFill.css({ backgroundColor: options.fillBackgroundColor, height: options.height, borderRadius: options.borderRadius });
                progressBar.css({ width: options.width, backgroundColor: options.backgroundColor, borderRadius: options.borderRadius });
                progressFill.animate({ width: options.percentage + "%" }, { step: function(x) { if (options.ShowProgressCount) { $(el).find(".percentCount").text(Math.round(x) + "%"); } }, duration: options.duration });
            }
            $(this).waypoint(lineProgressBarInit, { offset: '100%', triggerOnce: true });
        });
    }
		
	}); 
})(jQuery);


(function ($) {
	$(document).ready(function () {
    $('.html').rProgressbar({
      percentage: 80,
      fillBackgroundColor: '#ff014f'
  });


  $('.css').rProgressbar({
      percentage: 90,
      fillBackgroundColor: '#ff014f'
  });



  $('.php').rProgressbar({
      percentage: 75,
      fillBackgroundColor: '#ff014f'
  });



  $('.javascript').rProgressbar({
      percentage: 65,
      fillBackgroundColor: '#ff014f'
  });



  $('.jquery').rProgressbar({
      percentage: 95,
      fillBackgroundColor: '#ff014f',
  
  });

	}); 
})(jQuery);
(function ($) {
	$(document).ready(function () {
		$(".tab-content-two").hide();
		$(".tab-content-three").hide();
		$(".tab-content-four").hide();
    
    // for tab one
    $(".item-one").on("click",function(){

      $(".tab-content-one").show();
      $(".tab-content-two").hide();
      $(".tab-content-three").hide();
      $(".tab-content-four").hide();

      $(".item-one").addClass("active");
      $(".item-two").removeClass("active");
      $(".item-three").removeClass("active");
      $(".item-four").removeClass("active");
    })
        // for tab two
        $(".item-two").on("click",function(){

          $(".tab-content-one").hide();
          $(".tab-content-two").show();
          $(".tab-content-three").hide();
          $(".tab-content-four").hide();
    
          $(".item-one").removeClass("active");
          $(".item-two").addClass("active");
          $(".item-three").removeClass("active");
          $(".item-four").removeClass("active");
        })
         // for tab three
         $(".item-three").on("click",function(){
          
          $(".tab-content-one").hide();
          $(".tab-content-two").hide();
          $(".tab-content-three").show();
          $(".tab-content-four").hide();
    
          $(".item-one").removeClass("active");
          $(".item-two").removeClass("active");
          $(".item-three").addClass("active");
          $(".item-four").removeClass("active");
        })
         // for tab four
         $(".item-four").on("click",function(){
          
          $(".tab-content-one").hide();
          $(".tab-content-two").hide();
          $(".tab-content-three").hide();
          $(".tab-content-four").show();
    
          $(".item-one").removeClass("active");
          $(".item-two").removeClass("active");
          $(".item-three").removeClass("active");
          $(".item-four").addClass("active");
        })

		
	}); 
})(jQuery);
