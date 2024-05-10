'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', function () {
    console.log('button clicked');
    modal.classList.remove('hidden'); // i can also modal.style.display = 'block'; to make the element appear
    overlay.classList.remove('hidden'); // i can also modal.style.display = 'block'; to make the element appear
  });
}

const closeModal = function () {
  modal.classList.add('hidden'); // i can also modal.style.display = 'none'; to make the element disappear
  overlay.classList.add('hidden'); // i can also modal.style.display = 'none'; to make the element disappear
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//global event thus didn't specify which class or ID after document. keydown means as the key is pressed, keypress will continuously fire as long as key is pressed, keyup is firing when I lift my finger off the key
document.addEventListener('keydown', function (e) {
  // any function variable is getting the value from the action 'keydown'. e is an object with a bunch of properties

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
