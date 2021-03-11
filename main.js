'use strict';

const addButton = document.querySelector('.add-button');
const list = document.querySelector('ul');
const input = document.querySelector('input[type="text"]');
let key = 0;

const updateList = () => {
  const input = document.querySelector('input[type="text"]');
  const itemValue = input.value;

  if (itemValue !== '') {
    let item = document.createElement('li');
    item.setAttribute('id', `item${key}`);
    item.innerHTML = `
      <span>${itemValue}</span>
      <button class="delete-button" onClick='deleteItem(${key})'>
        <i class="fas fa-trash"></i>
        <span class="a11y-hidden">삭제</span>
      </button>
    `;
    list.prepend(item);
    key++;
    input.value = '';
  }
};

const deleteItem = (key) => {
  const item = document.querySelector(`#item${key}`);
  item.remove();
};

addButton.addEventListener('click', updateList);
input.addEventListener('keyup', () => {
  if (event.keyCode === 13) {
    event.preventDefault();
    updateList();
  }
});
