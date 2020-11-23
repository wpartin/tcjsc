"use strict";

///  Data Module \\\
const gameData = (function () {
  let data;
  data = {
    activePlayer: 0,
    score1: 0,
    score2: 0,
    current: 0,
    gamePlaying: false,
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
    current: "#current--",
    dice: ".dice",
    new: ".btn--new",
    roll: ".btn--roll",
    hold: ".btn--hold",
  };
  return {
    DOMstrings,
    switchActivePlayer: function (num) {
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
    clearCurrent: function (num) {
      num === 0
        ? (document.querySelector(DOMstrings.current + "0").textContent = 0)
        : (document.querySelector(DOMstrings.current + "1").textContent = 0);
    },
    updateScore: function (active, num) {
      active === 0
        ? document.querySelector((DOMstrings.score0 += num))
        : document.querySelector((DOMstrings.score1 += num));
    },
  };
})(gameData);

/// Logic Module \\\
const gameLogic = (function (gameD, userI) {
  let dice, score;

  document
    .querySelector(userI.DOMstrings.roll)
    .addEventListener("click", function () {
      dice = Math.floor(Math.random() * 6) + 1;
      if (gameD.data.gamePlaying) {
        if (dice !== 1) {
          gameD.data.current += dice;
          document.querySelector(
            userI.DOMstrings.current + gameD.data.activePlayer
          ).textContent = gameD.data.current;
        } else {
          gameD.data.current = 0;
          userI.clearCurrent(gameD.data.activePlayer);
          userI.switchActivePlayer(gameD.data.activePlayer);
        }
      }
    });

  document
    .querySelector(userI.DOMstrings.hold)
    .addEventListener("click", function () {
      gameD.data.score += gameD.data.current;
      gameD.data.current = 0;
      userI.clearCurrent(gameD.data.activePlayer);
      if (gameD.data.score >= 20) {
        window.alert("Winner!");
      } else {
        userI.switchActivePlayer(gameD.data.activePlayer);
      }
    });

  return {
    init: function () {
      console.log("Application is running");
      document.querySelector(userI.DOMstrings.score0).textContent = 0;
      document.querySelector(userI.DOMstrings.score1).textContent = 0;
      document.querySelector(userI.DOMstrings.dice).classList.add("hidden");
      document.querySelector(userI.DOMstrings.current + "0").textContent = 0;
      document.querySelector(userI.DOMstrings.current + "1").textContent = 0;
      gameD.data.gamePlaying = true;
      gameD.data.activePlayer = 0;
      gameD.data.current = 0;
      gameD.data.score1 = 0;
      gameD.data.score2 = 0;
    },
  };
})(gameData, userInterface);

gameLogic.init();
