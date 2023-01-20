import { searchCocktailByName } from './ApiServise';

const refsFavoriteCock = document.querySelector('.cocktails__list');
const refsFavoriteTitle = document.querySelector('.favorite__title');
const refsFavoriteSubtitle = document.querySelector('.favorite__subtitle');

let savedCocktails = JSON.parse(localStorage.getItem('names'));

renderFavoriteCock();

function fetchLocalStorage() {
  const response = [];
  savedCocktails.map(cocktails => {
    response.push(searchCocktailByName(cocktails));
  });
  return response;
}

async function renderFavoriteCock() {
  if (savedCocktails.length) {
    const cocktails = await Promise.all([...fetchLocalStorage()]);

    refsFavoriteCock.innerHTML = markupCard(cocktails);

    return;
  }
  // refsFavoriteSubtitle.classList.remove('hidden');
}

function markupCard(card) {
  const markup = card
    .map(e => {
      let classEl = 'remove';
      let btnValue = 'Add to';
      if (
        JSON.parse(localStorage.getItem('names')).includes(e.drinks[0].strDrink)
      ) {
        classEl = 'added';
        btnValue = 'remove';
      }


      // refsFavoriteTitle.classList.remove('hidden');

      return `<li class="cocktails__card">
            <div class="cocktails__thumb">
              <img
                class="cocktails__image"
                src="${e.drinks[0].strDrinkThumb}"
                alt="${e.drinks[0].strDrink}"
              />
            </div>
            <div class="cocktails__content-wrapper">
              <h3 class="cocktails__subtitle">${e.drinks[0].strDrink}</h3>
              <div class="cocktails__buttons-wrapper">
                <button class="cocktails__btn" type="button">Learn more</button>
                <button class="cocktails__btn cocktails__btn--white ${classEl}" type="button" data-action="add" data-id="${e.drinks[0].idDrink}" data-name="${e.drinks[0].strDrink}">${btnValue}</button>
              </div>
            </div>
          </li>`;
    })
    .join('');
  return markup;
}
