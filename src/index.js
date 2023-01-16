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
import addFavorite from './js/addFavorite';
import changeTheme from './js/changeTheme';

import heroSearch from './js/hero-search';
import mobileMenu from './js/mobileMenu';
import changeTheme from './js/changeTheme';

import heroSearch from './js/hero-search';
import heroSearchMobile from './js/hero-search-mobile';
import heroDropdown from './js/hero-dropdown';
import mobileMenu from './js/mobileMenu';
import { openModal, getIngridient } from './js/modalFetchCocktail';
import { openIngredientModal } from './js/modalFetchIngridient';
import pagination from './js/pagination';
import renderCocktails from './js/renderCocktails';
import renderFavoriteCock from './js/renderFavoriteCock';
import searchByFirstLetter from './js/search-by-first-letter';
