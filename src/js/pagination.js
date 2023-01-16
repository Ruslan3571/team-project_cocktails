// const refs = {
//   formEl: document.querySelector('.hero__search-list-wrapper'),
//   paginationContainer: document.querySelector('.pagination-container'),
//   paginationListContainer: document.querySelector('.pagination'),
// };

// refs.formEl.addEventListener('submit', handlerSubmitForm);

// async function handlerSubmitForm(e) {
//   refs.paginationContainer.innerHTML = '';
//   refs.paginationListContainer.innerHTML = '';
//   try {
//     const cocktailsData = data.drinks;
//     let currentPage = 1;
//     let rows;
//     if (window.innerWidth < 768) {
//       rows = 3;
//     } else if (window.innerWidth >= 768 && window.innerWidth < 1280) {
//       rows = 6;
//     } else if (window.innerWidth >= 1280) {
//       rows = 9;
//     }

//     function displayList(cocktailsArr, rowPerPage, page) {
//       const paginationContainer = document.querySelector(
//         '.pagination-container'
//       );
//       paginationContainer.innerHTML = '';
//       page--;
//       const start = rowPerPage * page;
//       const end = start + rowPerPage;
//       const paginatedData = cocktailsArr.slice(start, end);

//       paginatedData.forEach(el => {
//         const cocktailEl = document.createElement('div');
//         cocktailEl.innerHTML = el.strDrink;
//       });
//     }
//     function displayPagination(cocktailsArr, rowPerPage) {
//       const paginationEl = document.querySelector('.pagination');
//       const pagesCount = Math.ceil(cocktailsArr.length / rowPerPage);
//       const ulEl = document.createElement('ul');
//       ulEl.classList.add('pagination-list');

//       for (let i = 0; i < pagesCount; i++) {
//         const liEl = displayPaginationBtn(i + 1);
//         ulEl.appendChild(liEl);
//       }
//       paginationEl.appendChild(ulEl);
//     }
//     function displayPaginationBtn(page) {
//       const liEl = document.createElement('li');
//       const spanEl = document.createElement('span');
//       liEl.classList.add('pagination-btn');
//       liEl.appendChild(spanEl);
//       spanEl.textContent = page;

//       if (currentPage === page) liEl.classList.add('pagination-btn-active');

//       liEl.addEventListener('click', () => {
//         currentPage = page;
//         displayList(cocktailsData, rows, currentPage);

//         const currentLi = document.querySelector('li.pagination-btn-active');
//         currentLi.classList.remove('pagination-btn-active');

//         liEl.classList.add('pagination-btn-active');
//       });
//       return liEl;
//     }

//     displayList(cocktailsData, rows, currentPage);
//     if (cocktailsData.length > rows) {
//       displayPagination(cocktailsData, rows);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// ТЕСТ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// async function getData() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await response.json();
//   return data;
// }

// async function main() {
//   const postsData = await getData();
//   let currentPage = 1;
//   let rows = 10;

//   function displayList(arrData, rowPerPage, page) {
//     const postsEl = document.querySelector('.posts');
//     postsEl.innerHTML = '';
//     page--;

//     const start = rowPerPage * page;
//     const end = start + rowPerPage;
//     const paginatedData = arrData.slice(start, end);

//     paginatedData.forEach(el => {
//       const postEl = document.createElement('div');
//       postEl.classList.add('post');
//       postEl.innerText = `${el.title}`;
//       postsEl.appendChild(postEl);
//     });
//   }

//   function displayPagination(arrData, rowPerPage) {
//     const paginationEl = document.querySelector('.pagination');
//     const pagesCount = Math.ceil(arrData.length / rowPerPage);
//     const ulEl = document.createElement('ul');
//     ulEl.classList.add('pagination__list');

//     for (let i = 0; i < pagesCount; i++) {
//       const liEl = displayPaginationBtn(i + 1);
//       ulEl.appendChild(liEl);
//     }
//     paginationEl.appendChild(ulEl);
//   }

//   function displayPaginationBtn(page) {
//     const liEl = document.createElement('li');
//     liEl.classList.add('pagination__item');
//     liEl.innerText = page;

//     if (currentPage == page) liEl.classList.add('pagination__item--active');

//     liEl.addEventListener('click', () => {
//       currentPage = page;
//       displayList(postsData, rows, currentPage);

//       let currentItemLi = document.querySelector('li.pagination__item--active');
//       currentItemLi.classList.remove('pagination__item--active');

//       liEl.classList.add('pagination__item--active');
//     });

//     return liEl;
//   }

//   displayList(postsData, rows, currentPage);
//   displayPagination(postsData, rows);
// }

// main();
