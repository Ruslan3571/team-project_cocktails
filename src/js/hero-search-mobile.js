const optionsListEl = document.querySelector('.options')

const arr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const markupOptionLi= arr.map((element) => `<li class="option" data-value="${element}">${element}</li>`).join("")
optionsListEl.innerHTML = markupOptionLi

