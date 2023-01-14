const refsCockList = document.querySelector('.cocktails__list-js');

refsCockList.addEventListener('click', onButtonClick);

let names = [];

addStartNames();

localStorage.setItem('names', JSON.stringify(names));

function onButtonClick(e) {
  if (e.target.dataset.action === 'add') {
    if (e.target.textContent === 'remove') {
      removeFromLocal(e);
    } else if (e.target.textContent === 'Add to') {
      addToLocal(e);
    }
  }
}

function addToLocal(e) {
  e.target.classList.add('added');
  e.target.classList.remove('remove');
  e.target.textContent = 'remove';

  addStartNames();
  names.push(e.target.dataset.name);
  localStorage.setItem('names', JSON.stringify(names));
}

function removeFromLocal(e) {
  e.target.classList.add('remove');
  e.target.classList.remove('added');

  e.target.textContent = 'Add to';

  addStartNames();
  deleteName(e.target.dataset.name);
  localStorage.setItem('names', JSON.stringify(names));
}

function addStartNames() {
  const saveName = JSON.parse(localStorage.getItem('names'));

  if (saveName) {
    names = [...saveName];
  }
}

function deleteName(name) {
  let nameIndex = names.indexOf(name);

  if (nameIndex !== -1) {
    names.splice(nameIndex, 1);
  }
}
