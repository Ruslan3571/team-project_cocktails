const searchListLetterEl = document.querySelector(".hero__search-list-letters")
const searchListNumberEl = document.querySelector(".hero__search-list-numbers")

export const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
export const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

export const markupLetter = alphabet.map((element) => `<li class="hero__search-item">${element}</li>`).join("")
searchListLetterEl.innerHTML = markupLetter

export const markupNumbers = numbers.map((element) => `<li class="hero__search-item">${element}</li>`).join("")
searchListNumberEl.innerHTML = markupNumbers
