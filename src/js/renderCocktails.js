import {
  searchCocktailRandom,
  searchCocktailById,
  // searchIngredientsById,
  searchIngredientsByName,
} from './ApiServise';

import {
  createModalMarkup,
  createModalMarkupTablet,
  openModal,
} from './modalFetchCocktail';

const list = document.querySelector('.cocktails__list-js');
window.addEventListener('load', renderCard);
let cocktail = [];
let cardOfCocktail = null;

async function renderCard() {
  if (window.matchMedia('(min-width: 1280px)').matches) {
    for (let i = 0; i < 9; i++) {
      const card = await searchCocktailRandom();
      cocktail.push(card.drinks);
      cardOfCocktail = cocktail.flat();
    }

    markupCard(cardOfCocktail);
    return;
  } else if (window.matchMedia('(min-width: 768px)').matches) {
    for (let i = 0; i < 6; i++) {
      const card = await searchCocktailRandom();
      cocktail.push(card.drinks);
      cardOfCocktail = cocktail.flat();
    }

    markupCard(cardOfCocktail);
    return;
  } else if (window.matchMedia('(min-width: 320px)').matches) {
    for (let i = 0; i < 3; i++) {
      const card = await searchCocktailRandom();
      cocktail.push(card.drinks);
      cardOfCocktail = cocktail.flat();
    }

    markupCard(cardOfCocktail);
    return;
  }
}
function markupCard(card) {
  const markup = card
    .map(({ strDrink, strDrinkThumb, idDrink }) => {
      return `<li class="cocktails__card">
            <div class="cocktails__thumb">
              <img
                class="cocktails__image"
                src="${strDrinkThumb}"
                alt="${strDrink}"
              />
            </div>
            <div class="cocktails__content-wrapper">
              <h3 class="cocktails__subtitle">${strDrink}</h3>
              <div class="cocktails__buttons-wrapper">
                <button data-modal-open class="cocktails__btn" type="button" id='${idDrink}'>Learn more</button>
                <button class="cocktails__btn cocktails__btn--white" type="button">
                  Add to
                  <svg class="heart-icon" width="18" height="18">
                    <use href="./images/icon.svg#heart"></use>
                  </svg>
                </button>
              </div>
            </div>
          </li>`;
    })
    .join('');
  return (list.innerHTML = markup);
}

const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  modal: document.querySelector('[data-modal]'),
};

(() => {
  const closeModalBtn = document.querySelector('[data-modal-close]');
  closeModalBtn.addEventListener('click', () => {
    refs.modal.classList.toggle('is-hidden');
  });
})();

(() => {
  const closeTabletModalBtn = document.querySelector(
    '[data-tablet-modal-close]'
  );
  closeTabletModalBtn.addEventListener('click', () => {
    refs.modal.classList.toggle('is-hidden');
  });
})();

list.addEventListener('click', openModal);
