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

//dark mode with local storage

let html = document.querySelector("html");
let mode = document.getElementById("changeMode");

if(localStorage.theme === 'light'){
  html.classList.remove('dark');
}
else if(localStorage.theme === 'dark'){
  html.classList.add('dark');
}

mode.addEventListener("click", (event) => {
  html.classList.toggle("dark");
  if(!("theme" in localStorage) || localStorage.getItem("theme") === "light"){
    localStorage.setItem("theme", "dark");
  }
  else{
    localStorage.setItem("theme", "light");
  }
})