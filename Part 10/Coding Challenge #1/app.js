"use strict";

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
};

poll.registerNewAnswer = function () {
  // for (const choice of this.options) console.log(choice);
  const answer = prompt(`${this.question}\n${this.options.join("\n")}`);

  if (
    answer < 0 ||
    answer > 3 ||
    isNaN(answer) ||
    answer === undefined ||
    answer === null
  ) {
    alert("Please input 0 - 3");
  } else {
    this.answers[answer] += 1;
    this.displayResults();
    this.displayResults("string");
    console.log(`You chose ${this.options[answer].slice(3)}!`);
  }
};

poll.displayResults = function (type = "array") {
  if (type === "array") {
    console.log(this.answers);
  } else if (type === "string") {
    console.log(`Poll results are ${this.answers.join(", ")}`);
  }
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 3, 2] }, "string");
