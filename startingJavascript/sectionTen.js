// Default Parameters
const bookings = [];
function createBooking(
  flightNum,
  numPassengers = 2,
  price = 200 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
}
createBooking("24er");
createBooking("hsv", 2, 300);
