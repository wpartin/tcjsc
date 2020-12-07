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
    winningScore: 50,
  };
  return {
    data,
  };
})();

/// UI Module \\\
const userInterface = (function (gameD) {
  const DOMstrings = {
    player0: document.querySelector(".player--0"),
    player1: document.querySelector(".player--1"),
    activePlayer: "player--active",
    score0: document.querySelector("#score--0"),
    score1: document.querySelector("#score--1"),
    name0: document.querySelector("#name--0"),
    name1: document.querySelector("#name--1"),
    current0: document.querySelector("#current--0"),
    current1: document.querySelector("#current--1"),
    dice: document.querySelector(".dice"),
    new: document.querySelector(".btn--new"),
    roll: document.querySelector(".btn--roll"),
    hold: document.querySelector(".btn--hold"),
  };
  return {
    DOMstrings,
    switchActivePlayer: function (num) {
      // Num will check which activePlayer we are
      if (num === 0) {
        DOMstrings.player0.classList.remove(DOMstrings.activePlayer);
        DOMstrings.player1.classList.add(DOMstrings.activePlayer);
        gameD.data.activePlayer = 1;
      } else {
        DOMstrings.player1.classList.remove(DOMstrings.activePlayer);
        DOMstrings.player0.classList.add(DOMstrings.activePlayer);
        gameD.data.activePlayer = 0;
      }
    },
    clearCurrent: function (activePlayer) {
      activePlayer === 0
        ? (DOMstrings.current0.textContent = 0)
        : (DOMstrings.current1.textContent = 0);
    },
    updateScore: function (activePlayer) {
      activePlayer === 0
        ? (DOMstrings.score0.textContent = gameD.data.score0)
        : (DOMstrings.score1.textContent = gameD.data.score1);
    },
    showDice: function () {
      DOMstrings.dice.classList.remove("hidden");
    },
    hideDice: function () {
      DOMstrings.dice.classList.add("hidden");
    },
    changeDice: function (num) {
      DOMstrings.dice.src = `dice-${num}.png`;
    },
    addWinner: function (num) {
      num === 0
        ? (DOMstrings.name0.textContent = "🏆 WINNER 🏆")
        : (DOMstrings.name1.textContent = "🏆 WINNER 🏆");
      gameD.data.gamePlaying = false;
      console.log("Application has stopped");
    },
    removeWinner: function () {
      gameD.data.activePlayer === 0
        ? (DOMstrings.name0.textContent = "Player 1")
        : (DOMstrings.name1.textContent = "Player 2");
    },
  };
})(gameData);

/// Logic Module \\\
const gameLogic = (function (gameD, userI) {
  let dice;
  // Here is our roll button functionality
  userI.DOMstrings.roll.addEventListener("click", function () {
    // Let's get our dice roll
    dice = Math.floor(Math.random() * 6) + 1;
    // Is our game still playing?
    if (gameD.data.gamePlaying) {
      // Is our dice NOT 1
      if (dice !== 1) {
        userI.changeDice(dice);
        userI.showDice();
        gameD.data.current += dice;
        // We are using the hard-coded DOM bit from userI, with the dynamic number of activePlayer
        gameD.data.activePlayer === 0
          ? (userI.DOMstrings.current0.textContent = gameD.data.current)
          : (userI.DOMstrings.current1.textContent = gameD.data.current);
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
  userI.DOMstrings.hold.addEventListener("click", function () {
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
  userI.DOMstrings.new.addEventListener("click", function () {
    gameLogic.init();
    userI.switchActivePlayer();
  });

  return {
    // This function will 'initialize' the game on first load, and each time New Game is clicked
    init: function () {
      console.log("Application has started.");
      userI.removeWinner();
      userI.hideDice();
      userI.DOMstrings.score0.textContent = 0;
      userI.DOMstrings.score1.textContent = 0;
      userI.DOMstrings.current0.textContent = 0;
      userI.DOMstrings.current1.textContent = 0;
      gameD.data.gamePlaying = true;
      gameD.data.activePlayer = 0;
      gameD.data.current = 0;
      gameD.data.score0 = 0;
      gameD.data.score1 = 0;
    },
  };
})(gameData, userInterface);

gameLogic.init();
