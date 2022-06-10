'use strict';
const inpBtn = document.querySelector('.input__btn');
const inpText = document.querySelector('.input__form');
const formInput = document.querySelector('.form');
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.btn--close-modal');
//*Modal
const closeModal = function () {
  modal.classList.add('hidden');
};
const openModal = function () {
  modal.classList.remove('hidden');
};
btnCloseModal.addEventListener('click', closeModal);
//*Function, that find two min values
const searchTwoMinValue = function (arrOfDigits) {
  let arr = arrOfDigits.split(/,\s*/).map((el) => parseFloat(el));
  if (arr.length === 1) return arr;
  let firstMin = arr[0];
  let secondMin = arr[1];
  if (arr[0] > arr[1]) {
    firstMin = arr[1];
    secondMin = arr[0];
  }
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] < firstMin) {
      secondMin = firstMin;
      firstMin = arr[i];
    } else if (arr[i] < secondMin) {
      secondMin = arr[i];
    }
  }
  return [firstMin, secondMin];
};

const showError = function (inputString) {
  openModal();
  const result = document.querySelector('.result');
  const modalText = document.querySelector('.modal__text');
  const modalHeader = document.querySelector('.modal__header');
  if (result) result.remove();
  if (modalText) modalText.remove();
  const text = `Введите числа через запятую. Вы ввели <span class='modal__span'>${
    inputString === '' ? `ничего` : inputString
  }</span>`;

  modalHeader.insertAdjacentHTML(
    'afterend',
    `<div class='modal__text'>${text}</div>`
  );
  document.querySelector('.modal__span').style.color = 'red';
};
const showResult = function (inputString) {
  const values = searchTwoMinValue(inputString);
  const result = document.querySelector('.result');
  if (result) result.remove();
  const text = `Минимальные значения массива: ${values.join(' и ')}`;
  formInput.insertAdjacentHTML(
    'afterend',
    `<div class='result'><div class='result__values'>${text}</div>
  <div class='result__result'>Сумма минимальных значений: ${values.reduce(
    (sum, el) => sum + el,
    0
  )}</div></div>`
  );
};
const init = function () {
  const answer = inpText.value;
  if (answer === '') showError(answer);
  else if (answer.search(/[^0-9, -]/) !== -1) showError(answer);
  else showResult(answer);
};
//if we click on button
inpBtn.addEventListener('click', init);
//if we press on 'enter'
document.addEventListener('keydown', function (e) {
  if (e.key == 'Enter') {
    init();
  }
});
