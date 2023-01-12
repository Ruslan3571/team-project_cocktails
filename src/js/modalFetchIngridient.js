import { searchCocktailById } from '../js/ApiServise';
import { searchIngredientsById } from '../js/ApiServise';
import { searchIngredientsByName } from '../js/ApiServise';

const ingridientContent = document.querySelector('.modal-ingridients__body');

console.log(searchIngredientsById(134));
console.log(searchCocktailById(11007));
console.log(searchIngredientsByName('Campari'));

// function getIngridientInfo(ingridients) {
//   const ingridientsInfo = [];
//   ingridients.forEach(ingridient => {
//     for (const key in ingridient) {
//       if (key.includes('strIngredient') && ingridient[key]) {
//         ingridientsInfo.push(ingridient[key]);
//       }
//     }
//   });
//   return ingridientsInfo;
// }

const createIngridientModalMarkup = function (ingridients) {
  //   console.log(ingridients);
  //   const ingridientsInfo = getIngridientInfo(ingridients);
  //   console.log('🚀 ~ ingridients', ingridientsInfo);
  const markup = ingridients
    .map(({ strAlcohol, strIngredient, strType, strDescription, strABV }) => {
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
                  <a class="ingredients-list__link" href="">
                ✶  Alcohol by volume: ${strABV}%
                  </a>
                </li>;
            </ul>`;
    })
    .join('');
  ingridientContent.insertAdjacentHTML('afterbegin', markup);
};

function showModalWithIngridientDetails(ingredientId) {
  return searchIngredientsById(ingredientId).then(({ ingredients }) =>
    createIngridientModalMarkup(ingredients)
  );
}
showModalWithIngridientDetails(134);
