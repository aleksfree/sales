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
});