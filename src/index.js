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
<<<<<<< Updated upstream
import addFavorite from './js/addFavorite';
import changeTheme from './js/changeTheme';
=======

import heroSearch from './js/hero-search';
import mobileMenu from './js/mobileMenu';
import changeTheme from './js/changeTheme';
import {
  showModalWithCocktailDetailsTablet,
  showModalWithCocktailDetailsMobile,
} from './js/modalFetchCocktail';

import { showModalWithIngridientDetails } from './js/modalFetchIngridient';

import heroSearch from './js/hero-search';
import heroSearchMobile from './js/hero-search-mobile';
>>>>>>> Stashed changes
import heroDropdown from './js/hero-dropdown';
import heroSearchMobile from './js/hero-search-mobile';
import heroSearch from './js/hero-search';
import mobileMenu from './js/mobileMenu';
// import modalCloseOpen from './js/modal-close-open';
import { openModal, getIngridient } from './js/modalFetchCocktail';
import { openIngredientModal } from './js/modalFetchIngridient';
// import modalFetchIngridient from './js/modalFetchIngridient';
import pagination from './js/pagination';
import renderCocktails from './js/renderCocktails';
<<<<<<< Updated upstream
import renderFavoriteCock from './js/renderFavoriteCock';
import searchByFirstLetter from './js/search-by-first-letter';
=======
>>>>>>> Stashed changes
