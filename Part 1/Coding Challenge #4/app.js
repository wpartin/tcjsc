//// Tip Calculator \\\\

const Tip = function(bill) {
    this.bill = bill;
    this.tip = (this.bill < 50 || this.bill > 300) ? this.tip = .2 : this.tip = .15;
    this.tipAmount = (this.bill * this.tip).toFixed(2);
    this.finalBill = this.bill + (this.bill * this.tip);
    this.billSummary = function() {
        console.log(`This bill was $${this.bill}, the tip was $${this.tipAmount}, & the final bill was $${this.finalBill}.`)
    }
};

const tip1 = new Tip(275);
tip1.billSummary();

const tip2 = new Tip(40);
tip2.billSummary();

const tip3 = new Tip(430);
tip3.billSummary();