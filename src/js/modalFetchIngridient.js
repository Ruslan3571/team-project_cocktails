// import { searchCocktailById } from '../js/ApiServise';
// import { searchIngredientsById } from '../js/ApiServise';
// import { searchIngredientsByName } from '../js/ApiServise';

// const ingridientContent = document.querySelector('.modal-ingridients__body');

// console.log(searchIngredientsById(134));
// console.log(searchCocktailById(11007));
// console.log(searchIngredientsByName('Campari'));

// const createIngridientModalMarkup = function (ingridients) {
//   //   console.log('🚀 ~ ingridients', ingridients);
//   //   function getIngridientInfo(ingridients) {
//   //     for (const ingredient of ingridients) {
//   //       if (ingredient[key] === null) {
//   //         return '';
//   //       }
//   //     }
//   //     return ingridients;
//   //   }
//   //   console.log(ingridients);
//   //   const ingridientsInfo = getIngridientInfo(ingridients);
//   //   console.log('🚀 ~ ingridients', ingridientsInfo);
//   const markup = ingridients

//     .map(({ strAlcohol, strIngredient, strType, strDescription, strABV }) => {
//       return `<h2 class="modal__header">${strIngredient}</h2>
//             <h3 class="alcohol-type">${strType}</h3>
//             <p class="alcohol-type-text">${strDescription}</p>
//             <ul class="descr-list">
//                 <li class="ingredients-list__item">
//                   <a class="ingredients-list__link" href="">
//                 ✶ Consist alcohol: ${strAlcohol}
//                   </a>
//                 </li>
//                  <li class="ingredients-list__item">
//                   <a class="ingredients-list__link" href="">
//                 ✶  Alcohol by volume: ${strABV}%
//                   </a>
//                 </li>;
//             </ul>`;
//     })
//     .join('');
//   ingridientContent.insertAdjacentHTML('afterbegin', markup);
// };

// function showModalWithIngridientDetails(ingredientId) {
//   return searchIngredientsById(ingredientId).then(({ ingredients }) =>
//     createIngridientModalMarkup(ingredients)
//   );
// }
// showModalWithIngridientDetails(134);
import { searchIngredientsByName } from '../js/ApiServise';

const modal = document.querySelector('[data-modal]');
// (() => {
//   const closeModalBtn = document.querySelector('[data-modal-close]');
//   closeModalBtn.addEventListener('click', () => {
//     modal.classList.toggle('is-hidden');
//   });
// })();

const ingredientContent = document.querySelector('.modal-ingridients__body');
const modalIngr = document.querySelector('[data-modal-set]');
const descrListTablet = document.querySelector('.modal-tablet__body');
const descrListMobile = document.querySelector('.modal-mobile__body');

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
  ingredientContent.insertAdjacentHTML('afterbegin', markup);
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
