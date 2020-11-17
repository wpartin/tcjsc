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
            stop receiving further inputs until AGAIN! is pressed
        b) incorrect
            change the ui in some way to signify that the input was too high or too low
            display the input number in place of ?
            decrease the score
        c) retain highscore variable even after pressing again

    data storage module
        number, score, highscore
    ui module
        ui updates
    compute module
        handle data calculations, store data in data module

*/

/// DATA STORAGE MODULE \\\
const dataStorage = (function () {})();

/// UI MODULE \\\
const userInterface = (function () {})();

/// COMPUTE MODULE \\\
const computeGame = (function () {})();
