"use strict";

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

/*
// Immediately Invoked Function Expressions (IIFE) \\

const runOnce = function () {
  console.log("This won't run again");
};
runOnce();
// IIFE here

(function () {
  console.log("Ditto");
})();


// Coding Challenge #1

Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 3, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
};

poll.registerNewAnswer = function () {
  // for (const choice of this.options) console.log(choice);
  const answer = prompt(`${this.question}\n${this.options.join("\n")}`);
  
  if (
    answer < 0 ||
    answer > 3 ||
    isNaN(answer) ||
    answer === undefined ||
    answer === null
    ) {
      alert("Please input 0 - 3");
    } else {
      this.answers[answer] += 1;
      this.displayResults();
      this.displayResults("string");
      console.log(`You chose ${this.options[answer].slice(3)}!`);
    }
  };
  
  poll.displayResults = function (type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  };
  
  document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));
  
  poll.displayResults.call({ answers: [5, 3, 2] }, "string");
  */

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
