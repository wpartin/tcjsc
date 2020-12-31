"use strict";

///////// Map, Filter, Reduce & Find \\\\\\\\

////// Map returns a NEW array containing the results of applying an operation on all original array elements

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

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

////// Sorting
// sort() is based on strings

const owners = ["Weston", "Zach", "Adam", "Martha"];

// Ascending Order
movements.sort((curr, next) => curr - next);
console.log(movements);

// Descending Order
movements.sort((curr, next) => next - curr);
console.log(movements);

console.log(owners.sort());

////// Flat & flatMap

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];

// const accountMovements = accounts.map((account) => account.movements);

// const allMovements = accountMovements.flat();

// flatMap is only good for 1 level deep arrays!
// Otherwise use map & then flat
// const overallBalance = accounts
//   .flatMap((account) => account.movements)
//   .reduce((acc, curr) => acc + curr, 0);

// console.log(overallBalance);
// console.log(allMovements);
// console.log(accountMovements);
// console.log(arr.flat());
// console.log(arr.flat(2));
////// Some & Every

// console.log(movements);
// console.log(movements.includes(-130));

// Some

// console.log(movements.some((move) => move > 0));

// Every

// console.log(account4.movements.every((move) => deposit()));

// Separate Callback

// const deposit = (move) => move > 0;

// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

////// Find only returns the first element, not all like filter

// const firstWithdrawal = movements.find((move) => move < 0);
// console.log(movements, firstWithdrawal);
// console.log(accounts);

// const account = accounts.find((acc) => acc.owner === "Jessica Davis");

// const accountFor = function (account) {
//   for (const acc of account) {
//     if (acc.owner === "Jessica Davis") return acc;
//   }
// };

// function to covert to usd

/*
const euroToUsd = (item) => Math.round(item * 1.1);

const movementsUsd = movements.map((current) => euroToUsd(current));

console.log(movements);
console.log(movementsUsd);

const movementsUsdFor = [];

for (const movement of movements) {
  movementsUsdFor.push(euroToUsd(movement));
}

console.log(movementsUsdFor);

const movementsDescriptions = movements.map(
  (movement, i) =>
    `Movement ${i + 1}: You ${
      movement > 0 ? "deposited" : "withdrew"
    } ${movement}.`
);

console.log(movementsDescriptions);

////// Filter returns a NEW array containing the array elements that passed a specific test condition

const deposits = movements.filter((move) => move > 0);

console.log(deposits);

const withdrawals = movements.filter((move) => move < 0);

console.log(withdrawals);

////// Reduce boils all array elements down into one single element (ex: add elements together) (acc + current) + initial value & returns the final value

// const balance = movements.reduce(function (acc, curr, i) {
  //   console.log(`Iteration #${i}: ${acc}`);
  //   return (acc += curr);
  // }, 0);
  
  const balance = movements.reduce((acc, curr) => (acc += curr), 0);
  
  let balance2 = 0;
  for (const move of movements) balance2 += move;
  
  console.log(balance, balance2);
  
  // Maximum value
  
  const maximum = movements.reduce((acc, curr) => (curr > acc ? curr : acc), 0);
  console.log(maximum);
  
  const euroToUsd = 1.1;
  const totalDepositsUSD = movements
  .filter((move) => move > 0)
  .map((move) => move * euroToUsd)
  .reduce((acc, curr) => acc + curr, 0);
  
  console.log(totalDepositsUSD);
*/

/*

// LECTURES

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);


/////////////////////////////////////////////////
/// Slice - Doesn't change the original array!
console.log(`Here is slice`);
console.log(`OG Arr ------/`);
let arr = ["a", "b", "c", "d", "e"];
console.log(arr);
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());

/// Splice - Does change the original array!

console.log(`Here is splice`);
// console.log(arr.splice(2));
console.log(arr);
console.log(`OG Arr ------/`);
arr.splice(-1);
arr.splice(1, 2);
console.log(arr);

/// Reverse

arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());

/// Concat

const letters = arr.concat(arr2);
console.log(letters);
/// Same as above, but doesn't mutate any array
// console.log([...arr, ...arr2]);

/// Join

console.log(letters.join(" - "));

/// Looping Arrays: foreach



// Don't forget, index comes first!
// for (const move of movements) {
  
  console.log(`----- FOR OF -----`);
  
  for (const [i, move] of movements.entries()) {
    move > 0
    ? console.log(`Movement ${i + 1}: You deposited $${move}.`)
    : console.log(`Movement ${i + 1}: You withdrew $${Math.abs(move)}.`);
  }
  
  console.log(`----- FOR EACH -----`);
  
  // Don't forget, index comes second!
  
  movements.forEach(function (move, index, array) {
    move > 0
    ? console.log(`Movement ${index + 1}: You deposited $${move}.`)
    : console.log(`Movement ${index + 1}: You withdrew $${Math.abs(move)}.`);
  });
  
  
  /// forEach with Maps & Sets
  
  // Map
  const currencies = new Map([
    ["USD", "United States dollar"],
    ["EUR", "Euro"],
    ["GBP", "Pound sterling"],
  ]);
  
  currencies.forEach(function (value, key, map) {
    console.log(`${key}: ${value}: ${map}`);
  });
  
  // Set - No keys!  No indexes!  Signature was kept so forEach would run the same on maps, sets, arrays, etc
  const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
  console.log(currenciesUnique);
  currenciesUnique.forEach(function (value, _, map) {
    console.log(`${value}: ${value}`);
  });
  
*/
