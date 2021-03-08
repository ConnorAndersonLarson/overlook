import chai from 'chai';
import Hotel from '../src/hotel'
const expect = chai.expect;

describe('Hotel', function() {
  let testRooms, testBookings, testCustomers, testHotel;
  let room1, room2, room3, room4;
  beforeEach(() => {
    testRooms = [room1, room2, room3, room4]
      room1 = {
        "number":1,
        "roomType":"residential suite",
        "bidet":true,
        "bedSize":"queen",
        "numBeds":1,
        "costPerNight":358.4
      }
      room2 = {
        "number":2,
        "roomType":"suite",
        "bidet":false,
        "bedSize":"full",
        "numBeds":2,
        "costPerNight":477.38
      }
      room3 = {
        "number":3,
        "roomType":"single room",
        "bidet":false,
        "bedSize":"queen",
        "numBeds":1,
        "costPerNight":491.14
      }
      room4 = {
        "number":4,
        "roomType":"single room",
        "bidet":false,
        "bedSize":"queen",
        "numBeds":1,
        "costPerNight":429.44
      }

    testBookings = [
      {
        "id":"5fwrgu4i7k55hl6sz",
        "userID":9,
        "date":"2020/04/22",
        "roomNumber":1,
        "roomServiceCharges":[]
      },{
        "id":"5fwrgu4i7k55hl6t5",
        "userID":43,
        "date":"2020/01/24",
        "roomNumber":4,
        "roomServiceCharges":[]
      },{
        "id":"5fwrgu4i7k55hl6t6",
        "userID":13,
        "date":"2020/01/10",
        "roomNumber":1,
        "roomServiceCharges":[]
      }
    ];
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
  });

  describe('Properties', function() {

    it('should be a function', function() {
      expect(Hotel).to.be.a('function');
    });
    it('should be an instance of Hotel', function() {
      expect(testHotel).to.be.an.instanceof(Hotel);
    });
    it('should contain all rooms', function() {
      expect(testHotel.rooms).to.deep.equal(testRooms);
    });
    it('should contain all bookings', function() {
      expect(testHotel.bookings).to.deep.equal(testBookings);
    });
    it('should contain all customers', function() {
      expect(testHotel.customers).to.deep.equal(testCustomers);
    });
    it('should be able to store the date being searched', function() {
      expect(testHotel.searchDate).to.equal('');
    });
    it('should be able to store available rooms', function() {
      expect(testHotel.availableRooms).to.deep.equal([]);
    });
    it('should be able to store available rooms that have been filtered', function() {
      expect(testHotel.filteredRooms).to.deep.equal([]);
    });
    it('should be able to store filtered room data and the date being looked for', function() {
      expect(testHotel.bookingData).to.deep.equal([]);
    });
  });

  describe('Methods', function() {

    it('should be able to create a new booking', function() {
      testHotel.createNewBooking(1, "2020/01/10", 4, testBookings)
      expect(testBookings[3].userID).to.equal(1)
      expect(testBookings[3].date).to.equal("2020/01/10")
      expect(testBookings[3].roomNumber).to.equal(4)
    });
    it('should return an affirmative upon a successful booking', function() {
      expect(testHotel.createNewBooking(1, "2020/01/10", 4, testBookings)).to.equal('Your booking has been confirmed.')
    });
    it('should return an error upon an unsuccessful booking', function() {
      expect(testHotel.createNewBooking(2, "2020/01/10", 1, testBookings)).to.equal('Oops, that room is unavailable.')
    });
    it('should create a list of available rooms on a given day', function() {
      expect(testHotel.findOpenRooms("2020/01/10")).to.deep.equal([room2, room3, room4])
    });
    it('should be able to filter through available rooms', function() {
      let roomFilter = {'roomType':'suite' ,'bidet':false ,'numBeds':2}
      testHotel.findOpenRooms("2020/01/10")
      testHotel.filterRooms(roomFilter)
      expect(testHotel.bookingData).to.deep.equal([["2020/01/10",room2]])
    })
  });
});
