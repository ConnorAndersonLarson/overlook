class Hotel {
  constructor(rooms, bookings, customers) {
    this.rooms = rooms;
    this.bookings = bookings;
    this.customers = customers;
    this.searchDate = '';
    this.availableRooms = [];
    this.filteredRooms = [];
    this.bookingData = [];
    this.selectedRoom = [];
  }

  createNewBooking(userID, date, room, endLocation) {
    let booked = false;
    let data = {userID, date, "roomNumber": room }
    booked = this.bookings.find(booking => booking.date === date &&
      booking.roomNumber === room)
    if (!booked) {
      endLocation.push(data);
      return 'Your booking has been confirmed.';
    } else {
      return 'Oops, that room is unavailable.';
    }
  }

  findOpenRooms(searchDate) {
    this.searchDate = searchDate;
    let bookedRooms = this.bookings.filter(booking =>
      booking.date === searchDate)
    let roomNums = bookedRooms.map(room => room.roomNumber)
    let theseRooms;
    theseRooms = this.rooms.reduce((openRooms, room) => {
      if (!roomNums.includes(room.number)) {
        openRooms.push([searchDate, room])
        return openRooms
      }
      return openRooms
    }, [])
    this.availableRooms = theseRooms;
    return theseRooms
  }

  filterRooms(filterData) {
    this.findOpenRooms(this.searchDate)
    let filteredRooms = this.availableRooms.filter(room =>
      room[1].roomType === filterData.roomType &&
      (room[1].bidet === (filterData.bidet === 'true') ||
      filterData.bidet === 'maybe') &&
      room[1].numBeds == filterData.numBeds);
    this.filteredRooms = filteredRooms;
  }

  chooseRoom(roomNumber) {
    this.selectedRoom = this.availableRooms.find(room =>
      room[1].number == roomNumber)
  }

}

module.exports = Hotel;
