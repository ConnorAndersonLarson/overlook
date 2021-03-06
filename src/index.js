// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
fetchBookings()

console.log('This is the JavaScript entry file - your code begins here.');
console.log(fetchBookings())

let testBooking;
let eventTest;
console.log('global var call', testBooking)
window.addEventListener('load', testfunction)

function testfunction() {
  console.log('eventListenerfunction', testBooking);
  eventTest = testBooking;
  console.log('listenerEventTest', eventTest)
}
console.log('globalEventTest', eventTest)



function fetchBookings() {
fetch('http://localhost:3001/api/v1/bookings')
  .then(response => response.json())
  .then(data => testBooking = data.bookings)
  .catch(data=> console.log(data))
}
