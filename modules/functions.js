//RENDERING FUNCTION
let cardListItemTemplate = document.querySelector(".choose-car__item-template").content;
let cardList = document.querySelector(".choose-car__card-list");
let listFragment = new DocumentFragment;

function render(data) {
  console.log(data);
  for (let x = 0; x < data.length; x++) {
      let li = cardListItemTemplate.cloneNode(true).querySelector(".choose-card__card-item");;

      li.querySelector(".choose-card__card-item__car-name").innerText = data[x]["name"];
      li.querySelector(".choose-card__card-item__car-type").innerText = data[x]["type"];
      li.querySelector(".choose-card__card-item__img").src = data[x]["src"];
      li.querySelector(".choose-card__card-item__bottom-txt.user").innerText = data[x]["info"]["seats"];
      li.querySelector(".choose-card__card-item__bottom-txt.gear").innerText = data[x]["info"]["gear"];
      li.querySelector(".choose-card__card-item__bottom-txt.user-file").innerText = data[x]["info"]["age"];
      li.querySelector(".choose-card__card-item__bottom-txt.petrol").innerText = data[x]["info"]["petrol"];

      listFragment.append(li);
  }

  cardList.appendChild(listFragment);
}
//FUNCTION END

// IN CHOOSE-CAR SECTION TO TABMENU-BTN CLASS REMOVE AND ADD FUNCTION  
function removeAddClass(element, reverse = false) {
  if (!reverse) {
    element.classList.remove('tab-element-light-default', 'tab-element-dark-default');
    element.classList.add('tab-active-element');
  }
  else {
    element.classList.remove('tab-active-element');
    if (localStorage.theme === 'dark') {
      element.classList.add('tab-element-dark-default');
    }
    else {
      element.classList.add('tab-element-light-default');
    }
  }
}
//FUNCTION END

//DATA GET FUNCTION
async function getData(type = "compact") {
  try {
      let response = await fetch("./data.json");
      if (!response.ok) {
          throw new Error(``, {
              cause: {
                  response,
              }
          })
      }
      else {
          let result = await response.json();
          result = result[type];
          render(result);
      }
  }
  catch (error) {
      console.log(`Error ${error.cause.response.status}`);
  }
}
//FUNCTION END

export { removeAddClass, render, getData, cardList };