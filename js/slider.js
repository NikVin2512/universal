const swiperInfo = new Swiper('.info-swiper', {
  // Optional parameters
  loop: true,
  // slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay: {
    delay: 3000,
  },
});
const swiperSlider = new Swiper('.slider-swiper', {
  // Optional parameters
  loop: true,
  // slidesPerView: 1,
  
});
const swiperArticle = new Swiper('.slider-article', {
  // Optional parameters
  loop: true,
  // slidesPerView: 1,
  navigation: {
    nextEl: '.article-slider__button--next',
    prevEl: '.article-slider__button--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
