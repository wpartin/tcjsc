"use strict";

// score.textContent

// highscore.textContent

// number.textContent

// btn check

/*  1) get input from check button
    2) display the input on number.textContent
    3) perform correct task based on the input number:
        a) correct
            change the ui in some way to signify a win (potentially the white line)
            display the input number in place of ?
            display the input number in highscore
            do not decrease score
            stop receiving further inputs until AGAIN! is pressed (end of game)
        b) incorrect
            change the ui in some way to signify that the input was too high or too low
            display the input number in place of ?
            decrease the score
            if score reaches 0, no more input can be received until AGAIN! is pressed (you lose)
        c) retain highscore variable even after pressing again

    data storage module
        number, score, highscore
    ui module
        ui updates
    compute module
        handle data calculations, store data in data module

*/

/// DATA STORAGE MODULE \\\
const dataStorage = (function () {
  let data;

  data = {
    correctNumber: Math.floor(Math.random() * 20) + 1,
    score: document.querySelector(".score").textContent,
    highscore: document.querySelector(".highscore").textContent,
    guess: 0,
  };

  return {
    data,
  };
})();

/// UI MODULE \\\
const userInterface = (function () {
  return {
    updateNumber: function (number) {
      document.querySelector(".number").textContent = number;
    },
    clearInput: function () {
      document.querySelector(".guess").value = "";
    },
  };
})();

/// COMPUTE MODULE \\\
const computeGame = (function (dataS, userI) {
  // This is the code for receiving our user input & adding it to our data module
  document.querySelector(".check").addEventListener("click", function () {
    dataS.data.guess = parseFloat(document.querySelector(".guess").value);

    // Let's run the ui code and show it on the screen
    userI.updateNumber(dataS.data.guess);

    // Let's clear the input field after each click
    userI.clearInput();
    console.log(dataS.data.guess);
  });
})(dataStorage, userInterface);
