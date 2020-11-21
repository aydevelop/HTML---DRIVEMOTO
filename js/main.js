$(function () {
  $('.banner-section__slider').slick({
    dots: true,
    prevArrow: `<bottom class="banner-section__slider-btn banner-section__slider-btnprev">
     <img src="images/arrow-left.svg" >  
    </bottom>`,
    nextArrow: `<bottom class="banner-section__slider-btn banner-section__slider-btnnext">
     <img src="images/arrow-right.svg" >  
    </bottom>`,
  })

  $('.filter-style').styler()

  $('.js-range-slider').ionRangeSlider({
    grid: false,
  })

  $('#rateYo').rateYo({
    spacing: '7px',
    ratedFill: '#1C62CD',
    normalFill: '#C4C4C4',
  })

  $('.product-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: false,
    prevArrow: `<bottom class="banner-section__slider-btn banner-section__slider-btnprev banner-section__slider-btnprev--product">
     <img src="images/arrow4.svg" >
    </bottom>`,
    nextArrow: `<bottom class="banner-section__slider-btn banner-section__slider-btnnext banner-section__slider-btnnext--product">
     <img src="images/arrow3.svg" >
    </bottom>`,
  })
})

$('.search__tabs-item').on('click', function (e) {
  e.preventDefault()

  $('.search__tabs-item').removeClass('search__tabs-item--active')
  $('.search__content-item').removeClass('search__content-item--active')

  $(this).addClass('search__tabs-item--active')
  let id = $(this).attr('href')
  $(id).addClass('search__content-item--active')
})

$('.product-item__favorite').on('click', function (e) {
  e.preventDefault()

  $('.product-item__favorite').removeClass('product-item__favorite--active')
  $(this).addClass('product-item__favorite--active')
})

$('.tabs .tab').on('click', function (e) {
  let _this = $(this)
  $(_this).addClass('tab--active').siblings().removeClass('tab--active')

  $(_this)
    .parent()
    .parent()
    .find('.tabs-container .tabs-content')
    .css('display', 'none')

  let id = $(this).attr('href')
  $(_this).parent().parent().find(id).css('display', 'block')

  return false
})

$('.filter__item-drop').on('click', function () {
  $(this).toggleClass('filter__item-drop--active')
  $(this).next().slideToggle('200')
})

$('.menu__btn').on('click', function () {
  $('.menu-mobile__list').toggleClass('menu-mobile__list--active')
})
