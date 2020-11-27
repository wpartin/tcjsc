"use strict";

///  Data Module \\\
const gameData = (function () {
  let data;
  data = {
    activePlayer: 0,
    score0: 0,
    score1: 0,
    current: 0,
    gamePlaying: false,
    winningScore: 10,
  };
  return {
    data,
  };
})();

/// UI Module \\\
const userInterface = (function (gameD) {
  const DOMstrings = {
    player0: ".player--0",
    player1: ".player--1",
    activePlayer: "player--active",
    score0: "#score--0",
    score1: "#score--1",
    name0: "#name--0",
    name1: "#name--1",
    current: "#current--",
    dice: ".dice",
    new: ".btn--new",
    roll: ".btn--roll",
    hold: ".btn--hold",
  };
  return {
    DOMstrings,
    switchActivePlayer: function (num) {
      // Num will check which activePlayer we are
      if (num === 0) {
        document
          .querySelector(DOMstrings.player0)
          .classList.remove(DOMstrings.activePlayer);
        document
          .querySelector(DOMstrings.player1)
          .classList.add(DOMstrings.activePlayer);
        gameD.data.activePlayer = 1;
      } else {
        document
          .querySelector(DOMstrings.player1)
          .classList.remove(DOMstrings.activePlayer);
        document
          .querySelector(DOMstrings.player0)
          .classList.add(DOMstrings.activePlayer);
        gameD.data.activePlayer = 0;
      }
    },
    clearCurrent: function (activePlayer) {
      activePlayer === 0
        ? (document.querySelector(DOMstrings.current + "0").textContent = 0)
        : (document.querySelector(DOMstrings.current + "1").textContent = 0);
    },
    updateScore: function (activePlayer) {
      activePlayer === 0
        ? (document.querySelector(DOMstrings.score0).textContent =
            gameD.data.score0)
        : (document.querySelector(DOMstrings.score1).textContent =
            gameD.data.score1);
    },
    showDice: function () {
      document.querySelector(DOMstrings.dice).classList.remove("hidden");
    },
    hideDice: function () {
      document.querySelector(DOMstrings.dice).classList.add("hidden");
    },
    changeDice: function (num) {
      document.querySelector(DOMstrings.dice).src = "dice-" + num + ".png";
    },
    addWinner: function (num) {
      num === 0
        ? (document.querySelector(DOMstrings.name0).textContent =
            "🏆 WINNER 🏆")
        : (document.querySelector(DOMstrings.name1).textContent =
            "🏆 WINNER 🏆");
      gameD.data.gamePlaying = false;
    },
    removeWinner: function () {
      gameD.data.activePlayer === 0
        ? (document.querySelector(DOMstrings.name0).textContent = "Player 1")
        : (document.querySelector(DOMstrings.name1).textContent = "Player 2");
    },
  };
})(gameData);

/// Logic Module \\\
const gameLogic = (function (gameD, userI) {
  let dice, score;
  // Here is our roll button functionality
  document
    .querySelector(userI.DOMstrings.roll)
    .addEventListener("click", function () {
      // Let's get our dice roll
      dice = Math.floor(Math.random() * 6) + 1;
      // Is our game still playing?
      if (gameD.data.gamePlaying) {
        // Is our dice NOT 1
        if (dice !== 1) {
          userI.showDice();
          userI.changeDice(dice);
          gameD.data.current += dice;
          document.querySelector(
            // We are using the hard-coded DOM bit from userI, with the dynamic number of activePlayer
            userI.DOMstrings.current + gameD.data.activePlayer
          ).textContent = gameD.data.current;
          // What if our dice IS 1?
        } else {
          gameD.data.current = 0;
          userI.hideDice();
          userI.clearCurrent(gameD.data.activePlayer);
          userI.switchActivePlayer(gameD.data.activePlayer);
        }
      }
    });
  // Here is our Hold button functionality
  document
    .querySelector(userI.DOMstrings.hold)
    .addEventListener("click", function () {
      // Is our game playing?
      if (gameD.data.gamePlaying) {
        // Are we player 1 or player 2?
        if (gameD.data.activePlayer === 0) {
          gameD.data.score0 += gameD.data.current;
          gameD.data.current = 0;
          userI.updateScore(gameD.data.activePlayer);
          // Did we win?
          if (gameD.data.score0 >= gameD.data.winningScore)
            userI.addWinner(gameD.data.activePlayer);
        } else {
          gameD.data.score1 += gameD.data.current;
          gameD.data.current = 0;
          userI.updateScore(gameD.data.activePlayer);
          // Did we win?
          if (gameD.data.score1 >= gameD.data.winningScore)
            userI.addWinner(gameD.data.activePlayer);
        }
      }
      // If there isn't a winner yet let's swap players
      if (gameD.data.gamePlaying) {
        userI.hideDice();
        userI.clearCurrent(gameD.data.activePlayer);
        userI.switchActivePlayer(gameD.data.activePlayer);
        // If someone won, let's stop roll and hold from working
      } else {
        userI.hideDice();
        userI.clearCurrent(gameD.data.activePlayer);
      }
    });
  // This is our New Game button functionality
  document
    .querySelector(userI.DOMstrings.new)
    .addEventListener("click", function () {
      userI.removeWinner();
      gameLogic.init();
      userI.switchActivePlayer();
    });

  return {
    // This function will 'initialize' the game on first load, and each time New Game is clicked
    init: function () {
      console.log("Application is running");
      userI.removeWinner();
      document.querySelector(userI.DOMstrings.score0).textContent = 0;
      document.querySelector(userI.DOMstrings.score1).textContent = 0;
      userI.hideDice();
      document.querySelector(userI.DOMstrings.current + "0").textContent = 0;
      document.querySelector(userI.DOMstrings.current + "1").textContent = 0;
      gameD.data.gamePlaying = true;
      gameD.data.activePlayer = 0;
      gameD.data.current = 0;
      gameD.data.score0 = 0;
      gameD.data.score1 = 0;
    },
  };
})(gameData, userInterface);

gameLogic.init();
