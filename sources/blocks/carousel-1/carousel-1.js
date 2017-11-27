$(function () {
  var $carouselSlick = $('.carousel-1__inner');

  $carouselSlick.each(function () {
    $(this).slick({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 300,
      fade: false,
      cssEase: 'linear',
      slidesToShow: 1,
      slidesToScroll: 1,
      mobileFirst: true,
      prevArrow: '<button type="button" class="slick-prev"><svg class="icon-svg-right-arrow-angle" role="img">' +
      '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-svg-right-arrow-angle"></use>' +
      '</svg></button>',
      nextArrow: '<button type="button" class="slick-next"><svg class="icon-svg-right-arrow-angle" role="img">' +
      '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-svg-right-arrow-angle"></use>' +
      '</svg></button>',
      autoplay: false,
      autoplaySpeed: 5000,
      zIndex: 1,
      lazyLoad: 'ondemand',
      pauseOnFocus: false,
      pauseOnHover: false,
      adaptiveHeight: false,
      appendDots: $(this).closest('.carousel-1').find('.carousel-1__dots'),
      responsive: [
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3
          }
        }
        ,
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 4
          }
        }
      ]
    }).on('lazyLoaded', function (event, slick, image, imageSource) {
      $(image).closest('.carousel-1__item').removeClass('loading');
    });
  });
});