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
    correctNumber: null,
    score: null,
    highscore: document.querySelector(".highscore").textContent,
    guess: null,
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
    updateMessage: function (status) {
      document.querySelector(".message").textContent = status;
    },
    updateScore: function (number) {
      document.querySelector(".score").textContent = number;
    },
    updateHighscore: function (number) {
      document.querySelector(".highscore").textContent = number;
    },
  };
})();

/// COMPUTE MODULE \\\
const computeGame = (function (dataS, userI) {
  let guess, correct, score, gameplaying;
  // Here is our initialization function
  const init = function () {
    console.log("App has started.");
    gameplaying = true;
    dataS.data.score = 20;
    userI.updateMessage("Start guessing...");
    userI.updateNumber("?");
    userI.updateScore(dataS.data.score);
    dataS.data.correctNumber = Math.floor(Math.random() * 20) + 1;
    dataS.data.guess = -1;
  };
  // This is the code for our CHECK! button
  const click = function () {
    // Let's get the guess number from the input field
    dataS.data.guess = parseFloat(document.querySelector(".guess").value);
    // These are our placeholder values so we don't have to type so much
    guess = dataS.data.guess;
    correct = dataS.data.correctNumber;
    score = dataS.data.score;
    // Let's clear the input field after each click
    userI.clearInput();
    // Here we will build logic for the game itself
    if (gameplaying) {
      if (!isNaN(guess)) {
        // Let's replace the ? with the guess number on the screen
        userI.updateNumber(dataS.data.guess);
        if (guess < 1 || guess > 20) {
          window.alert("Please input a valid number 1-20");
          userI.updateNumber("?");
        } else if (guess === correct) {
          // Here we will decide to either update highscore or not
          if (score > dataS.data.highscore) {
            dataS.data.highscore = score;
            userI.updateHighscore(dataS.data.highscore);
          }
          userI.updateMessage("🎉 Correct!");
          gameplaying = false;
        } else if (guess < correct) {
          userI.updateMessage("📉 Too low!");
          userI.updateScore((score -= 1));
        } else if (guess > correct) {
          userI.updateMessage("📈 Too high!");
          userI.updateScore((score -= 1));
        } else if (score < 1) {
          userI.updateMessage("Out of score points!");
        } else {
          console.log("A wierd bug has happened");
        }
      } else {
        window.alert("Please input a valid number 1-20");
        userI.updateNumber("?");
      }
      dataS.data.score = score;

      console.log(guess, dataS.data.correctNumber);
    }
  };
  // Here are our event listeners
  document.querySelector(".check").addEventListener("click", click);
  document.addEventListener("keypress", function () {
    // Only when user uses the return key
    if (event.keyCode === 13 || event.which === 13) {
      // execute our click function
      click();
    }
  });
  // This is the code for our AGAIN! button
  document.querySelector(".again").addEventListener("click", init);

  return {
    init,
  };
})(dataStorage, userInterface);
computeGame.init();
