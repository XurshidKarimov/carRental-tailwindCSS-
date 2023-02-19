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
let activeElementIndex = 0;

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
  tabListElements.slice(1).forEach(element => {
    element.classList.remove('tab-element-light-default');
    element.classList.add('tab-element-dark-default');
  })
}

mode.addEventListener("click", (event) => {
  html.classList.toggle("dark");
  if (!("theme" in localStorage) || localStorage.getItem("theme") === "light") {
    localStorage.setItem("theme", "dark");
    darkSVG.classList.add("hidden");
    lightSVG.classList.toggle("hidden");
    tabListElements.forEach((element, index) => {
      if(index !== activeElementIndex){
         tabListElements[index].classList.remove('tab-element-light-default');
         tabListElements[index].classList.add('tab-element-dark-default');
      }
    })
  }
  else {
    localStorage.setItem("theme", "light");
    lightSVG.classList.add("hidden");
    darkSVG.classList.remove("hidden");
    tabListElements.forEach((element, index) => {
      if(index !== activeElementIndex){
         tabListElements[index].classList.remove('tab-element-dark-default');
         tabListElements[index].classList.add('tab-element-light-default');
      }
    })
  }
})
//

//CHOOSE-CAR TABS

function removeAddClass(element, reverse = false){
  if(!reverse){
    element.classList.remove('tab-element-light-default', 'tab-element-dark-default');
    element.classList.add('tab-active-element');
  }
  else{
    element.classList.remove('tab-active-element');
    if(localStorage.theme === 'dark'){
      element.classList.add('tab-element-dark-default');
    }
    else{
      element.classList.add('tab-element-light-default');
    }
  }
}

tabListElements.forEach((element, index) => {
    element.setAttribute('key', index);
})

tabListElements.forEach((element, index, array) => {
  element.addEventListener("click", (event) => {
    //get key value from element
    let keyAttributeValue = +event.target.getAttribute('key');
    activeElementIndex = keyAttributeValue;
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