import { searchCocktailByFirstLetter } from './ApiServise';
import { openModal } from './renderCocktails';

const list = document.querySelector('.cocktails__list-js');

let cocktail = [];
let cardOfCocktail = null;

// search function for tablet and desktop
const searchList = document.querySelector('.hero__search-list-wrapper');

searchList.addEventListener('click', handleSearchCocktailsByFirstLetter);

async function handleSearchCocktailsByFirstLetter(event) {
  try {
    let searchQuery = event.target.dataset.value;

    if (window.matchMedia('(min-width: 1280px)').matches) {
      for (let i = 0; i < 9; i++) {
        const data = await searchCocktailByFirstLetter(searchQuery);
        cocktail = data.drinks;
        cardOfCocktail = cocktail.flat();
      }
      list.innerHTML = '';
      markupCard(cardOfCocktail);
      return;
    } else if (window.matchMedia('(min-width: 768px)').matches) {
      for (let i = 0; i < 6; i++) {
        const data = await searchCocktailByFirstLetter(searchQuery);
        cocktail = data.drinks;
        cardOfCocktail = cocktail.flat();
      }
      list.innerHTML = '';
      markupCard(cardOfCocktail);
      return;
    }
  } catch (error) {
    console.log(error);
  }
}

// search function for mobile
const searchListMob = document.querySelector('.options');

searchListMob.addEventListener('click', handleSearchCocktailsByFirstLetterMob);

async function handleSearchCocktailsByFirstLetterMob(event) {
  try {
    let searchQuery = event.target.dataset.value;

    if (window.matchMedia('(min-width: 320px)').matches) {
      for (let i = 0; i < 3; i++) {
        const data = await searchCocktailByFirstLetter(searchQuery);
        cocktail = data.drinks;
        cardOfCocktail = cocktail.flat();
      }
      list.innerHTML = '';
      markupCard(cardOfCocktail);
      return;
    }
  } catch (error) {
    console.log(error);
  }
}

// markup function
function markupCard(data) {
  const markup = data
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
                <button data-modal-open id='${idDrink} class="cocktails__btn" type="button">Learn more</button>
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
list.addEventListener('click', openModal);
