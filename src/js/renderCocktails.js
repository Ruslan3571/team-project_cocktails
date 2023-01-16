import { searchCocktailRandom, searchIngredientsByName } from './ApiServise';
import { openModal } from './modalFetchCocktail';

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
      let classEl = 'remove';
      let btnValue = 'Add to';
      if (JSON.parse(localStorage.getItem('names')).includes(strDrink)) {
        classEl = 'added';
        btnValue = 'remove';
      }

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
                <button data-modal-open id="${idDrink}" class="cocktails__btn" type="button" data-modal-open >Learn more</button>
                <button class="cocktails__btn cocktails__btn--white ${classEl}" type="button" data-action="add" data-id="${idDrink}" data-name="${strDrink}">${btnValue}</button>
              </div>
            </div>
          </li>`;
    })
    .join('');
  return (list.innerHTML = markup);
}

list.addEventListener('click', openModal);

// const refs = {
//   openModalBtn: document.querySelector('[data-modal-open]'),
//   modal: document.querySelector('[data-modal]'),
// };
// (() => {
//   const closeModalBtn = document.querySelector('[data-modal-close]');
//   closeModalBtn.addEventListener('click', () => {
//     refs.modal.classList.toggle('is-hidden');
//   });
// })();
// (() => {
//   const closeTabletModalBtn = document.querySelector(
//     '[data-tablet-modal-close]'
//   );
//   closeTabletModalBtn.addEventListener('click', () => {
//     refs.modal.classList.toggle('is-hidden');
//   });
// })();
// list.addEventListener('click', openModal);
