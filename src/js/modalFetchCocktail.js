import { searchCocktailById } from '../js/ApiServise';

const modalContentMobile = document.querySelector('.modal-mobile__body');
const modalContentTablet = document.querySelector('.modal-tablet__body');
function getIngridient(drinks) {
  const ingridients = [];
  drinks.forEach(drink => {
    for (const key in drink) {
      if (key.includes('strIngredient') && drink[key]) {
        ingridients.push(drink[key]);
      }
    }
  });
  return ingridients;
}

const createModalMarkup = function (drinks) {
  console.log(drinks);
  const ingridients = getIngridient(drinks);
  console.log('🚀 ~ ingridients', ingridients);
  const markup = drinks
    .map(({ strDrink, strInstructions, strDrinkThumb }) => {
      return `<h2 class="modal__header">${strDrink}</h2>
            <h3 class="instruction">Instractions:</h3>
            <p class="instruction-text">${strInstructions}</p>
            <img src="${strDrinkThumb}" alt="${strDrink}">
            <h3 class="ingredients">INGREDIENTS</h3>
            <p class="per-coctail__text">Per cocktail</p>
            <ul class="ingredients-list">
            ${ingridients.map(ingridient => {
              return `<li class="ingredients-list__item">
                  <a class="ingredients-list__link" href="">
                    ✶ ${ingridient}
                  </a>
                </li>`;
            })}
                  
            </ul>`;
    })
    .join('');
  console.log('🚀 ~ markup', markup);
  modalContentMobile.insertAdjacentHTML('afterbegin', markup);
};

searchCocktailById(11007).then(({ drinks }) => createModalMarkup(drinks));

const createModalMarkupTablet = function (drinks) {
  console.log(drinks);
  const ingridients = getIngridient(drinks);
  console.log('🚀 ~ ingridients', ingridients);
  const markup = drinks
    .map(({ strDrink, strInstructions, strDrinkThumb }) => {
      return `<div class="tablet-wrapper">
                    <img src="${strDrinkThumb}" alt="${strDrink}" width='288' height='320'>
                    <div class="tablet-wrapper__text">
                        <h2 class="modal__header">${strDrink}</h2>
                        <h3 class="ingredients">INGREDIENTS</h3>
                        <p class="per-coctail__text">Per cocktail</p>
                        <ul class="ingredients-list">
                            ${ingridients.map(ingridient => {
                              return `<li class="ingredients-list__item">
                  <a class="ingredients-list__link" href="">
                    ✶ ${ingridient} </a></li>`;
                            })}
                </ul>
            </div>
                </div>
                <h3 class="instruction">Instractions:</h3>
                <p class="instruction-text">${strInstructions}</p>`;
    })
    .join('');
  modalContentTablet.insertAdjacentHTML('afterbegin', markup);
};

searchCocktailById(11007).then(({ drinks }) => createModalMarkupTablet(drinks));
