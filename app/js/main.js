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

  /* Card slider */

  $('.fotorama').fotorama({
    width: '100%',
    ratio: 1,
    nav: 'thumbs',
    navwidth: '100%',
    thumbwidth: 85,
    thumbheight: 85,
    thumbborderwidth: 1,
    fit: 'scaledown',
    thumbfit: 'scaledown',
    thumbmargin: 30.5
  });

  /* Tabs product-card */

  tabs();

  $('.card-product__delivery-top > input[type=radio]').change(tabs);

  function tabs() {
    var tab = $('.card-product__delivery-top > input[type=radio]:checked').attr('data-tab');

    $('.tab').each(function(index, elem) {
      if($(elem).hasClass(tab)) {
        $(elem).removeClass('d-none');
      }
      else {
        $(elem).addClass('d-none');
      }
    });
  }
});

/* Likes slider */

/* Slider services */

$('.likes__list').slick({
  appendArrows: '.likes__slider-arrows',
  prevArrow: '.likes__slider-arrow_prev',
  nextArrow: '.likes__slider-arrow_next',
  slidesToShow: 4,
  infinite: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
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

$('.product-info__heading-toggle').click(function() {
  $('.product-info__heading-list').slideToggle();
});

$('.product-info__heading-link').click(function(e) {
  e.preventDefault();
  if(window.matchMedia('(max-width: 768px)').matches){
    var html = $(this).html();
    $('.product-info__heading-toggle').html(html);
    $(this).parent().slideToggle();
  }
});

$('.dropdown__toggle').click(function() {
  $(this).next().slideToggle();
});

$('.dropdown__item').click(function() {
  var html = $(this).html();
  $(this).parents('.dropdown__wrapper').children('.dropdown__toggle').html(html);
  $(this).parents('.dropdown__list').slideToggle();
});

$('[data=regist]').click(function(e) {
  e.preventDefault();
  openModal();
});

$('.modal-close, .overlay').click(function() {
  closeModal();
});

function openModal() {
  $('.overlay').addClass('overlay_visible animated');
  $('.modal-regist').addClass('modal_visible animated');
}

function closeModal() {
  $('.overlay').removeClass('overlay_visible animated');
  $('.modal-regist').removeClass('modal_visible animated');
}

$('.catalog__menu-open').click(function() {
  $('.catalog__aside-list').slideToggle();
  $(this).children('i').toggleClass('d-none');
});