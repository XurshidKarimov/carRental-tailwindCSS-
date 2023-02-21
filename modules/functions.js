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

export {removeAddClass};