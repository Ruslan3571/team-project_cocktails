// function toggleModal(event) {
//   // console.log(event.target.dataset);
//   if (event.target.dataset.modalOpen === '') {
//     console.log(createModalMarkupTablet);
//     searchCocktailById(event.target.id).then(({ drinks }) =>
//       createModalMarkupTablet(drinks)
//     );
//     refs.modal.classList.toggle('is-hidden');
//   }
// }

<<<<<<< Updated upstream
// list.addEventListener('click', toggleModal);

// const modal = document.querySelector('.popup'); /* 1 окно*/
// const trigger =
//   document.querySelector('.user-info__button'); /* кнопка открытия 1 окна */
// const closeButton =
//   document.querySelectorAll('.popup__close'); /* кнопка закрытия */
=======
  // refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

// const modal = document.querySelector('.modal__body'); /* 1 окно*/
// const trigger =
//   document.querySelector('.cocktails__btn'); /* кнопка открытия 1 окна */
// const closeButton =
//   document.querySelectorAll('[data-modal-close]'); /* кнопка закрытия */
>>>>>>> Stashed changes
// const modalProfile = document.querySelector('.popup_profile'); /* 2 окно*/
// const profile = document.querySelector(
//   '.user-info__edit_button'
// ); /* кнопка открытия 2 окна */
// /* Открытие модального окна */
// function toggleModal(event) {
//   if (event.target.matches('.user-info__button')) {
//     modal.classList.add('popup_is-opened');
//   } else if (event.target.matches('.user-info__edit_button')) {
//     modalProfile.classList.add('popup_is-opened');
//   } else if (event.target.matches('.popup .popup__close')) {
//     modal.classList.remove('popup_is-opened');
//   } else if (event.target.matches('.popup_profile .popup__close')) {
//     modalProfile.classList.remove('popup_is-opened');
//   }
// }

// profile.addEventListener('click', toggleModal);
// trigger.addEventListener('click', toggleModal);
// closeButton.forEach(btn => btn.addEventListener('click', toggleModal));
