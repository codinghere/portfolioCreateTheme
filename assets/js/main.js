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

//Qualification Tabs
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

      $(".item-one").addClass("active2");
      $(".item-two").removeClass("active2");
      $(".item-three").removeClass("active2");
      $(".item-four").removeClass("active2");
    })
        // for tab two
        $(".item-two").on("click",function(){

          $(".tab-content-one").hide();
          $(".tab-content-two").show();
          $(".tab-content-three").hide();
          $(".tab-content-four").hide();
    
          $(".item-one").removeClass("active2");
          $(".item-two").addClass("active2");
          $(".item-three").removeClass("active2");
          $(".item-four").removeClass("active2");
        })
         // for tab three
         $(".item-three").on("click",function(){
          
          $(".tab-content-one").hide();
          $(".tab-content-two").hide();
          $(".tab-content-three").show();
          $(".tab-content-four").hide();
    
          $(".item-one").removeClass("active2");
          $(".item-two").removeClass("active2");
          $(".item-three").addClass("active2");
          $(".item-four").removeClass("active2");
        })
         // for tab four
         $(".item-four").on("click",function(){
          
          $(".tab-content-one").hide();
          $(".tab-content-two").hide();
          $(".tab-content-three").hide();
          $(".tab-content-four").show();
    
          $(".item-one").removeClass("active2");
          $(".item-two").removeClass("active2");
          $(".item-three").removeClass("active2");
          $(".item-four").addClass("active2");
        })

		
	}); 
})(jQuery);


(function ($) {
	$(document).ready(function () {
    
  /*============ Testimonial ============*/ 
  $('.owl-carousel').owlCarousel({
    loop:true,
    items:1,
    autoplay: true,
    dots: true,
    margin: 20,
    smartSpeed: 1000,
    nav: true

})
  
	}); 
})(jQuery);