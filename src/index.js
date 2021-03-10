import './css/base.scss'
import image from './images/overlook-hotel-party.jpg'
import Hotel from './hotel';
import Customer from './customer';

const apiData = [
  fetch('http://localhost:3001/api/v1/rooms'),
  fetch('http://localhost:3001/api/v1/bookings'),
  fetch('http://localhost:3001/api/v1/customers')
]
let allRooms, allBookings, allCustomers;
let hotel;
let customer;
let todayDate = "2020-07-05"

const guestName = document.querySelector('#guestName');
const guestBookings = document.querySelector('#guestBookings');
const userSpending = document.querySelector('#userSpending');
const bookingForm = document.querySelector('#bookingForm');
const bookRoom = document.querySelector('#bookRoom');
const bookDate = document.querySelector('#bookDate');
const filterRooms = document.querySelector('#filterRooms');
const confirmationScreen = document.querySelector('#bookingConfirmation');
const photoSection = document.querySelector('#photoSection');
const columnHeader = document.querySelector('#roomColumnHeader');
const logInForm = document.querySelector('#logInForm');
let bookButtons;

window.addEventListener('load', loadIn);
bookRoom.addEventListener('click', bookingButtonPress);
bookDate.addEventListener('blur', findAvailableRooms);
filterRooms.addEventListener('click', filterThroughRooms);
confirmationScreen.addEventListener('click', confirmPress);
logInForm.addEventListener('click', logPress);
let buttonsListener;

function loadIn() {
  Promise.all(apiData)
    .then(responses => Promise.all(responses.map(response => response.json())))
    .then(data => {
      if (data) {
        allRooms = data[0].rooms;
        allBookings = data[1].bookings;
        allCustomers = data[2].customers;
        createHotel(allRooms, allBookings, allCustomers)
      }
    })
    .catch(err => showError(err))
  setDate()
}

function showError(error) {
  console.log(error)
  confirmationScreen.classList.toggle('hidden')
  document.querySelector('#bookingResponse').innerText =
  `Error: ${error.message} <br>Please Refresh and Try Again</br>`
}

function createHotel(rooms, bookings, customers) {
  hotel = new Hotel(rooms, bookings, customers)
}

function setDate() {
  bookDate.min = todayDate;
  bookDate.value = todayDate;
}

function logPress() {
  if (event.target.id === 'logInButton') {
    logIn()
  }
}

function logIn() {
  event.preventDefault()
  const userIndex = logInForm.childNodes[3].value.split("r").pop()
  const cust = hotel.customers.find(cust => cust.id == userIndex)
  if (cust && logInForm.childNodes[7].value === 'overlook2021') {
    createCustomer(cust)
    screenCheck()
    logInForm.classList.toggle('hidden')
    bookRoom.classList.remove('hidden')
    bookRoom.innerHTML = 'Book your next visit'
  } else {
    logInForm.childNodes[7].value = ''
    document.querySelector('#errorMSG').classList.remove('invisible');
  }
}

function createCustomer(customerInfo) {
  customer = new Customer(customerInfo);
  customer.findBookings(allBookings, allRooms);
  customer.findTotal(allRooms);
  updateDOM()
}

function updateDOM() {
  updateDate()
  updateGuestName()
  updateBookings(customer.bookedData)
  updateTotalSpent()
}

function screenCheck() {
  if (screen.width > 1024) {
    photoSection.classList.remove('hidden');
  }
}

function updateDate() {
  bookDate.min = todayDate;
  bookDate.value = todayDate.split('/').join('-');
}

function updateGuestName() {
  guestName.innerText = `Back, ${customer.name}`;
  columnHeader.innerText = 'Your Previous Bookings';
}

function updateBookings(data) {
  if (!data[0]) {
    apologize()
  } else {
    guestBookings.innerHTML = '';
    data.forEach(booking => {
      guestBookings.innerHTML += `
      <section class="booking">
        <h3>${booking[0]}</h3>
        <h3>Room Number: <span class="accent">${booking[1].number}</span></h3>
        <h3>Room Type: <span class="accent">${booking[1].roomType}</span></h3>
        <h3>Amount of Beds: <span class="accent">${booking[1].numBeds}</span></h3>
        <h3>Bidet: <span class="accent">${booking[1].bidet}</span></h3>
        <h3>Nightly Cost: <span class="accent">${booking[1].costPerNight}</span></h3>
        <button type=button class="booking book-button hidden" id="${booking[1].number}">Choose This Room!</button>
      </section>`
    })
  }
}

function apologize() {
  guestBookings.innerHTML = `
    <section class="booking">
      <h3>We are extremely sorry, <span class="accent">${customer.name}</span></h3>
      <h3>We cannot find any available rooms</h3>
      <h3>Please try a different date or amenities.</h3>
    </section>`
}

function updateTotalSpent() {
  document.querySelector('#spending').classList.remove('hidden')
  userSpending.innerText += customer.totalSpent;
}

function bookingButtonPress() {
  if (bookRoom.innerHTML === 'Book your next visit') {
    showBookingForm()
  } else {
    makeBooking()
  }
}

function showBookingForm() {
  bookingForm.classList.toggle('hidden');
  bookRoom.innerHTML = 'Confirm My Visit';
  photoSection.classList.add('hidden');
}

function makeBooking() {
  customer.createNewBooking(hotel.selectedRoom, allBookings)
  document.querySelector('#bookingConfirmation').classList.toggle('hidden');
  userSpending.innerText += customer.totalSpent;
  bookingForm.classList.toggle('hidden');
}

function findAvailableRooms() {
  let date = event.target.value.split('-').join('/')
  columnHeader.innerText = "Available Rooms:"
  hotel.findOpenRooms(date)
  updateBookings(hotel.availableRooms)
  toggleButtons()
}

function filterThroughRooms() {
  let roomType = document.querySelector('#roomType').value
  let bidet = document.querySelector('input[name="Bidet"]:checked').value;
  let numBeds = document.querySelector('#numBeds').value
  let data = {roomType, bidet, numBeds}
  hotel.filterRooms(data)
  updateBookings(hotel.filteredRooms)
  toggleButtons()
}

function toggleButtons() {
  let allBookings = document.querySelectorAll('.book-button')
  allBookings.forEach(booking => {
    booking.classList.remove('hidden')
  })
  bookButtons = document.querySelectorAll('.book-button');
  buttonsListener = bookButtons.forEach(button=> button.addEventListener('click', selectRoom));
}

function selectRoom() {
  hotel.chooseRoom(event.target.id)

}

function confirmPress() {
  if (event.target.id === 'return') {
    window.location.reload()
  }
}
