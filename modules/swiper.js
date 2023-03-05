const swiper = new Swiper('.swiper1', {
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
    el: '.swiper-pagination1',
    type: 'bullets',
    clickable: true,
  },
});

const swiper2 = new Swiper('community-swiper', {
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
    el: '.swiper-pagination2',
    type: 'progressbar',
    clickable: true,
  },
});

export { swiper, swiper2 };