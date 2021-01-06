"use strict";

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

const okayAmount = (dog) =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;

// 1.)
dogs.forEach(
  (dog) => (dog.recommendedFood = Math.round(dog.weight ** 0.75 * 28))
);

// 2.)
// dogs.forEach((dog) => {
//   if (dog.owners.includes("Sarah")) {
//     if (dog.curFood > dog.recommendedFood * 1.1) {
//       console.log(`Eating too much`);
//     } else if (dog.curFood < dog.recommendedFood * 0.9) {
//       console.log(`Eating too little`);
//     } else {
//       console.log(`Eating just right`);
//     }
//   }
// });
const sarahsDog = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(
  `Sarah's dog is eating ${
    sarahsDog.curFood > sarahsDog.recommendedFood ? "too much" : "too little"
  } food.`
);

// 3.)

const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recommendedFood)
  .flatMap((dog) => dog.owners);
const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recommendedFood)
  .flatMap((dog) => dog.owners);

// dogs.forEach((dog) => {
//   if (dog.curFood > dog.recommendedFood * 1.1)
//     dog.owners.forEach((owner) => ownersEatTooMuch.push(owner));
//   if (dog.curFood < dog.recommendedFood * 0.9)
//     dog.owners.forEach((owner) => ownersEatTooLittle.push(owner));
// });

console.log(ownersEatTooLittle, ownersEatTooMuch);

// 4.)

console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`);

// 5.)

console.log(
  `Are there any dogs that eat exactly the right amount : ${dogs.some(
    (dog) => dog.curFood === dog.recommendedFood
  )}`
);

// 6.)

// console.log(
//   dogs.some((dog) => {
//     if (okayAmount(dog)) {
//       ownersEatOkay.push(dog);
//       return true;
//     } else {
//       return false;
//     }
//   })
// );

console.log(dogs.some(okayAmount));

// 7.)

console.log(dogs.filter(okayAmount));

// 8.)

console.log(dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood));
