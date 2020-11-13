/// Tip calculator using loops \\\

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips = [];
let totals = new Array();

const calcTip = function(bill) {
    for (let i = 0; i < bills.length; i++) {
        if (bill >= 50 && bill <= 300) {
            tips.push(Number((bills[i] * 0.15).toFixed(2)));
            totals.push(Number((bills[i] + tips[i]).toFixed(2)));
        } else {
            tips.push(Number((bills[i] * 0.20).toFixed(2)));
            totals.push(Number((bills[i] + tips[i]).toFixed(2)));
        };
    };
};

const calcAverage = function(arr) {
    let average = 0;
    for (let bill of bills) {
        average += bill;
    }
    return average / bills.length;
};

calcTip(bills);

const billAverage = calcAverage(totals);

console.log(tips, totals, billAverage);