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
let tabList = document.querySelector('.choose-car__type-tab');
let tabListElements = Array.from(tabList.children);

removeAddClass(tabListElements[0]);

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

//CHOOSE-CAR TABS

function removeAddClass(element, reverse = false){
  if(!reverse){
    element.classList.remove('bg-white', 'text-black');
    element.classList.add('tab-active-element');
  }
  else{
    element.classList.remove('tab-active-element');
    element.classList.add('bg-white', 'text-black');
  }
}

tabListElements.forEach((element, index) => {
    element.setAttribute('key', index);
})

tabListElements.forEach((element, index, array) => {
  element.addEventListener("click", (event) => {
    //get key value from element
    let keyAttributeValue = +event.target.getAttribute('key');
    array.forEach((elementPassive, indexPassive) => {
      if(indexPassive !== keyAttributeValue){
        removeAddClass(tabListElements[indexPassive], true); 
      }
      else{
        removeAddClass(tabListElements[keyAttributeValue]);
      }
    })
  })
})