"use strict";

const calcAverageHumanAge = function (ages) {
  const humanAges = ages
    // Here we will calculate the dog age in human years
    // If age less than or equal to 2
    //// 2 * age
    // else
    //// age = 16 + age * 4
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    // Here we will filter out dogs not at least 18
    .filter((age) => age >= 18)
    // Here we will find the average age of all adult dogs
    // I use / arr.length to get the average of each dog, instead of doing it
    // on the entire array or number after reduce ends
    .reduce((acc, age, _, arr) => (acc += age / arr.length), 0);
  console.log(`The average adult dog age is: ${Math.round(humanAges)}`);
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
