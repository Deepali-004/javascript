//no of wins of each team in each season
const matches = require("./matches.json");
function noOfWins() {
  const result = {};
  for (let i = 0; i < matches.length; i++) {
    let year = matches[i]["season"];
    let winnerr = matches[i]["winner"];
    if (!result[year]) {
      // Code Suggestions: Careful with control flow here. Creating the object skips our next counting logic because it sits inside 'else'. Move counting to an independent step that runs every iteration.
      result[year] = {};
    } else {
      if (!result[year][winnerr]) {
        result[year][winnerr] = 1;
      } else {
        result[year][winnerr]++;
      }
    }
  }
  return result;
}
const noOfWinsOutput = noOfWins();
const fs = require("fs");
let formattedData = JSON.stringify(noOfWinsOutput, null, 2);
fs.writeFileSync("noOfWins.txt", formattedData);
