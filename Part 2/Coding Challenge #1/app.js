/// Challenge #1 \\\

function Team(name, scores = []) {
    this.name = name;
    this.scores = scores;
};

// Here is our calculateAverage arrow function
calculateAverage = (scores) => {
    total = scores.reduce(function(acc, cur) {
        return acc + cur;
    }, 0);
    return (total / 3).toFixed(0);
};

// Check winner function
function checkWinner(avgDolphins, avgKoalas) {
    // Dolphins win
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`${dolphins.name} win (${dolphinsAverage} vs. ${koalasAverage}).`);
    // Koalas win
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`${koalas.name} win (${koalasAverage} vs. ${dolphinsAverage}).`);
    // No one wins
    } else {
        console.log(`No team wins! (Draw or no double points.)`);
    };
};

// Reduce code by using this function for the result
function result() {
    // we need our average of scores
    dolphinsAverage = calculateAverage(dolphins.scores);
    koalasAverage = calculateAverage(koalas.scores);
    // Let's use our function to calculate
    return checkWinner(dolphinsAverage, koalasAverage);
};

const dolphins = new Team('Dolphins');
const koalas = new Team('Koalas');

let dolphinsAverage, koalasAverage;

const data1 = (function() {

    dolphins.scores = [44, 23, 71];
    koalas.scores = [65, 54, 49];

    result();

})();

const data2 = (function() {

    dolphins.scores = [85, 54, 41];
    koalas.scores = [23, 34, 27];

    result();

})();