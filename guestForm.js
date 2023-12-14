import { createGuestList } from './data/guestdata.js'
//const createGuestList = require('./data/guestdata.js')

const guestList = createGuestList()
function guestForm() {
  //provide initial guests data list created from GuestManagement class
  let guests = guestList

  // 1. register event for searching and adding
  function registerEventHandling() {
    document
      .getElementById('search-input')
      .addEventListener('keyup', searchGuest)
    document.getElementById('add-guest-btn').addEventListener('click', addGuest)
  }

  // 2. Function to display one guest in the display area
  function displayGuest(guestItem) {
    const firstname = guestItem.firstname
    const lastname = guestItem.lastname

    const guestElement = document.createElement('div')

    const spanNameElement = document.createElement('span')
    spanNameElement.textContent = `${firstname} ${lastname}`

    const spanRemoveElement = document.createElement('span')
    spanRemoveElement.classList.add('remove-icon')
    spanRemoveElement.setAttribute('id', `${firstname}-${lastname}`)
    spanRemoveElement.style.cursor = 'pointer'
    spanRemoveElement.style.color = 'red'
    spanRemoveElement.textContent = '[X]'
    spanRemoveElement.addEventListener('click', removeGuest)

    guestElement.appendChild(spanNameElement)
    guestElement.appendChild(spanRemoveElement)

    document.getElementById('display-area').appendChild(guestElement)
    /*
    const newDiv = document.createElement('div')
    const newSpan = document.createElement('span')
    const newSpan1 = document.createElement('span')

    const parent = document.getElementById('display-area')

    const createDiv = parent.appendChild(newDiv)
    const n1 = createDiv.appendChild(newSpan)
    const removeButton = createDiv.appendChild(newSpan1)
    console.log(createDiv)
    n1.innerHTML = guestItem.firstname + ' ' + guestItem.lastname
    removeButton.setAttribute('class',)
    
    
    
    
    */
  }

  // 3. Function to display all existing guests in the display area
  function displayGuests(guestResult) {
    Array.from(document.getElementById('display-area').children || []).forEach(
      (child) => child.remove()
    )

    guestResult.forEach((result) => {
      displayGuest(result)
    })
    /*const display = document.getElementById('display-area')
    display.testContent = '' //clear text
    display.innerHTML = ''//clear tag

    guestResult.forEach((guestItem) => displayGuest(guestItem))
    
    */ 
  }

  // 4. Function to search and display matching guests
  function searchGuest(event) {
    const result = guests.searchGuests(event.target.value)
    displayGuests(result)
  }

  // 5. Function to add a new guest
  function addGuest() {
    const firstnameInput = document.getElementById('firstname-input')
    const lastnameInput = document.getElementById('lastname-input')
    const result = guests.addNewGuest(firstnameInput.value, lastnameInput.value)

    displayGuest(result[result.length - 1])

    firstnameInput.value = ''
    lastnameInput.value = ''
  }

  // 6. Function to remove a guest
  function removeGuest(event) {
    const name = event.target.getAttribute('id').split('-')
    guests.removeGuest({
      firstname: name[0],
      lastname: name[1],
    })
    event.target.parentElement.remove()
  }

  return {
    registerEventHandling,
    displayGuests,
    searchGuest,
    addGuest,
    removeGuest,
  }
}
// module.exports = guestForm
export { guestForm }
const { registerEventHandling, displayGuests } = guestForm()
registerEventHandling()
displayGuests(guestList.getAllGuests())

//---------------------------------------------------------------------------------------------

import { createGuestList } from './data/guestdata.js'
// const createGuestList = require('./data/guestdata.js')
const guestList = createGuestList()
function guestForm() {
  //provide initial guests data list created from GuestManagement class
  let guests = guestList
  // 1. register event for searching and adding
  function registerEventHandling() {
    document
      .getElementById('search-input')
      .addEventListener('keyup', searchGuest)

    document.getElementById('add-guest-btn').addEventListener('click', addGuest)
  }

  // 2. Function to display one guest in the display area
  function displayGuest(guestItem) {
    const newDiv = document.createElement('div')
    const newSpan = document.createElement('span')
    const newSpan1 = document.createElement('span')

    const parent = document.getElementById('display-area')

    const createDiv = parent.appendChild(newDiv)
    const n1 = createDiv.appendChild(newSpan)
    const removeButton = createDiv.appendChild(newSpan1)

    n1.innerHTML = guestItem.firstname + ' ' + guestItem.lastname
    removeButton.setAttribute('class', 'remove-icon')
    removeButton.setAttribute(
      'id',
      `${guestItem.firstname}-${guestItem.lastname}`
    )
    removeButton.setAttribute('style', 'cursor:pointer;color:red')
    removeButton.textContent = '[X]'
    removeButton.addEventListener('click', removeGuest)
  }

  // 3. Function to display all existing guests in the display area
  function displayGuests(guestResult) {
    const display = document.getElementById('display-area')
    display.textContent = '' //clear text
    // display.innerHTML = '' //clear tag

    guestResult.forEach((guestItem) => displayGuest(guestItem))
    // guestResult.forEach(displayGuest)
  }

  // 4. Function to search and display matching guests
  function searchGuest(event) {
    // console.log(event.target.value)
    const match = guests.searchGuests(event.target.value)
    displayGuests(match)
  }

  // 5. Function to add a new guest
  function addGuest() {
    const firstnameValue = document.getElementById('firstname-input')
    const lastnameValue = document.getElementById('lastname-input')

    guests.addNewGuest(firstnameValue.value, lastnameValue.value) //array

    const newAdding = {
      //แปลงเป็น obj
      firstname: firstnameValue.value,
      lastname: lastnameValue.value
    }
    displayGuest(newAdding)

    //after adding
    firstnameValue.value = ''
    lastnameValue.value = ''
  }

  // 6. Function to remove a guest
  function removeGuest(event) {
    const name = event.target.id
    const nplit = name.split('-')
    const deleteThis = { firstname: nplit[0], lastname: nplit[1] }
    guests.removeGuest(deleteThis)

    const log = event.target.parentElement
    log.remove()
  }

  return {
    registerEventHandling,
    displayGuests,
    searchGuest,
    addGuest,
    removeGuest
  }
}

//----------------------------------------------------------------------------------------------------

// 1. register event for searching and adding
function registerEventHandling() {
  document.getElementById("search-input").addEventListener("keyup", searchGuest)
  document.getElementById("add-guest-btn").addEventListener("click", addGuest)
}

// 2. Function to display one guest in the display area
function displayGuest(guestItem) { 
  let dispArea = document.getElementById('display-area')
  let newDiv = document.createElement('div')

  let span1 = document.createElement("span")
  span1.textContent = ${guestItem.firstname} ${guestItem.lastname}

  let span2 = document.createElement("span")
  span2.setAttribute("class", "remove-icon")
  span2.setAttribute("id", `${guestItem.firstname}-${guestItem.lastname}`)
  span2.style.cursor = "pointer"
  span2.style.color = "red"
  span2.textContent = '[X]'
  span2.addEventListener("click", removeGuest)

  newDiv.appendChild(span1)
  newDiv.appendChild(span2)

  dispArea.appendChild(newDiv)
}

// 3. Function to display all existing guests in the display area
function displayGuests(guestResult) { 
  document.getElementById('display-area').innerHTML = ''
  guestResult.forEach(element => {
    displayGuest(element)
  });
}

// 4. Function to search and display matching guests
function searchGuest(event) { 
  let inputText = document.getElementById('search-input').value
  displayGuests(guests.searchGuests(inputText))
}

// 5. Function to add a new guest
function addGuest() {
  let firstname = document.getElementById("firstname-input").value
  let lastname = document.getElementById("lastname-input").value
  guests.addNewGuest(firstname, lastname)
  let newGuest = guests.getAllGuests().find(guest => (guest.firstname === firstname && guest.lastname === lastname))
  displayGuest(newGuest)
  document.getElementById("firstname-input").value = ''
  document.getElementById("lastname-input").value = ''
}

// 6. Function to remove a guest
function removeGuest(event) { 
  let xMark = event.target
  let div = xMark.parentElement
  let fullname = xMark.previousSibling.textContent.split(" ")
  let toBeRemoved = guests.getAllGuests().find(guest => guest.firstname === fullname[0] && guest.lastname === fullname[1])
  div.remove()
  guests.removeGuest(toBeRemoved)
}