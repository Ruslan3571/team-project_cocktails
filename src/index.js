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
import searchByFirstLetter from './js/search-by-first-letter';
import {
  createModalMarkup,
  createModalMarkupTablet,
  openModal,
  getIngridient,
} from './js/modalFetchCocktail';
import { openIngredientModal } from './js/modalFetchIngridient';
