const apiUrl = 'https://jsonplaceholder.typicode.com/todos'; // api show

async function fetchItems() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

function displayItems(items) {
  const itemList = document.getElementById('itemList');
  itemList.innerHTML = ''; // Clear the list before displaying items

  items.forEach(item => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `${item.title} <button onclick="deleteItem(${item.id})">Delete</button>`;
    itemList.appendChild(listItem);
  });
}

function deleteItem(itemId) {
  // Implement the deletion logic here
  console.log('Item deleted:', itemId);
}

// Load and display items
fetchItems()
  .then(items => displayItems(items))
  .catch(error => console.error('Error:', error));