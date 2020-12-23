// LECTURES

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*
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
