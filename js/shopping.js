const listElement = document.getElementById('shopping');
const newItem = document.getElementById('newItem');
const addBtn = document.getElementById('addBtn');
const clearBtn = document.getElementById('clearBtn');

function addItem(item) {
  const itemElement = document.createElement('li');v
  itemElement.textContent = item;
  listElement.appendChild(itemElement);
};
function clearList() {
  while(listElement.firstChild) {
    listElement.removeChild(listElement.firstChild);
  }
}
function renderList(list) {
  list.forEach(addItem);
}
addBtn.addEventListener('click', ev => {
  addItem(newItem.value);
});