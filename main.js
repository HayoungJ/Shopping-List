'use strict';

const addButton = document.querySelector('.add-button');
const list = document.querySelector('ul');
const input = document.querySelector('input[type="text"]');

const updateList = () => {
  const input = document.querySelector('input[type="text"]');
  const itemValue = input.value;

  // 3. 편의성 업데이트

  if (itemValue !== '') {
    const item = createItem(itemValue);
    list.prepend(item);
    input.value = '';
  }
};

const deleteItem = () => {
  const item = document.querySelector(`#item${key}`);
  item.remove();
};

const createItem = (itemValue) => {
  const item = document.createElement('li');
  const text = document.createElement('span');
  const deleteButton = document.createElement('button');

  text.innerText = itemValue;
  deleteButton.setAttribute('class', 'delete-button');
  deleteButton.innerHTML = `
    <i class="fas fa-trash"></i>
    <span class="a11y-hidden">삭제</span>
  `;

  item.append(text);
  item.append(deleteButton);

  return item;
};

addButton.addEventListener('click', updateList);
input.addEventListener('keyup', () => {
  if (event.keyCode === 13) {
    event.preventDefault();
    updateList();
  }
});
list.addEventListener('click', (event) => {
  const clickedButton = event.target.closest('.delete-button');

  if (clickedButton.className === 'delete-button') {
    const clickedItem = clickedButton.closest('li');
    clickedItem.remove();
  }
});
