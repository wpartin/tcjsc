// Data

const juliasData1 = [3, 5, 2, 12, 7];
const katesData1 = [4, 1, 15, 8, 3];

// Data 2

const juliasData2 = [9, 16, 6, 8, 3];
const katesData2 = [10, 5, 6, 1, 4];

// Function

const checkDogs = function (array1, array2) {
  // Shallow array copy (1st & last 2) for Julia; Use slice!
  const jarray = array1.slice(1, -2);
  // Combine Julia's & Kate's arrays
  const combined = jarray.concat(array2);
  // For each remaining dog, log whether it is an adult (> 3) or a puppy
  combined.forEach(function (age, index) {
    if (age >= 3) {
      console.log(`Dog #${index + 1} is an adult, & is ${age} years old.`);
    } else {
      console.log(`Dog #${index + 1} is still a puppy. 🐶`);
    }
  });
};

console.log(`----- DATA 1 -----`);
checkDogs(juliasData1, katesData1);

console.log(`----- DATA 2 -----`);
checkDogs(juliasData2, katesData2);
