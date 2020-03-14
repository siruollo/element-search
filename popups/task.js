'use strict';

const modalMain = document.querySelector('#modal_main');
modalMain.classList.add('modal_active');

const modalCloses = Array.from(document.querySelectorAll('div.modal__close'));
modalCloses.forEach((item) => {
  item.onclick = () => {
    item.closest('.modal').classList.remove('modal_active');
  };
});

const modalSuccess = document.getElementById('modal_success');
const showSuccess = modalMain.querySelector('.show-success');
showSuccess.onclick = () => {
  modalMain.classList.remove('modal_active');
  modalSuccess.classList.add('modal_active');
};