$(function () {
  var $carouselSlick = $('.carousel__inner');

  $carouselSlick.slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    //mobileFirst: true,
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
    responsive: [
      /*{
          breakpoint: 768,
          settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
          }
      }*/
    ]
  }).on('lazyLoaded', function (event, slick, image, imageSource) {
    $(image).closest('.carousel__item').removeClass('loading');
  });
});