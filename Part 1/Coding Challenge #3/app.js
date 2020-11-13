//// Coding Challenge #3 \\\\
// Here is our constructor for the teams
function Team(name, scores = []) {
    this.name = name;
    this.scores = scores;
};
// Here is our calculateAverage method
Team.prototype.calculateAverage = function() {
    total = this.scores.reduce(function(acc, cur) {
        return acc + cur;
    }, 0);
    return (total / 3).toFixed(0);
};
// Here we will create the teams with a name
// But no scores yet
const dolphins = new Team('Dolphins');
const koalas = new Team('Koalas');

// Test Data function \\

const testData = (function() {
    
    calculateWinner = () => {
        let team;
        // Let's store our averages here for easy typing
        let dAverage = Number(dolphins.calculateAverage());
        let kAverage = Number(koalas.calculateAverage());
        // Let's set the team variable
        if (dAverage > kAverage && dAverage >= 100) {
            team = dolphins;
        } else if (kAverage > dAverage && kAverage >= 100) {
            team = koalas;
        };
        // What if no team has more than 100 points?
        if (team !== undefined) {
            // Let's print the winner
            console.log(`The ${team.name} win with a higher average score of ${team.calculateAverage()} points.`);
        } else if ((dAverage + kAverage) / 2 > 100) {
            console.log(`${dolphins.name} & ${koalas.name} have tied!!  They both had a score of ${dolphins.calculateAverage()}.`);
        } else {
            console.log(`Both teams have less than 100 points, no winner.`);
        }
    };
    // Let's run our function to get the first result
    dolphins.scores = [96, 108, 89];
    koalas.scores = [88, 91, 110];
    calculateWinner();

    // Bonus 1 \\

    dolphins.scores = [97, 112, 101];
    koalas.scores = [109, 95, 123];
    // Now we need to call our function again
    calculateWinner();

    // Bonus 2 ||

    // Let's keep the dolphins scores from above
    koalas.scores = [109, 95, 106];
    // And let's run it for the last time
    calculateWinner();

})();