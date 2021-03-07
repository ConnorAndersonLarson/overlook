class Hotel {
  constructor(rooms, bookings, customers) {
    this.rooms=rooms;
    this.bookings=bookings;
    this.customers=customers;
  }

  // findCustomer(id) {}

  createNewBooking(userID, date, room, endLocation) {
    let booked = false;
    let data = {"userID": userID, "date": date, "roomNumber": room }
    booked = this.bookings.bookings.find(booking => booking.date === date && booking.roomNumber === room)
    if (!booked) {
    endLocation.push(data);
    return 'Your booking has been confirmed.';
  } else {
    return 'Oops, that room is unavailable.';
  }
  }
}

module.exports = Hotel;
