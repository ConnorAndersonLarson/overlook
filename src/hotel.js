class Hotel {
  constructor(rooms, bookings, customers) {
    this.rooms=rooms;
    this.bookings=bookings;
    this.customers=customers;
    this.searchDate = '';
    this.availableRooms = [];
    this.filteredRooms = [];
    this.bookingData = []
  }

  createNewBooking(userID, date, room, endLocation) {
    let booked = false;
    let data = {"userID": userID, "date": date, "roomNumber": room }
    booked = this.bookings.find(booking => booking.date === date && booking.roomNumber === room)
      if (!booked) {
      endLocation.push(data);
      return 'Your booking has been confirmed.';
    } else {
      return 'Oops, that room is unavailable.';
    }
  }

  findOpenRooms(searchDate) {
    this.searchDate = searchDate;
    let bookedRooms = this.bookings.filter(booking => booking.date === searchDate)
    let roomNums = bookedRooms.map(room => room.roomNumber)
    let theseRooms;
      theseRooms = this.rooms.reduce((openRooms, room) => {
        if(!roomNums.includes(room.number)){
          openRooms.push(room)
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
      room.roomType === filterData.roomType &&
      (room.bidet === (filterData.bidet === 'true') || filterData.bidet === 'maybe') &&
      room.numBeds == filterData.numBeds);
    this.filteredRooms = filteredRooms;
    this.transformFilterData()
  }

  transformFilterData() {
    let bookedRooms = this.filteredRooms.map(data => {
      return [this.searchDate, data]
    })
    this.bookingData = bookedRooms
  }

}

module.exports = Hotel;
