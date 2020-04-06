$(function() {

  /* Scroll top */

  $(window).scroll(function () {
    if($(this).scrollTop() > 700) {
      $('.top-btn').fadeIn();
    } 
    else {
      $('.top-btn').fadeOut();
    } 
  });

  $('.top-btn').click(function () {
    $('body, html').animate({
      scrollTop: 0
    }, 1000);
  });

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
    if(window.matchMedia('(max-width: 991px)').matches) {
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

/* Tabs product info */

$('.product-info__heading-toggle').click(function() {
  $('.product-info__heading-list').slideToggle();
});

var tabs = $('.product-info__tab');

$('.product-info__heading-link').click(function(e) {
  e.preventDefault();
  var tab = $(this).attr('data-attr');

  $('.product-info__heading-link').removeClass('product-info__heading-link_active');

  $(this).addClass('product-info__heading-link_active');

  tabs.each(function(index, elem) {
    $(elem).removeClass('product-info__tab_active');
  });
  tabs.each(function(index, elem) {
    if($(elem).hasClass(tab)) {
      $(elem).addClass('product-info__tab_active');
    }
  });
  if(window.matchMedia('(max-width: 768px)').matches){
    var html = $(this).html();
    $('.product-info__heading-toggle').html(html);
    $(this).parent().slideToggle();
  }
});

/* Dropdown */

$('.dropdown__toggle').click(function() {
  $(this).next().slideToggle();
});

$('.dropdown__item').click(function() {
  var html = $(this).html();
  $(this).parents('.dropdown__wrapper').children('.dropdown__toggle').html(html);
  $(this).parents('.dropdown__list').slideToggle();
});

/* Modal window */

var modalBtn = $('[data-attr=regist]');
var closeBtn = $('.modal-close');
var overlay = $('.overlay');

function modalOpen(className) {
  $('.' + className).addClass('modal_visible');
  overlay.addClass('overlay_visible');
}

function modalClose(className) {
  $('.' + className).removeClass('modal_visible');
  overlay.removeClass('overlay_visible');
}

modalBtn.click(function(e) {
  e.preventDefault();
  modalOpen('modal-regist');
});

closeBtn.click(function() {
  closeBtn.parents('.modal').removeClass('modal_visible');
  overlay.removeClass('overlay_visible');
});

overlay.click(function() {
  modalClose('modal');
});

$(document).keydown(function(e) {
  if(e.which === 27) {
    modalClose('modal');
  }
});

/* Burger catalog */

$('.catalog__menu-open').click(function() {
  $('.catalog__aside-list').slideToggle();
  $(this).children('i').toggleClass('d-none');
});

/* Mask */

$('input[type=tel]').focus(function() {
  $(this).mask('+7 (000) 000-00-00', {placeholder: '+7 (___) ___-__-__'});
});

/* Validate */

$('#regist-form').validate({
  errorClass: 'invalid',
  errorElement: 'div',
  errorPlacement: function(error, element) {
    error.prependTo(element.parent());
  },      
  rules: {
    name: {
      required: true,
      minlength: 2,
      maxlength: 15
    },
    tel: {
      required: true,
      minlength: 18
    },
    email: {
      required: true,
      email: true
    },
    password: {
      required: true,
      minlength: 5
    },
    polyci: {
      required: true
    }
  },
  messages: {
    name: {
      required: 'Это обязательное поле',
      minlength: 'Минимальная длина 2 символа',
      maxlength: 'Максимальная длина 15 символов'
    },
    tel: {
      required: 'Это обязательное поле',
      minlength: 'Введите номер плностью'
    },
    email: {
      required: 'Это обязательное поле',
      email: 'Некорректный email'
    },
    password: {
      required: 'Это обязательное поле',
      minlength: 'Минимальная длина 5 символов'
    },
    polyci: {
      required: 'Дайте согласие на обработку данных'
    }
  },
  submitHandler: function(form) {
    $.ajax({
      type: 'POST',
      url: 'send.php',
      data: $(form).serialize(),
      success: function() {
        modalClose('modal-regist');
        ym(61659232,'reachGoal','sendRegistForm');
      },
      complete: function() {
        $(form)[0].reset();
        modalOpen('modal-alert');
      }
    });
  }
});

  $('.header-top__link, .btn, .button-decorate__link, .categories__item, .rating__link, .services__item, .card__tag, .social__link, .google-play, .app-store, .footer__nav-link, .footer__copy-link, .pagination__link, .catalog__aside-link, .pagination-numeric__item, .header-bottom__favourite, .header-bottom__cart, .view-products__item, .table-cell a').click(function(e) {
    e.preventDefault();
  });

});