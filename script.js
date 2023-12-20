const itemForm = document.getElementById('item-form')
const itemInput = document.getElementById('item-input')
const itemList = document.getElementById('item-list')
const clearBtn = document.getElementById('clear')
const itemFilter = document.getElementById('filter')

function addItem(e) {
  e.preventDefault()

  let newItem = itemInput.value

  // Validate input
  if (newItem === '') {
    alert('Please add an item')
    return
  }

  // Create list item
  const li = document.createElement('li')
  li.appendChild(document.createTextNode(newItem))

  const button = createButton('remove-item btn-link text-red')
  li.appendChild(button)

  // Add li to the DOM
  itemList.appendChild(li)

  checkUI()

  newItem = ''
}

function createButton(classes) {
  const button = document.createElement('button')
  button.className = classes
  const icon = createIcon('fa-solid fa-xmark')
  button.appendChild(icon)
  return button
}

function createIcon(classes) {
  const icon = document.createElement('i')
  icon.className = classes
  return icon
}

function removeItem(e) {
  if (e.target.parentElement.classList.contains('remove-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove()

      checkUI()
    }
  }
}

function clearItems() {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild)
  }

  checkUI()
}

function filterItems(e) {
  // Get all list items
  const items = itemList.querySelectorAll('li')
  // Get text and convert to lowercase
  const text = e.target.value.toLowerCase()

  // Loop through items
  items.forEach((item) => {
    const itemName = item.firstChild.textContent.toLowerCase()
    if (itemName.indexOf(text) !== -1) {
      item.style.display = 'flex'
    } else {
      item.style.display = 'none'
    }
  })
}

function checkUI() {
  const items = itemList.querySelectorAll('li')
  if (items.length === 0) {
    clearBtn.style.display = 'none'
    itemFilter.style.display = 'none'
  } else {
    clearBtn.style.display = 'block'
    itemFilter.style.display = 'block'
  }
}

// Event Listeners
itemForm.addEventListener('submit', addItem)
itemList.addEventListener('click', removeItem)
clearBtn.addEventListener('click', clearItems)
itemFilter.addEventListener('input', filterItems)

checkUI()
