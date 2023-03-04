const swiper = new Swiper('.swiper-container-1', {
  speed: 400,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    disabledClass: "swiper-button-disabled",
  },
  loop: true,
  autoplay: {
    delay: 2500,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

const swiper2 = new Swiper('.swiper-container-2', {
  speed: 400,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    disabledClass: "swiper-button-disabled",
  },
  loop: true,
  autoplay: {
    delay: 2500,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

export { swiper, swiper2 };