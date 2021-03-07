class Customer {
  constructor(custInfo) {
    this.userID = custInfo.id;
    this.name = custInfo.name;
    this.myBookings = [];
    this.totalSpent = 0;
  }

  findBookings(bookingData) {
    let myData = bookingData.filter(booking => booking.userID === this.userID)
    this.myBookings = myData;
  }

  findTotal(roomData) {
    this.myBookings.forEach(booking => {
      roomData.forEach(room => {
        if(room.number === booking.roomNumber) {
          this.totalSpent+=room.costPerNight
        }
      })
    })
    this.totalSpent = this.totalSpent.toFixed(2)
  };

  createNewBooking(date, room, endLocation) {
    let booked = false;
    let data = {"userID": this.userID, "date": date, "roomNumber": room, "roomServiceCharges": []}
    booked = endLocation.find(booking => booking.date === date && booking.roomNumber === room)
    if (!booked) {
      endLocation.push(data);
      return 'Your booking has been confirmed.';
    } else if (booked.userID === this.userID) {
      return "Looks like you've already booked this room";
    } else {
      return 'Oops, that room is unavailable.';
    }
  }

};

module.exports = Customer;
