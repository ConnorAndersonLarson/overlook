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

const guestName = document.querySelector('#guestName');
const guestBookings = document.querySelector('#guestBookings');
const userSpending = document.querySelector('#userSpending');
const bookingForm = document.querySelector('#bookingForm');
const bookRoom = document.querySelector('#bookRoom');
const bookDate = document.querySelector('#bookDate');

bookRoom.addEventListener('click', bookingButtonPress)
bookDate.addEventListener('blur', findAvailableRooms)

Promise.all(apiData)
  .then(responses => Promise.all(responses.map(response => response.json())))
  .then(data => {
    allRooms = data[0].rooms;
    allBookings = data[1].bookings;
    allCustomers = data[2].customers;
    createHotel(allRooms, allBookings, allCustomers)
  })

//document.querySelector('.overlook').addEventListener('click', test)

function createHotel(rooms, bookings, customers) {
  hotel = new Hotel(rooms, bookings, customers)
  createCustomer(0);
}

function createCustomer(customerInfo) {
  customer = new Customer(allCustomers[0]);
  customer.findBookings(allBookings);
  customer.findTotal(allRooms);
  updateGuestName()
  updateBookings()
  updateTotalSpent()
}

function updateGuestName() {
  guestName.innerText = customer.name
}

function updateBookings() {
  customer.myBookings.forEach(booking => {
    guestBookings.innerHTML+= `
    <section class="booking">
      <h3>Booked For: <span class="accent">${booking.date}</span></h3>
      <h3>Room Number: <span class="accent">${booking.roomNumber}</span></h3>
    </section>`
  })
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
  if(screen.width < 1000) {
    guestBookings.classList.toggle('hidden');
  }
}

function findAvailableRooms() {
  let date = event.target.value.split('-').join('/')
  hotel.findOpenRooms(date)
}
