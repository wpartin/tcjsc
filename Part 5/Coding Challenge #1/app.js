/// Coding Challenge #1 \\\

const printForecast = function (arr) {
  let day = "";
  let output = "";
  for (i = 0; i < arr.length; i++) {
    // Let's use a ternary to choose the correct formatting for day
    i < 1 ? (day = "day") : (day = "days");
    // Let's log our string with the correct temp & day
    output += `${arr[i]}*C in ${i + 1} ${day} ... `;
  }
  console.log("... " + output);
};

let data1 = [17, 21, 23];
let data2 = [12, 5, -5, 0, 4];

printForecast(data1);
printForecast(data2);
