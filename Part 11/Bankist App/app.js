"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

// Event Handlers

let currentAccount;

////// Login Button Functionality

btnLogin.addEventListener("click", function (event) {
  // Prevent form from submitting
  event.preventDefault();
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI & Message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;
    // Clear Input Fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();
    updateUI(currentAccount);
  } else {
    containerApp.style.opacity = 0;
    // Clear Input Fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();
    labelWelcome.textContent = "";
    console.log("error");
  }
});

//////  Transfer Money Functionality

const moneyOut = (amount, from) => from.movements.push(amount * -1);
const moneyIn = (amount, toWho) => toWho.movements.push(amount);

btnTransfer.addEventListener("click", function (event) {
  event.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const toWho = accounts.find((acc) => acc.username === inputTransferTo.value);

  inputTransferAmount.value = inputTransferTo.value = "";
  if (toWho && toWho?.username !== currentAccount.username && amount > 0) {
    if (currentAccount.balance >= amount) {
      moneyOut(amount, currentAccount);
      moneyIn(amount, toWho);
      updateUI(currentAccount);
    } else {
      alert(`Not enough funds to complete transfer.`);
    }
  } else {
    console.log("error");
  }
});

//////  Request Loan functionality

btnLoan.addEventListener("click", function (event) {
  event.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((move) => move >= amount * 0.1)
  ) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount = "";
});

//////  Close an Account Functionality

btnClose.addEventListener("click", function (event) {
  event.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    accounts.splice(index, 1);

    containerApp.style.opacity = 0;
  }
  inputLoginUsername.value = inputLoginPin.value = "";
  labelWelcome.textContent = `Log in to get started`;
});

////// Sort Button Functionality

let sorted = false;

btnSort.addEventListener("click", function (event) {
  event.preventDefault();

  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////

const updateUI = function (account) {
  displayMovements(account);
  calcDisplayBalance(account);
  calcDisplaySummary(account);
};

//////  Show the movements on the UI

const displayMovements = function (account, sort = false) {
  containerMovements.innerHTML = "";

  const movements = sort
    ? account.movements.slice().sort((curr, next) => curr - next)
    : account.movements;

  movements.forEach(function (move, index) {
    const type = move > 0 ? "deposit" : "withdrawal";

    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
    <div class="movements__value">${move}€</div>
    </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

//////  Calculate the balance & display it

const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce((acc, curr) => (acc += curr), 0);
  labelBalance.textContent = `${account.balance}€`;
};

//////  Calculate the summary at the bottom & display it

const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter((move) => move > 0)
    .reduce((acc, curr) => acc + curr, 0);
  labelSumIn.textContent = `${incomes}€`;
  const out = account.movements
    .filter((move) => move < 0)
    .reduce((acc, curr) => (acc += curr), 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = account.movements
    .filter((move) => move > 0)
    .map((deposit) => (deposit * account.interestRate) / 100)
    .filter((int) => int >= 1)
    .reduce((acc, curr) => (acc += curr), 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

//////  We need to create our usernames dynamically, and run this first so that the
//////  login functionality works!

const createUserNames = function (accounts) {
  accounts.forEach(function (account) {
    account.username = account.owner
      .toLowerCase()
      .split(" ")
      .map((current) => current[0])
      .join("");
  });
};

createUserNames(accounts);

// labelBalance.addEventListener("click", function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll(".movements__value"),
//     (element) => Number(element.textContent.replace("€", ""))
//   );
//   console.log(movementsUI);

//   // Can also do this with the spread operator, then call map on the resulting array
//   const movementsUI2 = [...document.querySelectorAll(".movements__value")];
//   console.log(
//     movementsUI2.map((element) => Number(element.textContent.replace("€", "")))
//   );
// });

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;

