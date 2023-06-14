let checkbox = document.getElementById('checkbox');
let ballEl = document.querySelector('.ball');
let modal = document.querySelector('.modal');
let modalIngredient = document.querySelector('.modal-ingridient');
let menu = document.querySelector('.header__menu');

let footerLinks = document.querySelectorAll('.sosial_links__icon');
let devLogo = document.querySelector('.dev__logo');
let footerTitle = document.querySelectorAll('.footer-title');
let btnDrop = document.querySelectorAll('.dropdown__content__btn');

if (localStorage.getItem('darkMode') === 'true') {
  checkbox.checked = true;
  ballEl.classList.add('dark');
  document.body.classList.add('dark');
  modal.classList.add('dark');
  modalIngredient.classList.add('dark');
  menu.classList.add('dark');

}

function handleDarkMode() {
  if (checkbox.checked) {
    document.body.classList.add('dark');
    ballEl.classList.add('dark');
    modal.classList.add('dark');
    modalIngredient.classList.add('dark');
    menu.classList.add('dark');
    localStorage.setItem('darkMode', 'true');
  } else {
    modal.classList.remove('dark');
    modalIngredient.classList.remove('dark');
    ballEl.classList.remove('dark');
    menu.classList.remove('dark');
    document.body.classList.remove('dark');
    localStorage.setItem('darkMode', 'false');
  }
}



checkbox.addEventListener('change', handleDarkMode);
