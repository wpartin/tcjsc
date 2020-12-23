/*
// Closures Continued \\

let f;

const g = function () {
  const a = 23;
  const b = 2;
  f = function () {
    console.log(a * b);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
h();
f();

// console.dir(f);

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers.`);
  }, wait * 1000);

  setTimeout(function () {
    console.log(`There are 3 groups, each with ${perGroup} passengers.`);
  }, 2500);

  setTimeout(function () {
    console.log(`Will start boarding in ${wait} seconds.`);
  }, 1000);
};

boardPassengers(180, 4);

// Closures \\ -- Not a feature that you EXPLICITLY USE -- It is implicit

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers.`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

// Immediately Invoked Function Expressions (IIFE) \\

const runOnce = function () {
  console.log("This won't run again");
};
runOnce();
// IIFE here

(function () {
  console.log("Ditto");
})();

/*
// Default Parameters \\
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  bookings.push(booking);
};

createBooking("LH123");
createBooking("DH321", 2, 800);
createBooking("WA931", 6);
createBooking("DS124", undefined, 149);

// How Passing Arguments Works: Value vs. Reference \\
const flight = "LH234";
const weston = {
  name: "Weston Partin",
  passport: 30328102884,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;

  passenger.passport === 30328102884
    ? alert("Checked in")
    : alert("Wrong passport");
};

// checkIn(flight, weston);
// console.log(flight, weston);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

// newPassport(weston);
// checkIn(flight, weston);

// First-class & Higher-Order Functions \\
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher order function!
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

// transformer("JavaScript is a great language!", upperFirstWord);
// transformer("JavaScript is a cool language!", oneWord);

// JS uses callback functions all the time, it makes code very readable & splittable!
const high5 = function () {
  console.log("👋");
};

// Conceptual Higher order & callback function :D
// document.body.addEventListener("click", high5);
// ["Jonas", "Martha", "Adam"].forEach(high5);

// Call & Apply Methods \\

const bookFlight = function (flightNum, name) {
  console.log(
    `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}.`
  );
  this.bookings.push({ flight: `${this.iataCode}${flightNum}` });
};

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  //   book: bookFlight,  Works, but not part of the lesson
};

bookFlight.call(lufthansa, 23, "Sara Williams");

// lufthansa.book = book;

// lufthansa.book(230, "Weston Partin");
// lufthansa.book(124, "Mike Smith");
console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
  //   book: bookFlight, Ditto
};

bookFlight.call(eurowings, 52, "Michael Scott");

// eurowings.book = book;

// eurowings.book(542, "John Adams");
// eurowings.book(643, "Nancy Jones");
console.log(eurowings);

const swiss = {
  name: "Swisswings",
  aitaCode: "SW",
  bookings: [],
};

bookFlight.call(swiss, 748, "Mary Cooper");
console.log(swiss);



const flightData = [583, 'Joshua Kinglett'];
bookFlight.apply(swiss, flightData);
console.log(swiss);

bookFlight.call(swiss, ...flightData);



// The Bind Method \\

const bookEW = bookFlight.bind(eurowings);
const bookSW = bookFlight.bind(swiss);
const bookLH = bookFlight.bind(lufthansa);

bookEW(87, "Steven Williams");
bookSW(34, "Jessie Jones");
bookLH(15, "Martha Varneck");

const bookEW23 = bookFlight.bind(eurowings, 23);

bookEW23("Vernon Jones");

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  this.planes++;
  console.log(this);
  console.log(this.planes);
};

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// Partial Application - we can preset parameters

const addTax = (rate, value) => value + value * rate;
const addVAT = addTax.bind(null, 0.23);
const addTaxRate = (rate) => (value) => value + value * rate;
const addVAT2 = addTaxRate(0.23);

console.log(addVAT(200));
console.log(addVAT2(100));
// console.log(addTax(0.1, 200));
*/
