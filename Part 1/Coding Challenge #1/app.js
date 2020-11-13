//// Coding Challenge w/ BMI Calculator \\\\
// Let's use a constructor to manage our people
function Person(name, mass, height) {
    this.name = name;
    this.mass = mass;
    this.height = height;
    this.bmi = (this.mass / this.height ** 2).toFixed(2);
};
// Let's use IIFE's to manage our two tests
const test1 = (function() {
    let person, secondPerson;
    // Here will be the creation of Mark & John
    const mark = new Person('Mark', 78, 1.69);
    const john = new Person('John', 92, 1.95);
    // Here we will log our test data
    if (mark.bmi > john.bmi) {
        person = mark;
        secondPerson = john;
    } else {
        person = john;
        secondPerson = mark;
    };
    console.log(`${person.name} has a mass of ${person.mass} kg, a height of ${person.height} m, and a bmi of ${person.bmi} which is greater than ${secondPerson.name}'s.`);
})();

const test2 = (function() {
    // Here we will create Mark & John again
    const mark = new Person('Mark', 95, 1.88);
    const john = new Person('John', 85, 1.76);
    // Here we will log our test data again
    if (mark.bmi > john.bmi) {
        person = mark;
        secondPerson = john;
    } else {
        person = john;
        secondPerson = mark;
    };
    console.log(`${person.name} has a mass of ${person.mass} kg, a height of ${person.height} m, and a bmi of ${person.bmi} which is greater than ${secondPerson.name}'s.`);
})();