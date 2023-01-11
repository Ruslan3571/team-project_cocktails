import axios from 'axios';

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/';

//  <!-------------------------- ❗️❗️❗️  Пошук коктелів ❗️❗️❗️------------------------------------->

export async function searchCocktailByName(searchParameter) {
  try {
    const url = `${BASE_URL}/search.php?s=${searchParameter}`;
    const response = await axios(url);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function searchCocktailByFirstLetter(searchParameter) {
  try {
    const url = `${BASE_URL}/search.php?f=${searchParameter}`;
    const response = await axios(url);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function searchCocktailByIngredient(searchParameter) {
  try {
    const url = `${BASE_URL}/filter.php?i=${searchParameter}`;
    const response = await axios(url);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function searchCocktailById(searchParameter) {
  try {
    const url = `${BASE_URL}/lookup.php?i=${searchParameter}`;
    const response = await axios(url);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function searchCocktailRandom() {
  try {
    const url = `${BASE_URL}/random.php`;
    const response = await axios(url);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

//  <!-------------------------- ❗️❗️❗️  Пошук інгредієнтів ❗️❗️❗️------------------------------------->

export async function searchIngredientsByName(searchParameter) {
  try {
    const url = `${BASE_URL}/search.php?i=${searchParameter}`;
    const response = await axios(url);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function searchIngredientsById(searchParameter) {
  try {
    const url = `${BASE_URL}/lookup.php?iid=${searchParameter}`;
    const response = await axios(url);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}


// searchIngredientsById(552)
// searchCocktailRandom();