class Customer {
  constructor(custInfo) {
    if (custInfo) {
      this.userID = custInfo.id;
      this.name = custInfo.name;
    } else {
      this.userID = 'guest';
      this.name = 'guest';
    }
    this.myBookings = [];
    this.bookedData = [];
    this.totalSpent = 0;
  }

  findBookings(bookingData, roomData) {
    let myData = bookingData.filter(booking => booking.userID === this.userID)
    let bookedRooms = myData.map(data => {
      let thisRoomData = roomData.find(room => room.number === data.roomNumber)
      let bookedData = [data.date, thisRoomData]
      return bookedData
    })
    this.bookedData = bookedRooms;
    this.myBookings = myData;
  }

  findTotal(roomData) {
    this.myBookings.forEach(booking => {
      roomData.forEach(room => {
        if (room.number === booking.roomNumber) {
          this.totalSpent += room.costPerNight
        }
      })
    })
    this.totalSpent = this.totalSpent.toFixed(2)
  }

  createBooking(date, room, endLocation) {
    let booked = false;
    let data = {
      "userID": this.userID,
      date,
      "roomNumber": room,
      "roomServiceCharges": []}
    booked = endLocation.find(booking => booking.date === date &&
      booking.roomNumber === room)
    if (!booked) {
      endLocation.push(data);
      return 'Your booking has been confirmed.';
    } else if (booked.userID === this.userID) {
      return "Looks like you've already booked this room";
    } else {
      return 'Oops, that room is unavailable.';
    }
  }

  createNewBooking(roomData, endLocation) {
    let booking = {"userID": this.userID, "date": roomData[0],
      "roomNumber": roomData[1].number, "roomServiceCharges": []}
    return fetch('http://localhost:3001/api/v1/bookings', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(booking)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .catch(err => showError(err))
  }

}

module.exports = Customer;
