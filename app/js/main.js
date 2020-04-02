$(function() {

  /* Slider in offer */
  $('.offer__inner').slick({
    appendArrows: '.offer__slider-arrows',
    prevArrow: '.offer__slider-arrow_prev',
    nextArrow: '.offer__slider-arrow_next',
    fade: true,
    infinite: false,
    asNavFor: $(this).find('.offer__slider'),
  });

  $('.offer__slider').slick({
    fade: true,
    infinite: false,
    arrows: false,
    asNavFor: $(this).find('.offer__inner')
  });

  $('.search').click(function() {
    $('.header__search').slideToggle();
  });

  $('.header-top__menu-open').click(function() {
    $('.header-top__list').slideToggle();
    $(this > 'i').toggleClass('d-none');
  });

  $('.header-bottom__menu-open').click(function() {
    $('.menu').slideToggle();
    $(this > 'i').toggleClass('d-none');
  });

  $('.menu__item').click(function() {
    if(window.matchMedia('(max-width: 767px)').matches) {
      $(this).children('.menu__sub').slideToggle();
    }
  });

  $('.card__overlay-btn').click(function(e) {
    e.preventDefault();
    $(this).children('i').toggleClass('d-none');
  });

  $('.card__title').each(function(index, elem) {
    var html = $(elem).html();
    if(html.length > 25) {
      html = html.substr(0, 22) + '...';
      $(elem).html(html);
    }
  });

  /* Timer */

  function createTimer() {
    var date = new Date(2020, 3, 10, 0, 0, 0);
    var now = new Date();
    var diff = date - now;

    if(diff > 0) {
      var days = Math.floor(diff / (3600 * 24 * 1000));
      var hours = Math.floor(diff / (3600 * 1000)) % 24;
      var min = Math.floor(diff / (60 * 1000)) % 60;
      var sec = Math.floor(diff / 1000) % 60;
  
      $('.timer__days').html((days < 10) ? '0' + days : days);
      $('.timer__hours').html((hours < 10) ? '0' + hours : hours);
      $('.timer__min').html((min < 10) ? '0' + min : min);
      $('.timer__sec').html((sec < 10) ? '0' + sec : sec);
  
      setTimeout(createTimer, 1000);
    }
  }

  createTimer();

  /* Slider banners */

  $('.banners__slider').slick({
    arrows: false,
    pauseOnHover: false,
    autoplay: true,
    autoplaySpeed: 5000,
    draggable: false
  });

  /* Slider services */

  $('.services__list').slick({
    appendArrows: '.services__slider-arrows',
    prevArrow: '.services__slider-arrow_prev',
    nextArrow: '.services__slider-arrow_next',
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
});