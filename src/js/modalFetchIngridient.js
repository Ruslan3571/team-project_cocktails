import { searchCocktailById } from '../js/ApiServise';
import { searchIngredientsById } from '../js/ApiServise';
import { searchIngredientsByName } from '../js/ApiServise';

const modal = document.querySelector('[data-modal]');
(() => {
  const closeModalBtn = document.querySelector('[data-modal-close]');
  closeModalBtn.addEventListener('click', () => {
    modal.classList.toggle('is-hidden');
  });
})();

<<<<<<< Updated upstream
const ingredientContent = document.querySelector('.modal-ingridients__body');
const modalIngr = document.querySelector('[data-modal-set]');
const descrListTablet = document.querySelector('.modal-tablet__body');
const descrListMobile = document.querySelector('.modal-mobile__body');
=======
console.log(searchIngredientsById(096));
console.log(searchCocktailById(11007));
console.log(searchIngredientsByName('Campari'));
>>>>>>> Stashed changes

function createingredientModalMarkup(ingredients) {
  const markup = ingredients
    .map(
      ({
        strAlcohol,
        strIngredient,
        strType,
        strDescription,
        strABV,
        idIngredient,
      }) => {
        return `<h2 class="modal__header">${strIngredient}</h2>
            <h3 class="alcohol-type">${strType}</h3>
            <p class="alcohol-type-text">${strDescription}</p>
            <ul class="descr-list">
                <li class="ingredients-list__item">
                  <a class="ingredients-list__link" href="">
                ✶ Consist alcohol: ${strAlcohol}
                  </a>
                </li>
                 <li class="ingredients-list__item">
                  <a class="ingredients-list__link" id="${idIngredient}" href="">
                ✶  Alcohol by volume: ${strABV}%
                  </a>
                </li>;
            </ul>`;
      }
    )
    .join('');
<<<<<<< Updated upstream
  ingredientContent.insertAdjacentHTML('afterbegin', markup);
=======
  ingridientContent.insertAdjacentHTML('afterbegin', markup);
};

export function showModalWithIngridientDetails(ingredientId) {
  return searchIngredientsById(ingredientId).then(({ ingredients }) =>
    createIngridientModalMarkup(ingredients)
  );
>>>>>>> Stashed changes
}
export function openIngredientModal(event) {
  console.log(event.target.dataset);
  event.preventDefault();
  const value = event.target.textContent;
  console.log('🚀 ~ value', value);
  if (event.target.dataset.modalUp === '') {
    searchIngredientsByName(value.trim()).then(({ ingredients }) =>
      createingredientModalMarkup(ingredients)
    );
    modalIngr.classList.remove('is-hidden');
  }
  if (event.target.dataset.modalSet === '') {
    searchIngredientsByName(value.trim()).then(({ ingredients }) =>
      createingredientModalMarkup(ingredients)
    );
    modalIngr.classList.remove('is-hidden');
  }
}

(() => {
  const closeIngrModalBtn = document.querySelector('[data-ingr-modal-close]');
  closeIngrModalBtn.addEventListener('click', () => {
    modalIngr.classList.toggle('is-hidden');
  });
})();
descrListTablet.addEventListener('click', openIngredientModal);
descrListMobile.addEventListener('click', openIngredientModal);
