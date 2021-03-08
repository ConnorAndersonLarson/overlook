import './css/base.scss'
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
let todayDate = "2020/07/04"

const guestName = document.querySelector('#guestName');
const guestBookings = document.querySelector('#guestBookings');
const userSpending = document.querySelector('#userSpending');
const bookingForm = document.querySelector('#bookingForm');
const bookRoom = document.querySelector('#bookRoom');
const bookDate = document.querySelector('#bookDate');
const filterRooms = document.querySelector('#filterRooms');

bookRoom.addEventListener('click', bookingButtonPress);
bookDate.addEventListener('blur', findAvailableRooms);
filterRooms.addEventListener('click', filterThroughRooms);

Promise.all(apiData)
  .then(responses => Promise.all(responses.map(response => response.json())))
  .then(data => {
    allRooms = data[0].rooms;
    allBookings = data[1].bookings;
    allCustomers = data[2].customers;
    createHotel(allRooms, allBookings, allCustomers)
  })

function createHotel(rooms, bookings, customers) {
  hotel = new Hotel(rooms, bookings, customers)
  createCustomer(0);
}

function createCustomer(customerInfo) {
  customer = new Customer(allCustomers[0]);
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

function updateDate() {
  bookDate.min = todayDate;
  bookDate.value = todayDate.split('/').join('-');
}

function updateGuestName() {
  guestName.innerText = customer.name
}

function updateBookings(data) {
  if (!data[0]) {
    apologize()
  } else {
    guestBookings.innerHTML = '';
    data.forEach(booking => {
      guestBookings.innerHTML += `
      <button type=button class="booking">
        <h3>${booking[0]}</h3>
        <h3>Room Number: <span class="accent">${booking[1].number}</span></h3>
        <h3>Room Type: <span class="accent">${booking[1].roomType}</span></h3>
        <h3>Amount of Beds: <span class="accent">${booking[1].numBeds}</span></h3>
        <h3>Bidet: <span class="accent">${booking[1].bidet}</span></h3>
        <h3>Nightly Cost: <span class="accent">${booking[1].costPerNight}</span></h3>
      </button>`
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
  if (screen.width < 1000) {
    guestBookings.classList.toggle('hidden');
  }
}

function makeBooking() {

}

function findAvailableRooms() {
  let date = event.target.value.split('-').join('/')
  document.querySelector('#roomColumnHeader').innerText = "Available Rooms:"
  hotel.findOpenRooms(date)
  updateBookings(hotel.availableRooms)
}

function filterThroughRooms() {
  let roomType = document.querySelector('#roomType').value
  let bidet = document.querySelector('input[name="Bidet"]:checked').value;
  let numBeds = document.querySelector('#numBeds').value
  let data = {roomType, bidet, numBeds}
  hotel.filterRooms(data)
  updateBookings(hotel.filteredRooms)
}
