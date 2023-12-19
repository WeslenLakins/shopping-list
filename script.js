// Store all the DOM elements in variables for easy access
const itemForm = document.getElementById('item-form')
const itemInput = document.getElementById('item-input')
const itemList = document.getElementById('.item-list')

function addItem(e) {
  // Prevent actual submit
  e.preventDefualt()

  // Get input value
  const newItem = itemInput.value

  // Validate input value
  if (newItem === '') {
    alert('Please add an item')
    return
  }

  // Create new list item
  const li = document.createElement('li')
  li.appendChild(document.createTextNode(newItem))

  // Create delete button
  const deleteBtn = createButton('remove item btn-link text-red')
  li.appendChild(deleteBtn)
  itemList.appendChild(li)

  // Clear input
  itemInput.value = ''
}

function createButton(classes) {
  const btn = document.createElement('button')
  btn.className = classes
  const icon = createIcon('fa-solid fa-xmark')
  createButton.appendChild(icon)
  return btn
}

function createIcon(classes) {
  const icon = document.createElement('i')
  icon.className = classes
  return icon
}

// Event Listeners
itemForm.addEventListener('submit', addItem)
