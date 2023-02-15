const swiper = new Swiper('.swiper', {
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
      mousewheel: {
        invert: true,
      },
});