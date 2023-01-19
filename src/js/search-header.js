import { searchCocktailByName } from './ApiServise';

const cocktailsSection = document.querySelector('.cocktails');
const list = document.querySelector('.cocktails__list-js');
const errorSection = document.querySelector('.error');
const searchList = document.querySelector('.header__search');
const searhFiedEl = document.querySelector('.search-text');
const ulEl = document.querySelector('.pagination__list');

let cocktail = [];
let page = 1;
let limit = 3;

//  <!-------------------------- ❗️❗️❗️  search function  ❗️❗️❗️------------------------------------->

searchList.addEventListener('submit', handlesearchCocktailByName);

async function handlesearchCocktailByName(event) {
  try {
    event.preventDefault();
    let searchQuery = searhFiedEl.value;
    searhFiedEl.value = '';
    const data = await searchCocktailByName(searchQuery);

    cocktailsSection.classList.remove('is-hidden');
    errorSection.classList.add('is-hidden');

    if (window.matchMedia('(min-width: 1280px)').matches) {
      for (let i = 0; i < 9; i++) {
        cocktail = data.drinks;
        cardOfCocktail = cocktail.flat();
      }

      list.innerHTML = '';
      //  <!-------------------------- ❗️  pagination function call ------------------------------------->
      ulEl.innerHTML = '';
      limit = 9;
      pagination();
      const groupOfCocktails = getGroupOfCocktails();
      markupCard(groupOfCocktails);

      //  <!--------------------------   pagination function end ❗️------------------------------------->
      return;
    } else if (window.matchMedia('(min-width: 768px)').matches) {
      for (let i = 0; i < 6; i++) {
        cocktail = data.drinks;
        cardOfCocktail = cocktail.flat();
      }
      list.innerHTML = '';

      ulEl.innerHTML = '';
      limit = 6;
      pagination();
      const groupOfCocktails = getGroupOfCocktails();
      markupCard(groupOfCocktails);

      return;
    }
  } catch (error) {
    cocktailsSection.classList.add('is-hidden');
    errorSection.classList.remove('is-hidden');
  }
}

//  <!-------------------------- ❗️❗️❗️  markup function ❗️❗️❗️------------------------------------->
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

//  <!-------------------------- ❗️❗️❗️  pagination function ❗️❗️❗️------------------------------------->
function getGroupOfCocktails() {
  const groupOfCocktails = [...cocktail].splice((page - 1) * limit, limit);
  return groupOfCocktails;
}

function pagination() {
  let totalPages = Math.ceil(cocktail.length / limit);
  for (let i = 0; i < totalPages; i++) {
    if (totalPages === 1) {
      return;
    }
    const liEl = `<li class="pagination__item">${i + 1}</li>`;
    ulEl.insertAdjacentHTML(`beforeend`, liEl);
  }
  ulEl.firstElementChild.classList.add('pagination__item--active');
  ulEl.addEventListener('click', changePage);
}

function changePage(event) {
  if (event.target.tagName === `LI`) {
    page = event.target.textContent;
    const previousLi = ulEl.querySelector('.pagination__item--active');

    if (previousLi) {
      previousLi.classList.remove('pagination__item--active');
      event.target.classList.add('pagination__item--active');
    }

    const groupOfCocktails = getGroupOfCocktails();
    markupCard(groupOfCocktails);
  }
}
