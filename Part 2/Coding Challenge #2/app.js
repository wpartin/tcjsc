/// Coding Challenge #3 \\\
// Here is our tip calculating function
const calcTip = function(bill) {
    return (bill >= 50 && bill <= 300 ? 
        (bill * 0.15).toFixed(2) :
        (bill * 0.20).toFixed(2));
};
// Here we test a bill of 100
console.log(calcTip(100));
// Here is our bills array
const bills = [125, 555, 44];
// Here we make an empty tips array, and we will push our tip values
let tips = [];
// Here is our totals array, which we will push to
let total = [];
// We will use some logic beyond this section in which to loop over our arrays and get our results
for (let i = 0; i < bills.length; i++) {
    tips.push(Number(calcTip(bills[i])));
    total.push(Number(bills[i] + tips[i]));
};
// Now lets check everything in the console
console.log(bills, tips, total);