const ref = {
  btn: document.querySelector('.nav-btn'),
  nav: document.querySelector('.nav-wrapper'),
  header: document.querySelector('.header'),
};

export function openMobileMenu({ target }) {
  if (target.nodeName != 'svg') return;
  ref.nav.classList.add('is-open');
  ref.header.style.overflow = '';
  disableScroll();
  target.firstElementChild.style.display = 'none';
  target.lastElementChild.style.display = 'block';
}

export function closeMobileMenu({ target }) {
  if (target.nodeName != 'svg') return;
  ref.nav.classList.remove('is-open');
  target.firstElementChild.style.display = 'block';
  target.lastElementChild.style.display = 'none';
  ref.header.style.overflow = 'hidden';
  enableScroll();
}

export function disableScroll() {
  document.body.style.overflow = 'hidden';
}
export function enableScroll() {
  document.body.style.overflow = 'visible';
}

ref.btn.addEventListener('click', ({ target }) =>
  ref.nav.classList.contains('is-open')
    ? closeMobileMenu({ target })
    : openMobileMenu({ target })
);
