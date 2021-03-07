class Hotel {
  constructor(rooms, bookings, customers) {
    this.rooms=rooms;
    this.bookings=bookings;
    this.customers=customers;
    this.availableRooms = []
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

  findOpenRooms(searchDate) {
    let bookedRooms = this.bookings.bookings.filter(booking => booking.date === searchDate)
    let openRooms = this.rooms.rooms.reduce((openRooms, room) => {
      bookedRooms.forEach(bookedRoom => {
        if(bookedRoom.roomNumber !== room.number) {
          openRooms.push(room)
        }
      })
      return openRooms
    }, [])
    this.availableRooms = openRooms;
    return openRooms
  }

  filterRooms(filterData) {
    let filteredRooms = this.availableRooms.filter(room =>
      room.roomType === filterData.roomType &&
      (room.bidet === filterData.bidet || filterData.bidet === 'maybe') &&
      room.numBeds === filterData.numBeds);
    return filteredRooms;
  }

}

module.exports = Hotel;
