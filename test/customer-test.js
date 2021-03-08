import chai from 'chai';
import Hotel from '../src/hotel'
import Customer from '../src/customer'
const expect = chai.expect;

describe('Customer', function() {
let testRooms, testBookings, testCustomers, testHotel, testCustomer;
let booking1, booking2, booking3;

  beforeEach(() => {
    testRooms = {"rooms":[
      {
        "number":1,
        "roomType":"residential suite",
        "bidet":true,
        "bedSize":"queen",
        "numBeds":1,
        "costPerNight":358.4
      },{
        "number":2,
        "roomType":"suite",
        "bidet":false,
        "bedSize":"full",
        "numBeds":2,
        "costPerNight":477.38
      },{
        "number":3,
        "roomType":"single room",
        "bidet":false,
        "bedSize":"king",
        "numBeds":1,
        "costPerNight":491.14
      },{
        "number":4,
        "roomType":"single room",
        "bidet":false,
        "bedSize":"queen",
        "numBeds":1,
        "costPerNight":429.44
      }
    ]};
      booking1 = {
        "id":"5fwrgu4i7k55hl6sz",
        "userID":9,
        "date":"2020/04/22",
        "roomNumber":1,
        "roomServiceCharges":[]
      };
      booking2 = {
        "id":"5fwrgu4i7k55hl6t5",
        "userID":1,
        "date":"2020/01/24",
        "roomNumber":4,
        "roomServiceCharges":[]
      };
      booking3 = {
        "id":"5fwrgu4i7k55hl6t6",
        "userID":1,
        "date":"2020/01/10",
        "roomNumber":1,
        "roomServiceCharges":[]
      };
    testBookings = {"bookings": [booking1, booking2, booking3]};
    testCustomers = {"customers":[
      {
        "id":1,
        "name":"Leatha Ullrich"
      },{
        "id":2,
        "name":"Rocio Schuster"
      },{
        "id":3,
        "name":"Kelvin Schiller"
      },{
        "id":4,
        "name":"Kennedi Emard"
      },{
        "id":5,
        "name":"Rhiannon Little"
      }
    ]};
    testHotel = new Hotel(testRooms, testBookings, testCustomers);
    testCustomer = new Customer(testHotel.customers.customers[0])
  });

  describe('Properties', function() {

    it('should be a function', function() {
      expect(Customer).to.be.a('function');
    });
    it('should be an instance of Customer', function() {
      expect(testCustomer).to.be.an.instanceof(Customer);
    });
    it('should have an ID', function() {
      expect(testCustomer.userID).to.equal(1);
    });
    it('should have a name', function() {
      expect(testCustomer.name).to.equal('Leatha Ullrich');
    });
    it('should have a list of all their bookings', function() {
      testCustomer.findBookings(testBookings.bookings, testRooms.rooms);
      expect(testCustomer.myBookings).to.deep.equal([booking2, booking3])
    });
    it('should have a total amount spent on rooms', function() {
      testCustomer.findBookings(testBookings.bookings, testRooms.rooms);
      testCustomer.findTotal(testRooms.rooms);
      expect(testCustomer.totalSpent).to.equal("787.84")
    });
  });

  describe('Methods', function() {
    it('should be able to create a new booking', function() {
      testCustomer.createNewBooking("2020/01/10", 4, testBookings.bookings)
      expect(testBookings.bookings[3].userID).to.equal(1)
      expect(testBookings.bookings[3].date).to.equal("2020/01/10")
      expect(testBookings.bookings[3].roomNumber).to.equal(4)
      expect(testBookings.bookings[3].roomServiceCharges).to.deep.equal([])
    });
    it('should return an affirmative upon a successful booking', function() {
      expect(testCustomer.createNewBooking("2020/01/10", 4, testBookings.bookings)).to.equal('Your booking has been confirmed.')
    });
    it('should return an error upon an unsuccessful booking', function() {
      expect(testCustomer.createNewBooking("2020/04/22", 1, testBookings.bookings)).to.equal('Oops, that room is unavailable.')
    });
    it('should inform the user if they already booked a room', function() {
      expect(testCustomer.createNewBooking("2020/01/10", 1, testBookings.bookings)).to.equal("Looks like you've already booked this room")
    })
  })

})
