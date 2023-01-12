const dropdown = document.querySelector('.dropdown');
const input = document.querySelector('.search-input');
const listOfOptions = document.querySelectorAll('.option');
const container = document.querySelector('.hero__container-mobile');

const toggleDropdown = (event) => {
  event.stopPropagation();
  dropdown.classList.toggle('opened');
};

const selectOption = (event) => {
  input.value = event.currentTarget.textContent;
};

const closeDropdownFromOutside = () => {
  if (dropdown.classList.contains('opened')) {
    dropdown.classList.remove('opened');
  }
};

container.addEventListener('click', closeDropdownFromOutside);

listOfOptions.forEach((option) => {
  option.addEventListener('click', selectOption);
});

dropdown.addEventListener('click', toggleDropdown);