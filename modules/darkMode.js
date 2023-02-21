import { removeAddClass } from "./functions.js";

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
      if (index !== activeElementIndex) {
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
      if (index !== activeElementIndex) {
        tabListElements[index].classList.remove('tab-element-dark-default');
        tabListElements[index].classList.add('tab-element-light-default');
      }
    })
  }
})

//choose-car tab-menu reaction in darkMode 

tabListElements.forEach((element, index) => {
    element.setAttribute('key', index);
  })
  
  tabListElements.forEach((element, index, array) => {
    element.addEventListener("click", (event) => {
      //get key value from element
      let keyAttributeValue = +event.target.getAttribute('key');
      activeElementIndex = keyAttributeValue;
      array.forEach((elementPassive, indexPassive) => {
        if (indexPassive !== keyAttributeValue) {
          removeAddClass(tabListElements[indexPassive], true);
        }
        else {
          removeAddClass(tabListElements[keyAttributeValue]);
        }
      })
    })
  })

export * as darkMode from './darkMode.js';