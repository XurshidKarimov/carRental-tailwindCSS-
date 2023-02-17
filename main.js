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
});

//dark mode with local storage

let html = document.querySelector("html");
let mode = document.getElementById("changeMode");
let darkSVG = mode.querySelector("#darkSVG");
let lightSVG = mode.querySelector("#lightSVG");

if (localStorage.theme === 'light') {
  html.classList.remove('dark');
  lightSVG.classList.add("hidden");
  darkSVG.classList.remove("hidden");
}
else if (localStorage.theme === 'dark') {
  html.classList.add('dark');
  darkSVG.classList.add("hidden");
  lightSVG.classList.toggle("hidden");
}

mode.addEventListener("click", (event) => {
  html.classList.toggle("dark");
  if (!("theme" in localStorage) || localStorage.getItem("theme") === "light") {
    localStorage.setItem("theme", "dark");
    darkSVG.classList.add("hidden");
    lightSVG.classList.toggle("hidden");
  }
  else {
    localStorage.setItem("theme", "light");
    lightSVG.classList.add("hidden");
    darkSVG.classList.remove("hidden");
  }
})
//