$(document).ready(function () {
  $(".autoplay").slick({
    prevArrow:
      '<button class="image-prev w-30 w-md-40 w-lg-50 h-25 h-lg-50 h-md-40 border-0 bg-bfp-primary position-absolute rotate180"></button>',
    nextArrow:
      '<button class="image-next w-30 w-md-40 w-lg-50 h-25 h-lg-50 h-md-40 border-0 bg-bfp-primary position-absolute "></button>',
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          mobileFirst: true,
        },
      },

      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          mobileFirst: true,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 650) {
      $(".nav").css("background-color", "gray");
    } else {
      $(".nav").css("background-color", "transparent");
    }
  });
});

$(document).ready(function () {
  $("a[href=#top]").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
});

$(document).ready(function () {
  $(".multi").slick({
    responsive: [
      {
        breakpoint: 9999,
        settings: "unslick",
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
          mobileFirst: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
          mobileFirst: true,
        },
      },
    ],
  });
});
