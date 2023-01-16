import axios from 'axios';
import {
  searchCocktailByName,
  searchCocktailByFirstLetter,
  searchCocktailByIngredient,
  searchCocktailById,
  searchCocktailRandom,
  searchIngredientsByName,
  searchIngredientsById,
} from './js/ApiServise';
import heroSearch from './js/hero-search';
import heroSearchMobile from './js/hero-search-mobile';
import heroDropdown from './js/hero-dropdown';
import mobileMenu from './js/mobileMenu';
import changeTheme from './js/changeTheme';
import renderCocktails from './js/renderCocktails';
import modalCloseOpen from './js/modal-close-open';
import modalFetchCocktail from './js/modalFetchCocktail';
import searchByFirstLetter from './js/search-by-first-letter'
import { markupCard } from './js/search-by-first-letter';
import { closeMobileMenu,enableScroll } from './js/mobileMenu';
const formHeaderEl= document.querySelector('.header__search');
const searhFiedEl = document.querySelector('.search-text');
const list = document.querySelector('.cocktails__list-js');
const formTabletEl= document.querySelector('#form-tablet');
formHeaderEl.addEventListener('submit', searchCoctails)
formTabletEl.addEventListener('submit', searchCoctailsInTab);
 
 const searchFieldTabletEl =document.querySelector('#input-tablet')
 async function searchCoctails(ev){
  ev.preventDefault();

  let coctailName = searhFiedEl.value.trim();
  // closeMobileMenu();
  try {
   
    if (window.matchMedia('(min-width: 1280px)').matches) {
      for (let i = 0; i < 9; i++) {
        const data = await searchCocktailByFirstLetter(coctailName);
        cocktail = data.drinks;
        cardOfCocktail = cocktail.flat();
      }
      list.innerHTML = '';
      markupCard(cardOfCocktail);
      return;
    } else if (window.matchMedia('(min-width: 768px)').matches) {
      for (let i = 0; i < 6; i++) {
        const data = await searchCocktailByFirstLetter(coctailName);
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

async function searchCoctailsInTab (ev){
  ev.preventDefault();
 
  let coctailName = searchFieldTabletEl.value.trim();
 
  try {
   
    if (window.matchMedia('(min-width: 1280px)').matches) {
      for (let i = 0; i < 9; i++) {
        const data = await searchCocktailByFirstLetter(coctailName);
        cocktail = data.drinks;
        cardOfCocktail = cocktail.flat();
        
      }
      list.innerHTML = '';
      markupCard(cardOfCocktail);
      return;
    } else if (window.matchMedia('(min-width: 768px)').matches) {
      for (let i = 0; i < 6; i++) {
        const data = await searchCocktailByFirstLetter(coctailName);
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