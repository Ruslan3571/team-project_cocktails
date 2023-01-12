const ref = {
  btn: document.querySelector('.nav-btn'),
  nav: document.querySelector('.nav-wrapper'),
};

export function openMobileMenu({ target }) {
  ref.nav.classList.add('is-open');
  disableScroll();
  target.firstElementChild.style.display = 'none';
  target.lastElementChild.style.display = '';
}

export function closeMobileMenu({ target }) {
  ref.nav.classList.remove('is-open');
  target.firstElementChild.style.display = '';
  target.lastElementChild.style.display = 'none';
}

ref.btn.addEventListener('click', openMobileMenu);
// ref.btn.addEventListener('click',closeMobileMenu)
export function disableScroll() {
  document.body.style.overflow = 'hidden';
}
export function enableScroll() {
  document.body.style.overflow = '';
}

// const mobileMenu = () => {
//   const refs = {
//     openMenuBtn: document.querySelector('[data-menu-open]'),
//     closeMenuBtn: document.querySelector('[data-menu-close]'),
//     menu: document.querySelector('[data-menu]'),
//   };

//   refs.openMenuBtn.addEventListener('click', toggleModal);
//   refs.closeMenuBtn.addEventListener('click', toggleModal);
  
//   function toggleModal() {
//     refs.menu.classList.toggle('is-open');
//   }
// };

// mobileMenu();
