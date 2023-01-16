import { searchCocktailByFirstLetter } from './ApiServise';

const heroSection = document.querySelector('.hero');
const cocktailsSection = document.querySelector('.cocktails');
const list = document.querySelector('.cocktails__list-js');
const errorSection = document.querySelector('.error');
const searchList = document.querySelector('.hero__search-list-wrapper');

let cocktail = [];
let cardOfCocktail = null;

// search function for tablet and desktop

searchList.addEventListener('click', handleSearchCocktailsByFirstLetter);

async function handleSearchCocktailsByFirstLetter(event) {
  try {
    let searchQuery = event.target.dataset.value;
    const data = await searchCocktailByFirstLetter(searchQuery);
    console.log(data.drinks);
    cocktailsSection.classList.remove('is-hidden');
    errorSection.classList.add('is-hidden');

    if (window.matchMedia('(min-width: 1280px)').matches) {
      for (let i = 0; i < 9; i++) {
        cocktail = data.drinks;
        cardOfCocktail = cocktail.flat();
      }
      list.innerHTML = '';
      markupCard(cardOfCocktail);
      return;
    } else if (window.matchMedia('(min-width: 768px)').matches) {
      for (let i = 0; i < 6; i++) {
        cocktail = data.drinks;
        cardOfCocktail = cocktail.flat();
      }
      list.innerHTML = '';
      markupCard(cardOfCocktail);
      return;
    }
  } catch (error) {
    cocktailsSection.classList.add('is-hidden');
    errorSection.classList.remove('is-hidden');
  }
}

// search function for mobile
const searchListMob = document.querySelector('.options');

searchListMob.addEventListener('click', handleSearchCocktailsByFirstLetterMob);

async function handleSearchCocktailsByFirstLetterMob(event) {
  try {
    let searchQuery = event.target.dataset.value;
    const data = await searchCocktailByFirstLetter(searchQuery);

    cocktailsSection.classList.remove('is-hidden');
    errorSection.classList.add('is-hidden');

    if (window.matchMedia('(min-width: 320px)').matches) {
      for (let i = 0; i < 3; i++) {
        cocktail = data.drinks;
        cardOfCocktail = cocktail.flat();
      }
      list.innerHTML = '';
      markupCard(cardOfCocktail);
      return;
    }
  } catch (error) {
    cocktailsSection.classList.add('is-hidden');
    errorSection.classList.remove('is-hidden');
  }
}

// markup function
function markupCard(data) {
  const markup = data
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
