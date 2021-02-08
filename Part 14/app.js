"use strict";

//////////  Coding Challenge #2  \\\\\\\\\

class Car {
  constructor(make, speed) {
    //  -> make & speed properties
    this.make = make;
    //  -> speed in km/h
    this.speed = speed;
  }
  // 1.) Add a getter to return the current speed in MPH
  get speedUS() {
    return this.speed / 1.6;
  }
  // 2.) Add a setter to convert given MPH to KM/H
  set speedUS(mph) {
    this.speed = mph * 1.6;
  }
  accelerate = function () {
    this.speed += 10;
    //  -> log to console new speed
    console.log(`${this.make} is going ${this.speed} km/h.`);
  };
  brake = function () {
    this.speed -= 5;
    //  -> log to console new speed
    console.log(`${this.make} is going ${this.speed} km/h.`);
  };
}

const ford = new Car("Ford", 75);
const vw = new Car("VW", 85);
ford.accelerate();
ford.brake();
// 3.) Play with the stuffs
console.log(
  `${ford.make} is going ${ford.speed} km/h, which is also ${ford.speedUS} mph.`
);
vw.speedUS = 70;
console.log(`${vw.make} is going ${vw.speed} in km/h, calculated by speedUS.`);

//////////  Coding Challenge #2  \\\\\\\\\

//////////    Object.create    \\\\\\\\\\\

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

// steven.name = "Steven";
// steven.birthYear = 2002;
// console.log(steven);
// steven.calcAge();

//////////   Setters & Getters  \\\\\\\\\\

const account = {
  owner: "weston",
  movements: [200, 350, 600, 230],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(move) {
    this.movements.push(move);
  },
};

// console.log(account.latest);
// account.latest = 50;
// console.log(account.latest);

//////////   Setters & Getters  \\\\\\\\\\

//////////    Static Methods    \\\\\\\\\\

//////////      ES6 Classes     \\\\\\\\\\

// classes are NOT hoisted, even if they are declarations
// they are first-class citizens
// they are always executed in strict mode, even if not specified

// class expression
// const PersonCL = class {};

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey, this is ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  static hey() {
    console.log(`Hey there 👋`);
  }

  // set a property that already exists
  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

// PersonCl.hey();

// PersonCl.prototype.greet = function () {
//   console.log(`Hey, this is ${this.firstName}`);
// };

const walter = new PersonCl("Walter Reed", 1965);

const jessica = new PersonCl("Jessica Davis", 1996);

// jessica.greet();
// console.log(jessica.age);

// //////////  Coding Challenge #1 \\\\\\\\\\

// // 1.) constructor function a car

// const Car = function (make, speed) {
//   //  -> make & speed properties
//   this.make = make;
//   //  -> speed in km/h
//   this.speed = speed;
// };

// // 2.) accelerate method that increases speed by 10

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   //  -> log to console new speed
//   console.log(`${this.make} is going ${this.speed} km/h.`);
// };

// // 3.) brake method that will decrease speed by 5

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   //  -> log to console new speed
//   console.log(`${this.make} is going ${this.speed} km/h.`);
// };

// // 4.) make 2 cars & use brake accelerate multiple times

// const ford = new Car("Ford", 75);
// const vw = new Car("VW", 85);

// ford.accelerate();
// vw.accelerate();
// ford.brake();
// vw.brake();
// ford.accelerate();
// vw.accelerate();
// ford.brake();
// vw.brake();

//////////  Coding Challenge #1 \\\\\\\\\\

/*

// 1. New {} (object) is created
// 2. function is called, this = the new {}
// 3. {} linked to prototype <-- this is contained in "new"
// 4. function automatically return {}

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  
  // Don't create a method inside the constructor function
  // Each created object would contain a copy of this function
  // Use prototypal inheritance instead!
  // this.calcAge = function () {
    //   console.log(2037 - this.birthYear);
    // };
  };
  
const wes = new Person("Weston", 1991);
const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);

console.log(wes, matilda, jack);
console.log(wes instanceof Person);

//////// Prototypes \\\\\\\\

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

wes.calcAge();
matilda.calcAge();

// true
console.log(Person.prototype.isPrototypeOf(wes));
// false
console.log(Person.prototype.isPrototypeOf(Person));
// .prototype is more like .prototypeOfLinkedObjects

// species belongs to the prototype, not the objects!
Person.prototype.species = "Homo Sapiens";
console.log(wes, matilda);
console.log(wes.species, matilda.species);

// const arr = [1, 2, 3, 4, 6, 6, 7];
// // console.log(arr.__proto__);
// // console.log(arr.__proto__ === Array.prototype)
// // console.log(arr.__proto__.__proto__)

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

const h1 = document.querySelector("h1");

*/
