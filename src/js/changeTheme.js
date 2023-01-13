let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#switch');

if (darkMode !== 'enabled') {
  disabledDarkMode();
} else {
  enabledDarkMode();
}

function enabledDarkMode() {
  document.body.classList.add('dark-mode');
  localStorage.setItem('darkMode', 'enabled');
  darkModeToggle.checked = true;
}

function disabledDarkMode() {
  document.body.classList.remove('dark-mode');
  localStorage.setItem('darkMode', null);
  darkModeToggle.checked = false;
}

// disabledDarkMode();

darkModeToggle.addEventListener('change', () => {
  darkMode = localStorage.getItem('darkMode');
  if (darkMode !== 'enabled') {
    enabledDarkMode();
  } else {
    disabledDarkMode();
  }
});
