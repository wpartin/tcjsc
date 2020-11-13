/// Coding Challenge #3 \\\

// We need a constructor function for our people
function Person(fullName, mass, height) {
    this.fullName = fullName;
    this.mass = mass;
    this.height = height;
    this.calcBMI = function() {
        this.bmi = Number(this.mass / this.height ** 2).toFixed(2);
        return this.bmi;
    };
};
// Let's create our people
const mark = new Person('Mark Miller', 78, 1.69);
const john = new Person('John Smith', 92, 1.95);
// Now we need to get the bmi data calculated
mark.calcBMI();
john.calcBMI();
// Let's run the logic to see whose BMI is higher
if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi}).`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi}).`)
} else {
    console.log(`Both ${john.fullName} & ${mark.fullName} have the same BMI.`);
};