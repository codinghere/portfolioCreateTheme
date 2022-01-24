// Vanilla JavaScript Code Implement
(function () {
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
})();


// Jquery Javascript Code implement


// progressbar


//Qualification Tabs
(function ($) {
  $(document).ready(function () {
    $(".tab-content-two").hide();
    $(".tab-content-three").hide();
    $(".tab-content-four").hide();

    // for tab one
    $(".item-one").on("click", function () {

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
    $(".item-two").on("click", function () {

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
    $(".item-three").on("click", function () {

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
    $(".item-four").on("click", function () {

      $(".tab-content-one").hide();
      $(".tab-content-two").hide();
      $(".tab-content-three").hide();
      $(".tab-content-four").show();

      $(".item-one").removeClass("active2");
      $(".item-two").removeClass("active2");
      $(".item-three").removeClass("active2");
      $(".item-four").addClass("active2");
    })

    /*============ Testimonial ============*/
    const nextIcon = '<img src="./right-arrow.svg" alt="right">';
const prevIcon = '<img src="./left-arrow.svg" alt="left" >';
    $('.owl-carousel').owlCarousel({
      loop: true,
      items: 1,
      // autoplay: true,
      dots: true,
      margin: 20,
      smartSpeed: 1000,
      nav: true,
      navText: [
        nextIcon,
        prevIcon
      ],

    })


  });
})(jQuery);


// (function ($) {
//   $(document).ready(function () {



//   });
// })(jQuery);